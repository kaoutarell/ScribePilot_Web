"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 text-center relative"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Ready to code with context?
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          Join thousands of developers shipping faster with AI that actually
          understands their code.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-all hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]"
          >
            Start for free
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 12l4-4-4-4" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary border border-border hover:border-border-hover font-medium px-6 py-3 rounded-lg transition-all"
          >
            Book a demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}
