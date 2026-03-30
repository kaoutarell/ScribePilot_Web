"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const whatItMeans = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    text: "ScribePilot will access and analyze parts of the company's GitHub codebase and selected documents to assist in coding.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    text: "Data is used solely to generate suggestions, insights, and improvements — never for any other purpose.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    text: "No unauthorized sharing of code or sensitive data occurs outside the approved environment.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    text: "Users can withdraw consent at any time, which will immediately stop all further data processing.",
  },
];

const whyItMatters = [
  {
    title: "Compliance",
    desc: "Ensures adherence to privacy and data protection principles across all jurisdictions.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Rights Protection",
    desc: "Safeguards the rights of every individual and organization contributing their data.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      </svg>
    ),
  },
  {
    title: "Trust",
    desc: "Builds transparent, long-lasting trust between the ScribePilot team and its users.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

const domainItems = [
  {
    title: "Security Risks in AI Assistants",
    desc: "We constrain how code actions execute and validate high-risk action flows before edits are applied. Ambiguous or multi-match scenarios prompt clarification instead of unsafe assumptions.",
  },
  {
    title: "Data Governance Principles",
    desc: "Inference runs through our hosted Ollama stack. We pass only the context needed for each task and reflect transparent, controlled handling in our implementation and documentation.",
  },
  {
    title: "Secure Code Analysis",
    desc: "Guarded action parsing and validation paths check required fields before executing create/add/update flows. Extensive automated tests cover edge cases and failure paths.",
  },
  {
    title: "Policy Enforcement Models",
    desc: "Deterministic branching blocks missing inputs, requires disambiguation for ambiguous targets, and gates certain actions behind confirmation states — explicit allow/deny/needs-input behavior.",
  },
  {
    title: "Developer Workflow Integration",
    desc: "Controls are embedded directly in the extension workflow so developers receive actionable prompts without leaving their normal coding loop, backed by the same test infrastructure.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConsentPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-6">

          {/* Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-20 pt-10"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Legal
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5">
              <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                User Consent
              </span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              ScribePilot accesses your codebase and selected documents to provide AI-powered assistance.
              User consent is critical to transparency and compliance.
            </p>
          </motion.div>

          {/* What It Means */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-20"
          >
            <motion.h2 variants={fadeUp} transition={{ duration: 0.4 }} className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              What It Means
            </motion.h2>
            <motion.p variants={fadeUp} transition={{ duration: 0.4 }} className="text-text-secondary mb-8 leading-relaxed">
              User consent is the permission given by a company or its employees allowing ScribePilot to access
              and process their code and data. By giving consent, users acknowledge and agree that:
            </motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
              {whatItMeans.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-border-hover transition-all"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed pt-0.5">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Why It Matters */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-20"
          >
            <motion.h2 variants={fadeUp} transition={{ duration: 0.4 }} className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Why It Matters
            </motion.h2>
            <motion.div variants={stagger} className="grid sm:grid-cols-3 gap-4">
              {whyItMatters.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="p-6 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-border-hover transition-all text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Divider */}
          <div className="border-t border-border mb-20" />

          {/* Domain Knowledge Base */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.4 }} className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Domain Knowledge Base</h2>
              <p className="text-text-secondary leading-relaxed">
                The technical foundations that underpin our consent and security model.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="space-y-4">
              {domainItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="flex gap-5 p-6 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-border-hover transition-all group"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold group-hover:bg-accent/20 transition-colors">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  );
}
