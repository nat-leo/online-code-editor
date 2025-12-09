// app/problems/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Problem } from "@/lib/types";
import { sampleProblems } from "@/components/data/Problems";
import ProblemClient from "./problemClient";

type PageProps = {
  params: { slug: string };
};

export default async function ProblemPage({ params }: PageProps) {
  const { slug } = await params;

  const problem: Problem | undefined = sampleProblems.find(
    (p) => p.slug === slug
  );

  if (!problem) {
    notFound();
  }

  const initialCode = problem.starter_code ?? "// No starter code provided";

  return (
    <ProblemClient
      problem={problem}
      initialCode={initialCode}
      initialLanguage="python"
    />
  );
}
