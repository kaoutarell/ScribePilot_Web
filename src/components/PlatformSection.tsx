"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "RAG Context Retrieval",
    description:
      "Automatically retrieves relevant code snippets and documentation to ground every suggestion in your actual codebase.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI Usage Monitoring",
    description:
      "Track token usage, suggestion acceptance rates, and team productivity metrics from a single dashboard.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 3v18h18M7 16l4-5 4 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Secure Inference",
    description:
      "All model inference runs within your security boundary. No code is sent to third-party servers.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2l8 4v6c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cloud History",
    description:
      "Every interaction is logged and searchable. Review past suggestions, accepted changes, and team patterns.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Private Deployments",
    description:
      "Deploy ScribePilot on your own infrastructure. Air-gapped and VPC options available.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M22 12H2M22 12a10 10 0 01-10 10M22 12a10 10 0 00-10-10M2 12a10 10 0 0010 10M2 12a10 10 0 0110-10M12 2a15 15 0 014 10 15 15 0 01-4 10M12 2a15 15 0 00-4 10 15 15 0 004 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Plugin Integrations",
    description:
      "Works with VS Code, JetBrains, Neovim, and more. Drop into your existing workflow.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PlatformSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The complete platform.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Everything your team needs to ship faster with AI — without compromising security.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-border bg-card p-6 hover:border-border-hover hover:bg-card-hover transition-all cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-base font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-text-tertiary leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
