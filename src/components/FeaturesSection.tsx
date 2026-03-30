"use client";

import { motion } from "framer-motion";
import indexWorkspaceGif from "@/assets/index-workspace-gif.gif";
import changeFromPromptsGif from "@/assets/change-from-prompts-gif.gif";

// ─── Data ────────────────────────────────────────────────────────────────────

const gifFeatures = [
  {
    title: "AI that knows your codebase",
    description:
      "ScribePilot indexes your entire repository to deliver suggestions that actually fit. No generic completions — every suggestion is context-aware.",
    bullets: [
      "Cross-file understanding",
      "Deep repo awareness",
      "Project-specific patterns",
    ],
    gif: indexWorkspaceGif.src,
    alt: "ScribePilot indexing workspace demo",
  },
  {
    title: "Create, edit, and delete code from prompts",
    description:
      "Describe what you want in plain English. ScribePilot generates, modifies, or removes code across files — no manual edits required.",
    bullets: [
      "Prompt-driven development",
      "Multi-file operations",
      "Inline transformations",
    ],
    gif: changeFromPromptsGif.src,
    alt: "ScribePilot code changes from prompts demo",
  },
];

const cardFeatures = [
  {
    title: "Ghost-text completions",
    description:
      "Inline suggestions appear as you type — fast, unobtrusive, and accurate. Accept with Tab, dismiss with Escape.",
    bullets: [
      "Sub-second latency",
      "Context-aware predictions",
      "Non-disruptive UX",
    ],
  },
  {
    title: "Access rules your org can trust",
    description:
      "Fine-grained permissions let you control who accesses what. Built for teams that take security seriously.",
    bullets: [
      "Role-based access control",
      "Team-level governance",
      "Audit trail for every action",
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function GifFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      {/* Subtle purple glow behind frame */}
      <div className="absolute -inset-3 bg-accent/5 rounded-2xl blur-xl pointer-events-none" />
      <div className="relative rounded-xl border border-white/[0.08] bg-card overflow-hidden shadow-xl shadow-black/50 ring-1 ring-white/[0.04]">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-black/20">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent shrink-0">
      <path
        d="M13.5 4.5L6 12L2.5 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ─── Section ──────────────────────────────────────────────────────────────────

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            What ScribePilot can do for your team.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Four capabilities that change how your team writes code.
          </p>
        </motion.div>

        {/* GIF features — alternating full-width rows */}
        <div className="space-y-24 md:space-y-32 mb-24 md:mb-32">
          {gifFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-text-secondary">
                      <CheckIcon />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* GIF */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <GifFrame src={feature.gif} alt={feature.alt} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Card features — side-by-side, no visual */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {cardFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-8 border-l-2 border-l-accent/30 hover:border-border-hover hover:bg-card-hover transition-all"
            >
              <h3 className="text-xl font-bold tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-text-secondary">
                    <CheckIcon />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
