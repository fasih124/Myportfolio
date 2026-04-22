import Divider from "@/components/Divider";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Image from "next/image";
export const metadata = {
  title: "About — Fasih Ahmad",
};
/* ── Data ────────────────────────────────────────────────────── */
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "REST APIs",
  "MongoDB",
  "Mongoose",
  "Flutter",
  "Dart",
  "Riverpod",
  "GoRouter",
  "Isar",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Figma",
  "Vercel",
  "Render",
];

const currently = [
  {
    label: "Building",
    value: "Asaan Bill — Flutter invoice app for Pakistani shopkeepers",
    accent: false,
  },
  {
    label: "Learning",
    value: "System design and DevOps fundamentals",
    accent: false,
  },
  {
    label: "Available for",
    value: "New projects",
    accent: true,
  },
];

/* ── Page ────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
            {/* Left — text */}
            <div>
              <SectionLabel>About</SectionLabel>
              <h1
                className="h1"
                style={{ maxWidth: "640px", marginBottom: "24px" }}
              >
                A little about me
              </h1>
              <p
                className="body-text"
                style={{ fontSize: "18px", maxWidth: "520px" }}
              >
                Developer, problem-solver, and someone who takes the work
                seriously.
              </p>
            </div>

            {/* Right — illustration */}
            <div className="hidden md:flex justify-center items-center">
              <div style={{ position: "relative" }}>
                {/* Accent shadow circle */}
                <div
                  className="absolute rounded-full"
                  style={{
                    top: "50%",
                    left: "55%",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid var(--color-border)",
                    boxShadow: ` 0 0 1000px 170px rgba(200, 75, 49, 0.8)`,
                  }}
                />
                <Image
                  src="/images/illustration06.svg"
                  alt="Web and mobile development services"
                  width={380}
                  height={380}
                  className="w-full h-auto"
                  style={{ position: "relative", zIndex: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── My Background ───────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px]">
            {/* Left */}
            <div className="flex flex-col gap-[24px]">
              <SectionLabel>My Background</SectionLabel>
              <h2 className="h2">How I got here</h2>
              <div
                className="flex flex-col gap-[16px]"
                style={{ color: "var(--color-muted)" }}
              >
                <p className="body-text">
                  I'm Fasih Ahmad Khan, a full-stack developer based in Pakistan
                  with a Bachelor's degree in Software Engineering. I started
                  writing code because I wanted to build things that worked —
                  not just theoretically, but in the hands of real people doing
                  real work.
                </p>
                <p className="body-text">
                  My focus is on web and mobile applications for small
                  businesses and startups. I work with React and Node.js on the
                  web side, and Flutter for mobile — a stack I chose
                  deliberately because it covers what most growing businesses
                  actually need.
                </p>
                <p className="body-text">
                  I've worked on gym management systems, invoice tools, and food
                  delivery apps — each one taught me something different about
                  how to balance clean code with shipping on time. I care about
                  both.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-[24px]">
              <SectionLabel>How I Work</SectionLabel>
              <h2 className="h2">My approach</h2>
              <div
                className="flex flex-col gap-[16px]"
                style={{ color: "var(--color-muted)" }}
              >
                <p className="body-text">
                  I treat every project like it matters — because to the person
                  who commissioned it, it does. That means clear communication
                  before I write a line of code, realistic timelines I actually
                  stick to, and a final product that does what it was built to
                  do.
                </p>
                <p className="body-text">
                  I work async-first. I give progress updates proactively, flag
                  blockers early, and don't go quiet for days at a time. If
                  something isn't working or a requirement changes mid-project,
                  I say so and we figure it out together.
                </p>
                <p className="body-text">
                  I'm not trying to be the cheapest option or the flashiest. I'm
                  trying to be the developer you actually want to work with
                  again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Skills ──────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="h2" style={{ marginBottom: "48px" }}>
            Tools I work with
          </h2>

          <div className="flex flex-wrap gap-[12px]">
            {skills.map((skill) => (
              <span
                key={skill}
                className="tag-pill"
                style={{ fontSize: "14px", padding: "6px 16px" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Currently ───────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <SectionLabel>Right Now</SectionLabel>
          <h2 className="h2" style={{ marginBottom: "48px" }}>
            Currently
          </h2>

          <div
            className="flex flex-col"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {currently.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 md:grid-cols-4 gap-[16px] items-baseline"
                style={{
                  paddingBlock: "24px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {/* Label */}
                <span className="label-text">{item.label}</span>

                {/* Value */}
                <span
                  className="md:col-span-3 text-[16px]"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: item.accent
                      ? "var(--color-accent)"
                      : "var(--color-text)",
                    fontWeight: item.accent ? 500 : 400,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[32px]"
            style={{
              padding: "64px",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <div className="flex flex-col gap-[16px]">
              <h2 className="h2">Want to work together?</h2>
              <p className="body-text" style={{ maxWidth: "440px" }}>
                I'm currently available for new projects. If you have something
                in mind, I'd love to hear about it.
              </p>
            </div>

            <div className="flex flex-col gap-[12px] items-start md:items-end shrink-0">
              <Button href="/contact" variant="filled">
                Get In Touch
              </Button>
              <a
                href="mailto:contactme@buildbyfasih.me"
                className="text-[14px] text-[var(--color-muted)] hover-accent no-underline"
              >
                contactme@buildbyfasih.me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
