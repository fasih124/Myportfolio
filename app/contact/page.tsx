import Divider from "@/components/Divider";
import SectionLabel from "@/components/SectionLabel";

import { Mail, Link, Calendar } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Fasih Ahmad",
};

const contactLinks = [
  {
    icon: Mail,
    label: "Send a message",
    value: "contactme@buildbyfasih.me",
    href: "mailto:contactme@buildbyfasih.me",
  },
  {
    icon: Link,
    label: " See background ",
    value: "linkedin.com/in/FasihAhmadKhan",
    href: "https://www.linkedin.com/in/dev-fasih-ahmad-khan/",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center justify-between">
            {/* Left — text */}
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h1 className="h1" style={{ maxWidth: "780px" }}>
                Phone not ringing? Let’s fix that.
              </h1>
            </div>
            {/* Right — illustration */}
            <div className="hidden md:flex justify-center items-center">
              <div style={{ position: "relative" }}>
                {/* Accent shadow circle */}
                <div
                  className="absolute rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid var(--color-border)",
                    boxShadow: ` 0 0 1000px 170px rgba(200, 75, 49, 0.8)`,
                  }}
                />
                <Image
                  src="/images/illustration05.svg"
                  alt="Web and mobile development services"
                  width={380}
                  height={380}
                  className="w-4/6 h-auto"
                  style={{ position: "relative", zIndex: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px]">
            {/* Left */}
            <div className="flex flex-col gap-[48px]">
              <div className="flex flex-col gap-[16px]">
                <p
                  className="body-text"
                  style={{ fontSize: "18px", lineHeight: "28px" }}
                >
                  If your website isn’t bringing enquiries, something is wrong.
                  Tell me what you’re currently using and what’s not working.
                </p>
                <p className="body-text">
                  No need for a long brief. Just send:
                </p>
                <ul className="list-disc ml-3 body-text">
                  <li> What services you offer </li>
                  <li>Your area</li>
                  <li>Your current website (if you have one)</li>
                </ul>
                <p className="body-text">
                  {" "}
                  I’ll tell you straight if this can work for you.
                </p>
              </div>

              <div className="flex flex-col gap-[24px]">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex p-2 items-center gap-[16px]  border border-gray-400 hover:bg-border   no-underline group"
                  >
                    <div
                      className="w-[40px] h-[40px] flex items-center justify-center shrink-0 "
                      style={{ border: "1px solid var(--color-border)" }}
                    >
                      <link.icon
                        size={18}
                        strokeWidth={1.5}
                        style={{ color: "var(--color-accent)" }}
                      />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <span className="label-text">{link.label}</span>
                      <span
                        className="text-[15px] text-[var(--color-text)] hover-accent"
                        style={{ transition: "color 200ms ease" }}
                      >
                        {link.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <div
                className="flex flex-col gap-[8px] p-[24px]"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <div className="flex items-center gap-[10px]">
                  <div
                    className="w-[8px] h-[8px] rounded-full shrink-0"
                    style={{ backgroundColor: "#22c55e" }}
                  />
                  <span
                    className="text-[14px] font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    Taking 2–3 new HVAC sites this month
                  </span>
                </div>
                <p
                  className="text-[13px]"
                  style={{ color: "var(--color-muted)" }}
                >
                  Limited slots to keep 10-day delivery. If you’re thinking
                  about it, don’t wait.
                </p>
              </div>
            </div>

            {/* Right — form */}

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
