"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setStatus("idle");
      setEmail("");
      setErrorMsg("");
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const webhookUrl = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL;

    if (!webhookUrl || webhookUrl.includes("YOUR_SCRIPT_ID")) {
      // Dev mode — simulate success
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      return;
    }

    try {
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires no-cors
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      // no-cors means we can't read the response — assume success
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal card */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4"
          >
            <div
              className="pointer-events-auto w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-2xl shadow-black/60 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-text-tertiary hover:text-text-primary transition-colors p-1"
                aria-label="Close"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4l10 10M14 4L4 14" strokeLinecap="round" />
                </svg>
              </button>

              {status === "success" ? (
                /* ── Success state ── */
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold mb-2">You&apos;re on the list!</h2>
                  <p className="text-text-secondary text-sm">
                    We&apos;ll reach out as soon as ScribePilot is ready for you.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 text-sm text-text-tertiary hover:text-text-primary transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* ── Form state ── */
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <h2 className="text-xl font-bold">Get early access</h2>
                      <span className="text-xs font-medium bg-accent/15 text-accent border border-accent/20 rounded-full px-2 py-0.5">
                        Free
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Join the waitlist — be first to know when we launch.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      ref={inputRef}
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrorMsg("");
                      }}
                      placeholder="you@company.com"
                      className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                    />

                    {errorMsg && (
                      <p className="text-xs text-red-400">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-3 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Joining…
                        </span>
                      ) : (
                        "Join waitlist"
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-text-tertiary mt-4 text-center">
                    No spam. Unsubscribe any time.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
