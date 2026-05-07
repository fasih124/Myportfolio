"use client";

import { usePathname } from "next/navigation";
import { GitBranch, LinkIcon, Mail } from "lucide-react";
import Divider from "./Divider";
import Button from "./Button";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: GitBranch,
    href: "https://github.com/fasih124",
    label: "GitHub",
  },
  {
    icon: LinkIcon,
    href: "https://www.linkedin.com/in/dev-fasih-ahmad-khan/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:contactme@buildbyfasih.me",
    label: "Email",
  },
];

export default function Footer() {
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname.startsWith(href);
  }

  return (
    <footer>
      <Divider />
      <div className="content-wrapper" style={{ paddingBlock: "64px" }}>
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between  gap-[40px]">
          {/* Left — brand */}
          <div className="flex flex-col gap-[8px]">
            <a
              href="/"
              className="no-underline flex items-center gap-[10px] group w-fit"
            >
              <span
                className="w-[6px] h-[6px] rounded-full transition-transform duration-300 group-hover:scale-150"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <span
                className="text-h3 font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text)",
                }}
              >
                Fasih Ahmad Khan
                <span style={{ color: "var(--color-accent)" }}>.</span>
              </span>
            </a>
            <span
              className="text-[13px] "
              style={{ color: "var(--color-muted)" }}
            >
              Full-stack developer · Web & Mobile
            </span>

            {/* Availability badge */}
            <div className="flex items-center   mt-0.5">
              <Button
                // href="https://calendly.com/fasih-ahmad/discovery-call"
                href="/contact"
                variant="ghost"
              >
                Book a Free Call
              </Button>
            </div>
          </div>

          {/* Center — nav */}
          <nav className="flex flex-col gap-[12px]">
            <span className="text-[18px] font-medium">Navigation</span>
            <div className="flex flex-col gap-[8px]">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] no-underline transition-colors duration-200 w-fit"
                  style={{
                    color: isActive(link.href)
                      ? "var(--color-accent)"
                      : "var(--color-muted)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Right — contact */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-[18px] font-medium">Get In Touch</span>
            <div className="flex flex-col gap-[8px]">
              <a
                href="mailto:contactme@buildbyfasih.me"
                className="text-[14px] no-underline transition-colors duration-200 hover-accent w-fit"
                style={{ color: "var(--color-muted)" }}
              >
                contactme@buildbyfasih.me
              </a>
              <a
                href="https://www.linkedin.com/in/dev-fasih-ahmad-khan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] no-underline transition-colors duration-200 hover-accent w-fit"
                style={{ color: "var(--color-muted)" }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/124"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] no-underline transition-colors duration-200 hover-accent w-fit"
                style={{ color: "var(--color-muted)" }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px]"
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <p className="text-[13px]" style={{ color: "var(--color-muted)" }}>
            © {new Date().getFullYear()} Fasih Ahmad Khan. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-[16px]">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="transition-colors duration-200 hover-accent"
                style={{ color: "var(--color-muted)" }}
              >
                <social.icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
