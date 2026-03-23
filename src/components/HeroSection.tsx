"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              AI for developers
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4">
              <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                ScribePilot
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary font-medium leading-relaxed mb-2">
              Your AI pair programmer.
            </p>
            <p className="text-xl md:text-2xl text-text-secondary font-medium leading-relaxed mb-6">
              Built to stay private.
            </p>

            <p className="text-base text-text-tertiary max-w-md mb-8 leading-relaxed">
              Context-aware code suggestions that understand your entire
              codebase. Your code never leaves your organization.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-all hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]"
              >
                Get started free
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 12l4-4-4-4" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary border border-border hover:border-border-hover font-medium px-6 py-3 rounded-lg transition-all"
              >
                Learn more
              </a>
            </div>
          </motion.div>

          {/* Right — code editor mock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/50">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-text-tertiary ml-2 font-mono">
                  auth.service.ts
                </span>
              </div>

              {/* Code area */}
              <div className="p-5 font-mono text-sm leading-7 overflow-x-auto">
                <div className="text-text-tertiary">
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-text-primary">{"{ verify }"}</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">{`'jsonwebtoken'`}</span>;
                </div>
                <div className="text-text-tertiary mt-1">
                  <span className="text-purple-400">import</span>{" "}
                  <span className="text-text-primary">{"{ db }"}</span>{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">{`'./database'`}</span>;
                </div>
                <div className="mt-3">
                  <span className="text-purple-400">export async function</span>{" "}
                  <span className="text-blue-400">authenticateUser</span>
                  <span className="text-text-primary">(token: string) {"{"}</span>
                </div>
                <div className="pl-6">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-text-primary">decoded = </span>
                  <span className="text-blue-400">verify</span>
                  <span className="text-text-primary">(token, process.env.</span>
                  <span className="text-orange-400">JWT_SECRET</span>
                  <span className="text-text-primary">);</span>
                </div>

                {/* Scribe trigger comment */}
                <div className="pl-6 mt-2">
                  <span className="text-text-tertiary italic">{"  // scribe: find and return the authenticated user"}</span>
                </div>

                {/* AI suggestion — ghost text */}
                <div className="pl-6 mt-1 relative">
                  <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-accent/50 rounded-full" />
                  <span className="text-accent/70 italic">
                    {"  const user = await db.users.findUnique({"}
                  </span>
                </div>
                <div className="pl-6">
                  <span className="text-accent/70 italic">
                    {"    where: { id: decoded.sub }"}
                  </span>
                </div>
                <div className="pl-6">
                  <span className="text-accent/70 italic">
                    {"  });"}
                  </span>
                </div>
                <div className="pl-6">
                  <span className="text-accent/70 italic">
                    {"  if (!user) throw new AuthError('User not found');"}
                  </span>
                </div>
                <div className="pl-6">
                  <span className="text-accent/70 italic">
                    {"  return user;"}
                  </span>
                </div>

                <div className="mt-1">
                  <span className="text-text-primary">{"}"}</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
