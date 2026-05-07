import SectionLabel from "@/components/SectionLabel";
import Divider from "@/components/Divider";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import { Monitor, Smartphone, LayoutDashboard } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials";
import { projects } from "@/lib/projects";
import Image from "next/image";

/* ── Data ────────────────────────────────────────────────────── */

const services = [
  {
    icon: Monitor,
    title: "The HVAC Lead Engine",
    description:
      "A complete website built to get you direct enquiries, not shared leads",
  },
  {
    icon: Smartphone,
    title: "24/7 Lead Capture",
    description:
      "Customers send their job details straight to your phone instantly",
  },
  {
    icon: LayoutDashboard,
    title: "Speed That Wins Jobs",
    description:
      "Loads under 3 seconds so customers don’t leave before calling",
  },
];

const stats = [
  { label: "Mobile Speed Scores", value: "+90/100" },
  { label: "Build Time", value: "10 Days" },
  { label: "Monthly Fees", value: "£0" },
  { label: "Ownership", value: "100% Yours", accent: true },
];

const stackBadges = [
  "Gas Safe Ready",
  "Mobile First",
  "Under 3s Load",
  "No Monthly Fees",
  "Own Your Leads",
  "Built for UK Engineers",
];

/* ── Page ────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <section style={{ paddingBlock: "96px" }}>
        <div className="content-wrapper hero-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
            {/* Left — text */}
            <div>
              <h1
                className="h1 animate-fade-up animate-fade-up-1"
                style={{ marginBottom: "24px" }}
              >
                Phone not ringing? Your website is{" "}
                <span
                  style={{ color: "var(--color-accent)", fontStyle: "italic" }}
                >
                  losing you boiler jobs.
                </span>
              </h1>

              <p
                className="body-text animate-fade-up animate-fade-up-2"
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                  marginBottom: "40px",
                }}
              >
                I build fast websites for UK heating engineers that turn
                visitors into real enquiries.
              </p>

              <div
                className="flex flex-wrap gap-[16px] animate-fade-up animate-fade-up-3"
                style={{ marginBottom: "48px" }}
              >
                <Button href="/work" variant="filled">
                  See Real Trade Sites
                </Button>
                <Button href="/contact" variant="ghost">
                  Get More Enquiries
                </Button>
              </div>

              <div className="flex flex-wrap gap-[8px] animate-fade-up animate-fade-up-4">
                {stackBadges.map((tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — illustration */}
            <div className="hidden md:flex items-center justify-center relative">
              {/* Accent shadow circle */}
              <div
                className="absolute rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",

                  boxShadow: ` 0 0 1000px 170px rgba(200, 75, 49, 0.8)`,
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <Image
                  src="/images/illustration04.svg"
                  alt="Full-stack web and mobile developer"
                  width={480}
                  height={480}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />

      {/* ── Featured Work ───────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper">
          <SectionLabel>Selected Work</SectionLabel>

          <div style={{ marginBottom: "64px" }}>
            <h2 className="h2">Real sites built for real trades</h2>
            <p
              className="body-text  "
              style={{
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              Sites scoring 98/100 on mobile speed. Built for UK service
              businesses.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            style={{ marginBottom: "48px" }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          {/* View all link */}
          <div className="flex justify-center">
            <a
              href="/work"
              className="text-small font-medium text-muted hover-accent no-underline inline-flex items-center gap-1"
            >
              View All Work <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <Divider />
      {/* ── Services ────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="content-wrapper">
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="h2" style={{ marginBottom: "64px" }}>
            How you get more jobs without platforms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── About Snippet ────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left — text */}
            <div>
              <SectionLabel>About</SectionLabel>
              <h2 className="h2" style={{ marginBottom: "24px" }}>
                Not an agency. No contracts. No nonsense.
              </h2>
              <p className="body-text" style={{ fontSize: "16px" }}>
                I build websites for small service businesses that are tired of
                fake leads and monthly fees. You won’t get jargon or long calls.
                You get a site that works, delivered on time, and built to bring
                in real jobs. Based in Pakistan. Working with UK clients. Clear
                communication. No chasing needed.
              </p>
              <div style={{ marginTop: "32px" }}>
                <Button href="/about" variant="ghost">
                  More About Me
                </Button>
              </div>
            </div>

            {/* Right — stats */}
            <div
              className="grid grid-cols-2 gap-px self-center"
              style={{
                border: "1px solid var(--color-muted)",
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 p-3"
                  style={{ borderBottom: "1px solid var(--color-muted)" }}
                >
                  <span
                    className="text-[20px] font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: stat.accent
                        ? "var(--color-accent)"
                        : "var(--color-text)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[13px] text-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Testimonials ────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="content-wrapper">
          <SectionLabel>Kind Words</SectionLabel>
          <h2 className="h2" style={{ marginBottom: "64px" }}>
            Proof it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <Divider />
      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--color-accent)",
          paddingBlock: "96px",
        }}
      >
        <div className="content-wrapper flex flex-col items-center text-center gap-3">
          <h2
            className="h2"
            style={{ color: "var(--color-bg)", maxWidth: "740px" }}
          >
            How many jobs did you miss this week?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              lineHeight: "24px",
              color: "var(--color-bg)",
              opacity: 0.85,
              maxWidth: "520px",
            }}
          >
            If your phone isn’t ringing, something is broken. This fixes it.
            Simple.
          </p>

          <Button href="/contact" variant="white">
            Get My Site Built
          </Button>
        </div>
      </section>
    </main>
  );
}
