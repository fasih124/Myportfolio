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
    title: "Web Application Development",
    description:
      "Custom web apps and SaaS platforms built on React and Node.js",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Flutter mobile apps for Android, built for real users",
  },
  {
    icon: LayoutDashboard,
    title: "Business Tools & Dashboards",
    description: "Internal tools, admin panels, and management systems",
  },
];

const stats = [
  { label: "Projects Delivered", value: "10+" },
  { label: "Years Building", value: "3" },
  { label: "Core Stack", value: "React + Flutter" },
  { label: "Status", value: "Available for Work", accent: true },
];

const stackBadges = [
  "React",
  "Node.js",
  "MongoDB",
  "Flutter",
  "Next.js",
  "TypeScript",
];

/* ── Page ────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────── */}
      {/* <section className=" py-8  hero-bg ">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left — text 
            <div style={{ paddingBottom: "96px" }}>
              <h1
                className="h1 animate-fade-up animate-fade-up-1"
                style={{ marginBottom: "24px" }}
              >
                I build web and mobile apps{" "}
                <span
                  style={{
                    color: "var(--color-accent)",
                    fontStyle: "italic",
                  }}
                >
                  that work.
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
                Full-stack development for startups and growing businesses —
                React, Node.js, and Flutter.
              </p>

              <div
                className="flex flex-wrap gap-[16px] animate-fade-up animate-fade-up-3"
                style={{ marginBottom: "48px" }}
              >
                <Button href="/work" variant="filled">
                  See My Work
                </Button>
                <Button href="/contact " variant="ghost">
                  Get In Touch
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

            {/* Right — project preview stack 
            {/* <div
              className="hidden md:flex flex-col gap-[12px]"
              style={{ paddingBottom: "0" }}
            >
              {/* Top card — large  
              <a
                href="/work/fitzone"
                className="no-underline block overflow-hidden group"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <div
                  className="w-full overflow-hidden"
                  style={{ aspectRatio: "16/9" }}
                >
                  {projects[0].imageSrc ? (
                    <Image
                      src={projects[0].imageSrc}
                      alt={projects[0].imageAlt}
                      width={600}
                      height={338}
                      loading="eager"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="label-text">{projects[0].title}</span>
                    </div>
                  )}
                </div>
                <div
                  className="flex items-center justify-between"
                  style={{
                    padding: "16px 20px",
                    borderTop: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex flex-col gap-[2px]">
                    <span
                      className="text-[15px] font-medium"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-text)",
                      }}
                    >
                      {projects[0].title}
                    </span>
                    <span
                      className="text-[12px]"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {projects[0].subtitle}
                    </span>
                  </div>
                  <span
                    className="text-[13px] transition-colors duration-200"
                    style={{ color: "var(--color-accent)" }}
                  >
                    View →
                  </span>
                </div>
              </a>

              {/* Bottom row — two small cards  
              <div className="grid grid-cols-2 gap-[12px]">
                {projects.slice(1, 3).map((project) => (
                  <a
                    key={project.id}
                    href={project.caseStudyHref}
                    className="no-underline block overflow-hidden group"
                    style={{
                      border: "1px solid var(--color-border)",
                      backgroundColor: "var(--color-surface)",
                    }}
                  >
                    <div
                      className="w-full overflow-hidden"
                      style={{ aspectRatio: "16/9" }}
                    >
                      {project.imageSrc ? (
                        <Image
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          width={300}
                          height={169}
                          loading="eager"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span
                            className="label-text"
                            style={{ fontSize: "11px" }}
                          >
                            {project.title}
                          </span>
                        </div>
                      )}
                    </div>
                    <div
                      className="flex items-center justify-between"
                      style={{
                        padding: "12px 16px",
                        borderTop: "1px solid var(--color-border)",
                      }}
                    >
                      <span
                        className="text-[13px] font-medium"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--color-text)",
                        }}
                      >
                        {project.title}
                      </span>
                      <span
                        className="text-[12px]"
                        style={{ color: "var(--color-accent)" }}
                      >
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div> */}

      {/* Right — illustration 
            <div className="hidden md:flex items-center justify-center relative">
              {/* Background circle 
              <div
                className="absolute rounded-full"
                style={{
                  width: "420px",
                  height: "420px",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  zIndex: 0,
                }}
              />

              {/* Illustration 
              <div style={{ position: "relative", zIndex: 1 }}>
                <Image
                  src="/images/hero-illustration02.svg"
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
      </section> */}

      <section style={{ paddingBlock: "96px" }}>
        <div className="content-wrapper hero-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
            {/* Left — text */}
            <div>
              <h1
                className="h1 animate-fade-up animate-fade-up-1"
                style={{ marginBottom: "24px" }}
              >
                I build web and mobile apps{" "}
                <span
                  style={{ color: "var(--color-accent)", fontStyle: "italic" }}
                >
                  that work.
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
                Full-stack development for startups and growing businesses —
                React, Node.js, and Flutter.
              </p>

              <div
                className="flex flex-wrap gap-[16px] animate-fade-up animate-fade-up-3"
                style={{ marginBottom: "48px" }}
              >
                <Button href="/work" variant="filled">
                  See My Work
                </Button>
                <Button href="/contact" variant="ghost">
                  Get In Touch
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
          <h2 className="h2" style={{ marginBottom: "64px" }}>
            Projects that solve real problems
          </h2>

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
            How I can help your business
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
                A developer who cares about the work.
              </h2>
              <p className="body-text" style={{ fontSize: "16px" }}>
                I'm Fasih Ahmad Khan, a full-stack developer based in Pakistan,
                building web and mobile products for clients in the US, UK, and
                beyond. I care about writing clean code, meeting deadlines, and
                making sure what I build actually solves the problem it was
                built for.
              </p>
              <div style={{ marginTop: "32px" }}>
                <Button href="/about" variant="ghost">
                  More About Me
                </Button>
              </div>
            </div>

            {/* Right — stats */}
            <div
              className="grid grid-cols-2 gap-px"
              style={{ border: "1px solid var(--color-muted)" }}
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
            What clients say
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
            style={{ color: "var(--color-bg)", maxWidth: "560px" }}
          >
            Have a project in mind?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              lineHeight: "24px",
              color: "var(--color-bg)",
              opacity: 0.85,
              maxWidth: "440px",
            }}
          >
            Let's talk about what you need. No commitment, just a conversation.
          </p>

          <Button href="/contact" variant="white">
            Book a Free Call
          </Button>
        </div>
      </section>
    </main>
  );
}
