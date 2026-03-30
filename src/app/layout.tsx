import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScribePilot — AI Pair Programmer, Built to Stay Private",
  description:
    "ScribePilot is a codebase-aware AI coding assistant with privacy-first architecture. Get context-aware suggestions without your code leaving your organization.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
