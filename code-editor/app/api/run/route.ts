import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import fs from "fs/promises";
import os from "os";
import path from "path";

export const runtime = "nodejs";

type RunBody = {
  language: string;
  code: string;
  input: string;   // full raw text from UI
};

const PY_UTILS = `
import re, json, ast
from typing import Any, List

def smart_parse_scalar(token: str) -> Any:
    token = token.strip()
    if token == "":
        return token

    # bool
    if token.lower() == "true":
        return True
    if token.lower() == "false":
        return False

    # int
    try:
        i = int(token)
        return i
    except ValueError:
        pass

    # float
    try:
        f = float(token)
        return f
    except ValueError:
        pass

    # JSON / Python literal (lists, dicts, tuples, etc.)
    if (token.startswith("{") and token.endswith("}")) or \
       (token.startswith("[") and token.endswith("]")) or \
       (token.startswith("(") and token.endswith(")")):
        try:
            return json.loads(token)
        except Exception:
            try:
                return ast.literal_eval(token)
            except Exception:
                pass

    return token

def smart_parse_lines(raw: str) -> List[Any]:
    lines = [ln for ln in raw.strip().splitlines() if ln.strip() != ""]
    return [smart_parse_scalar(ln) for ln in lines]

def parse_int_list(line: str) -> List[int]:
    return [int(x) for x in line.strip().split() if x.strip()]

def parse_int_matrix(raw: str) -> List[List[int]]:
    lines = [ln for ln in raw.strip().splitlines() if ln.strip()]
    return [parse_int_list(ln) for ln in lines]
`;

export async function POST(req: NextRequest) {
  let body: RunBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { detail: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { language, code, input } = body;

  if (language !== "python") {
    return NextResponse.json(
      { detail: "Only python supported in this MVP" },
      { status: 400 }
    );
  }

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "code-run-"));
  const scriptPath = path.join(tmpDir, "main.py");

  const scriptContent = `
import sys, json, ast
from typing import Any, List

def parse_line_to_list(line: str) -> List[Any]:
    s = line.strip()
    if not s:
        return []

    # 1) Try JSON / Python list literal on the whole line
    if (s.startswith("[") and s.endswith("]")) or (s.startswith("(") and s.endswith(")")):
        # eg: "[1,2,3]" or "(1,2,3)"
        try:
            v = json.loads(s)
            if isinstance(v, list):
                return v
        except Exception:
            try:
                v = ast.literal_eval(s)
                if isinstance(v, list):
                    return v
                if isinstance(v, tuple):
                    return list(v)
            except Exception:
                pass

    # 2) Fallback: split by commas / whitespace and parse scalars
    s = s.replace(",", " ")
    parts = [p for p in s.split() if p.strip()]

    result: List[Any] = []
    for tok in parts:
        t = tok.strip()

        # try int
        try:
            result.append(int(t))
            continue
        except ValueError:
            pass

        # try float
        try:
            result.append(float(t))
            continue
        except ValueError:
            pass

        # fallback: string
        result.append(t)

    return result

def parse_lines_to_lists(raw: str) -> List[List[Any]]:
    lines = [ln for ln in raw.splitlines() if ln.strip()]
    return [parse_line_to_list(ln) for ln in lines]

${code}

if __name__ == "__main__":
    import traceback
    raw = sys.stdin.read()
    lines = [ln for ln in raw.splitlines() if ln.strip()]
    sol = Solution()
    for ln in lines:
        try:
            nums = parse_line_to_list(ln)
            result = sol.solution(nums)
            # Print each result on its own line
            print(result)
        except Exception:
            # Show the error but keep going for other lines
            traceback.print_exc()
`;


  await fs.writeFile(scriptPath, scriptContent, "utf-8");

  try {
    const child = spawn("python3", [scriptPath], {
      cwd: tmpDir,
      env: {
        ...process.env,
        PYTHONUNBUFFERED: "1",
      },
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    // full raw input from UI
    child.stdin.write(input || "");
    child.stdin.end();

    const timeoutMs = 3000;
    const timeout = setTimeout(() => {
      child.kill("SIGKILL");
    }, timeoutMs);

    const exitCode: number = await new Promise((resolve) => {
      child.on("close", (code) => {
        clearTimeout(timeout);
        resolve(code ?? 0);
      });
    });

    return NextResponse.json(
      {
        stdout,
        stderr,
        exitCode,
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { detail: err.message || "Execution error" },
      { status: 500 }
    );
  } finally {
    fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
  }
}
