"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI that knows your codebase",
    description:
      "ScribePilot indexes your entire repository to deliver suggestions that actually fit. No generic completions — every suggestion is context-aware.",
    bullets: [
      "Cross-file understanding",
      "Deep repo awareness",
      "Project-specific patterns",
    ],
    code: `// ScribePilot understands your patterns
import { UserService } from './services';
import { validateInput } from './utils';

export async function createUser(data: CreateUserDTO) {
  const validated = validateInput(data, userSchema);
  const user = await UserService.create(validated);
  await EventBus.emit('user.created', user);
  return user;
}`,
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
    code: `> "Add rate limiting to the API endpoints"

+ import { rateLimit } from './middleware';
+
+ const limiter = rateLimit({
+   windowMs: 15 * 60 * 1000,
+   max: 100,
+   standardHeaders: true,
+ });
+
+ app.use('/api/', limiter);`,
  },
  {
    title: "Ghost-text completions",
    description:
      "Inline suggestions appear as you type — fast, unobtrusive, and accurate. Accept with Tab, dismiss with Escape.",
    bullets: [
      "Sub-second latency",
      "Context-aware predictions",
      "Non-disruptive UX",
    ],
    code: `function calculateTotal(items: CartItem[]) {
  return items.reduce((sum, item) => {
    const discount = item.coupon
      ? applyCoupon(item.price, item.coupon)
      : item.price;
    return sum + discount * item.quantity;
  // ▸ Tab to accept
  }, 0);
}`,
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
    code: `// Organization access policy
{
  "org": "acme-corp",
  "policies": [
    {
      "role": "developer",
      "access": ["read", "suggest"],
      "repos": ["frontend", "shared-lib"]
    },
    {
      "role": "admin",
      "access": ["read", "write", "configure"],
      "repos": ["*"]
    }
  ]
}`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-accent shrink-0"
                      >
                        <path
                          d="M13.5 4.5L6 12L2.5 8.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code panel */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                    </div>
                  </div>
                  <pre className="p-5 text-sm font-mono leading-6 text-text-secondary overflow-x-auto">
                    <code>{feature.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
