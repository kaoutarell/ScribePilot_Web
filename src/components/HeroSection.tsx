"use client";

import { motion } from "framer-motion";
import inlineCompletionGif from "@/assets/inline-completion-gif.gif";

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

          {/* Right — inline completion GIF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            {/* Subtle glow behind the frame */}
            <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-2xl pointer-events-none" />
            <div className="relative rounded-xl border border-white/[0.08] bg-card overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/[0.04]">
              {/* VS Code-style title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-black/20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs text-text-tertiary font-mono ml-2">auth.service.ts</span>
              </div>
              {/* GIF — autoplays and loops natively */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={inlineCompletionGif.src}
                alt="ScribePilot inline completion demo"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
