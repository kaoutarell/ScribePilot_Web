"use client";

import { motion } from "framer-motion";

const securityPoints = [
  {
    title: "Private inference",
    description: "Models run inside your security perimeter. Nothing leaves.",
  },
  {
    title: "No training on your code",
    description: "Your data is never used to train or fine-tune any model.",
  },
  {
    title: "End-to-end encryption",
    description: "All data encrypted in transit (TLS 1.3) and at rest (AES-256).",
  },
  {
    title: "API security",
    description: "Scoped API keys, IP allowlists, and request signing.",
  },
  {
    title: "Audit logs",
    description: "Complete, immutable logs of every action and access event.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SecuritySection() {
  return (
    <section id="security" className="py-24 md:py-32">
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
            Your code stays inside your organization.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Built from the ground up for teams that can&apos;t compromise on security.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Security points */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {securityPoints.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2l8 4v6c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">{point.title}</h3>
                  <p className="text-sm text-text-tertiary leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Terminal mock */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="text-xs text-text-tertiary ml-2 font-mono">
                  terminal
                </span>
              </div>
              <div className="p-5 font-mono text-sm leading-7">
                <div>
                  <span className="text-accent">$</span>{" "}
                  <span className="text-text-secondary">scribepilot audit --org acme-corp</span>
                </div>
                <div className="mt-3 text-text-tertiary">
                  ✓ Encryption: AES-256-GCM at rest
                </div>
                <div className="text-text-tertiary">
                  ✓ Transport: TLS 1.3 enforced
                </div>
                <div className="text-text-tertiary">
                  ✓ Model isolation: private VPC
                </div>
                <div className="text-text-tertiary">
                  ✓ Data retention: 0 days (no persistence)
                </div>
                <div className="text-text-tertiary">
                  ✓ Training opt-out: enforced
                </div>
                <div className="mt-3">
                  <span className="text-purple-400">All checks passed.</span>{" "}
                  <span className="text-text-tertiary">No data leaves your org boundary.</span>
                </div>
                <div className="mt-3">
                  <span className="text-accent">$</span>{" "}
                  <span className="text-text-tertiary animate-pulse">▋</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
