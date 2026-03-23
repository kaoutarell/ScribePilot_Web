"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "93.8%", label: "Suggestion accuracy", description: "Accepted on first try" },
  { value: "8.6s", label: "Avg response time", description: "For multi-file edits" },
  { value: "16", label: "Languages supported", description: "And growing" },
  { value: "80%", label: "Time saved", description: "On repetitive tasks" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MetricsSection() {
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
            ScribePilot by the numbers.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-accent mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-text-primary mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-text-tertiary">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
