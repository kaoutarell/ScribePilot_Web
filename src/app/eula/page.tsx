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

const keyTerms = [
  {
    term: "License Grant",
    desc: "Users have the non-exclusive right to use ScribePilot for coding assistance within their company.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
    badge: "Access",
    badgeColor: "text-violet-300 bg-violet-500/10 border-violet-400/20",
  },
  {
    term: "Restrictions",
    desc: "Users may not resell or redistribute ScribePilot, nor use it to process data outside the company's agreed scope and environment.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    badge: "Prohibited",
    badgeColor: "text-red-300 bg-red-500/10 border-red-400/20",
  },
  {
    term: "Ownership",
    desc: "The ScribePilot development team retains ownership of the software. All company code and datasets remain the property of the company.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    badge: "IP",
    badgeColor: "text-blue-300 bg-blue-500/10 border-blue-400/20",
  },
  {
    term: "Liability Disclaimer",
    desc: "While ScribePilot is built to assist in development tasks, the project team is not liable for errors, bugs, or unintended consequences from its use.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    badge: "Disclaimer",
    badgeColor: "text-amber-300 bg-amber-500/10 border-amber-400/20",
  },
  {
    term: "Termination",
    desc: "The agreement can be terminated if the user violates EULA rules, or if the company removes its consent for data use.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
      </svg>
    ),
    badge: "End of Use",
    badgeColor: "text-zinc-300 bg-zinc-500/10 border-zinc-400/20",
  },
];

const whyItMatters = [
  {
    title: "Clarity of Use",
    desc: "Defines exactly what users can and cannot do with ScribePilot — no ambiguity.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "IP Protection",
    desc: "Protects the ScribePilot team's intellectual property while respecting company code ownership.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    desc: "Provides full transparency to companies sharing sensitive code or proprietary data.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EulaPage() {
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
                End-User License
              </span>
              <br />
              <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                Agreement
              </span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              The EULA is the contract that governs how ScribePilot may be used.
              Accepting it is a condition of use.
            </p>
          </motion.div>

          {/* Intro card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-xl border border-accent/20 bg-accent/5 mb-20"
          >
            <p className="text-text-secondary leading-relaxed text-sm">
              By accessing or using ScribePilot, you agree to the terms of this End-User License Agreement.
              If you are using ScribePilot on behalf of a company, you represent that you have the authority
              to bind that company to these terms.
            </p>
          </motion.div>

          {/* Key Terms */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-20"
          >
            <motion.h2 variants={fadeUp} transition={{ duration: 0.4 }} className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Key Terms
            </motion.h2>
            <motion.div variants={stagger} className="space-y-4">
              {keyTerms.map((item) => (
                <motion.div
                  key={item.term}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="flex gap-5 p-6 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-border-hover transition-all group"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h3 className="font-semibold">{item.term}</h3>
                      <span className={`text-xs font-medium border rounded-full px-2 py-0.5 ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Divider */}
          <div className="border-t border-border mb-20" />

          {/* Why It Matters */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
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

        </div>
      </main>
      <Footer />
    </>
  );
}
