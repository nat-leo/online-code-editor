# 🔒 Security Notice
This project currently executes Python code locally via spawn("python3", ...).
If deployed publicly, you must secure it with containerized sandboxing such as:
Docker + CPU/memory limits + network disabled
gVisor / Firejail / LiteVM
Judge0 integration
We have a roadmap to support this cleanly.

# Development Setup

Clone the repository:

```
git clone https://github.com/you/online-code-runner
cd online-code-runner
```

Install dependencies and then run the project
```
npm install
```
```
npm run dev
```

It can be found at:

👉 http://localhost:3000
