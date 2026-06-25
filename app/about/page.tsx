import Divider from "@/components/Divider";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Image from "next/image";
export const metadata = {
  title: "About — Fasih Ahmad",
};
/* ── Data ────────────────────────────────────────────────────── */
// const skills = [
//   "React",
//   "Next.js",
//   "TypeScript",
//   "JavaScript",
//   "Node.js",
//   "Express",
//   "REST APIs",
//   "MongoDB",
//   "Mongoose",
//   "Flutter",
//   "Dart",
//   "Riverpod",
//   "GoRouter",
//   "Isar",
//   "Tailwind CSS",
//   "Git",
//   "GitHub",
//   "Figma",
//   "Vercel",
//   "Render",
// ];
const skills = [
  "Fast loading pages",
  "Mobile-first design",
  "Simple enquiry forms",
  "Clear service pages",
  "Trust signals built-in",
  "No monthly fees",
  "Full ownership",
  "Built for local businesses",
];
const currently = [
  {
    label: "Focus",
    value: "Websites for UK heating engineers",
  },
  {
    label: "Build Time",
    value: "10 days per site",
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
                Straight forward work. No surprises.
              </h1>
              <p
                className="body-text"
                style={{ fontSize: "18px", maxWidth: "520px" }}
              >
                I build websites that do what they’re supposed to do. Bring in
                real enquiries. Not just sit there.
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
              <h2 className="h2">Why clients trust me</h2>
              <div
                className="flex flex-col gap-[16px]"
                style={{ color: "var(--color-muted)" }}
              >
                <p className="body-text">
                  I’m Fasih Ahmad Khan, a developer focused on building websites
                  for service businesses. Most clients come to me after wasting
                  money on something that didn’t work. Slow sites. No enquiries.
                  Or agencies that disappear. I do the opposite. Clear timeline.
                  Fixed delivery. No chasing. You know what’s happening at every
                  step. I’ve built real projects used by real businesses. Not
                  just demos.Solo specialist, not an agency. I own every project I take on
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-[24px]">
              <SectionLabel>How I Work</SectionLabel>
              <h2 className="h2">How projects actually run</h2>
              <div
                className="flex flex-col gap-[12px]"
                style={{ color: "var(--color-muted)" }}
              >
                <p className="body-text">
                  You won’t be left guessing. Before starting, everything is
                  clear. What you’re getting. When it’s done. What it costs.
                  During the build, you get updates without asking. No long
                  calls. No confusion. Just progress. Once it’s live, you get a
                  working site that brings in enquiries. Not something you need
                  to “figure out”.
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
            What you actually get
          </h2>

          <div className="flex flex-wrap gap-[12px]">
            {skills.map((skill) => (
              <span
                key={skill}
                className="tag-pill"
                style={{
                  fontSize: "16px",
                  padding: "6px 16px",
                  fontWeight: "bold",
                }}
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
            Right now
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
              padding: "40px",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            <div className="flex flex-col gap-[16px]">
              <h2 className="h2">
                {" "}
                If your website isn’t bringing jobs, fix it.
              </h2>
              <p className="body-text" style={{ maxWidth: "540px" }}>
                You don’t need more traffic. You need a site that turns visitors
                into calls.
              </p>
            </div>

            <div className="flex flex-col gap-[12px] items-start   shrink-0">
              <Button href="/contact" variant="filled">
                Get My Site Built
              </Button>
              <a
                href="mailto:fasih@buildbyfasih.me"
                className="text-[14px] text-[var(--color-muted)] hover-accent no-underline"
              >
                fasih@buildbyfasih.me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
