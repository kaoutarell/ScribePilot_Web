"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individual developers getting started.",
    features: [
      "500 suggestions / month",
      "3 repositories",
      "Community support",
      "VS Code extension",
    ],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/ month",
    description: "For developers and small teams who need more.",
    features: [
      "Unlimited suggestions",
      "Unlimited repositories",
      "Priority inference",
      "Multi-file edits",
      "All IDE extensions",
      "Email support",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Custom",
    period: "",
    description: "For orgs that need full control.",
    features: [
      "Private deployment",
      "Custom model tuning",
      "SSO & SCIM",
      "Audit logs",
      "SLA guarantee",
      "Dedicated support",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type Plan = "free" | "pro" | "custom";

export default function PricingSection({ onOpenModal }: { onOpenModal: (plan: Plan) => void }) {
  return (
    <section id="pricing" className="py-24 md:py-32">
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
            Start free, scale with your team.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            No credit card required. Upgrade when you&apos;re ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-xl border p-6 flex flex-col ${
                plan.highlighted
                  ? "border-accent/40 bg-accent/5"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-accent text-white px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-text-tertiary">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-text-tertiary mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-accent shrink-0">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onOpenModal(plan.name.toLowerCase() as Plan)}
                className={`w-full block text-center text-sm font-medium py-2.5 rounded-lg transition-all ${
                  plan.highlighted
                    ? "bg-accent hover:bg-accent-hover text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]"
                    : "border border-border hover:border-border-hover text-text-secondary hover:text-text-primary"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
