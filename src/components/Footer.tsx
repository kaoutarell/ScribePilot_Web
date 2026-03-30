import Image from "next/image";
import logo from "@/assets/scribepilot-logo.png";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Security", href: "#security" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="flex items-center">
          <Image src={logo} alt="ScribePilot" height={22} />
        </a>
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <span className="text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} ScribePilot. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
