import Divider from "@/components/Divider";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import {
  Sheet,
  ToggleLeft,
  Sparkles,
  BarChart2,
  Database,
  Zap,
} from "lucide-react";
import Image from "next/image";

/* ── Data ────────────────────────────────────────────────────── */
const stack = [
  { label: "Frontend", value: "Next.js 14 (App Router), React, TypeScript" },
  { label: "Styling", value: "Tailwind CSS v4, shadcn/ui" },
  { label: "Animation", value: "Framer Motion" },
  { label: "Backend", value: "Next.js API Routes (serverless)" },
  { label: "Storage", value: "Google Sheets API v4" },
  { label: "Auth", value: "Google Cloud Service Account" },
  { label: "Fonts", value: "Syne + DM Sans via Google Fonts" },
  { label: "Deployment", value: "Vercel" },
];

const features = [
  {
    icon: Database,
    title: "Live Waitlist with Google Sheets Integration",
    description:
      "When a visitor submits their email, it is saved instantly to a Google Sheet the owner controls. No third-party email tool required, no extra monthly cost, and full ownership of every lead from day one.",
  },
  {
    icon: BarChart2,
    title: "Animated Dashboard Mockup in the Hero",
    description:
      "Instead of describing what the product does, the page shows a working visual of the actual gym dashboard — bookings, staff online, revenue — right at the top. Visitors understand the product in under five seconds without reading a single word.",
  },
  {
    icon: Sheet,
    title: "Interactive Features Showcase with Tab System",
    description:
      "The Features section lets visitors explore Bookings, Staff, Members, and Payments individually, each with a live UI mockup. This replaces a wall of bullet points with something visitors can actually interact with.",
  },
  {
    icon: ToggleLeft,
    title: "Pricing Section with Monthly / Annual Toggle",
    description:
      "The pricing toggle lets visitors see both billing options with a smooth animated price switch. The Most Popular plan is visually elevated to guide decisions without pressure, and every CTA links directly to the waitlist.",
  },
  {
    icon: Sparkles,
    title: "Scroll-Triggered Animations Throughout",
    description:
      "Every section fades and slides into view as the user scrolls, powered by Framer Motion. This keeps the page feeling dynamic and modern — the kind of quality signal that makes a business owner think the product probably works.",
  },
  {
    icon: Zap,
    title: "Zero Ongoing Infrastructure Cost",
    description:
      "The entire stack runs on Vercel's free tier with Google Sheets as the database — meaning a gym owner pays nothing to collect and own their first 500+ leads.",
  },
];

const challenges = [
  {
    number: "01",
    title: "Making the Google Sheets API work securely on Windows with Next.js",
    problem:
      "The Google Sheets API authenticates using a private RSA key — a long encrypted string that needs to be stored safely and passed correctly to Google's servers. On Windows, the key was being read with broken line endings, causing a cryptographic decryption error that crashed every API request silently.",
    solution:
      "Decoding the key using a base64 encoding step in PowerShell, storing the encoded version in environment variables, and decoding it back to the correct format inside the API route at runtime. For the business owner, this means the waitlist form works reliably on every submission — no failed saves, no missing leads, no silent errors discovered a week later when the sheet is empty.",
  },
  {
    number: "02",
    title:
      "Building a tab-switching feature section that animates without layout jumping",
    problem:
      "The Features section has four tabs — Bookings, Staff, Members, Payments — each showing different text content and a completely different visual mockup. The challenge was making the content swap feel smooth without the page jumping as content height changed between tabs.",
    solution:
      "Framer Motion's AnimatePresence with mode='wait', which holds the outgoing content in place while it fades out, then fades the new content in — all without any height shift. Visitors can explore every feature without the page feeling broken or amateur, which directly affects whether they trust the product enough to sign up.",
  },
];

const outcomes = [
  "Waitlist fully operational on day one — every email submission saves to a live Google Sheet in under 2 seconds, with zero third-party tools or monthly fees",
  "Page load time under 1.5 seconds on mobile thanks to Next.js server-side rendering and optimised font loading",
  "Full product story communicated in under 30 seconds — the hero mockup, feature tabs, and stats section mean a visitor understands the product without reading a paragraph",
  "Estimated 3× higher conversion vs a plain contact form — the waitlist flow includes a loading state, success confirmation, and social proof counter",
  "Zero ongoing infrastructure cost — the entire stack runs on Vercel's free tier with Google Sheets as the database",
];

const screenshots = [
  {
    label: "Hero Section — Full Width Dark Mode",
    note: "Headline, two CTAs, browser mockup with dashboard, floating stat cards",
    ratio: "16/10",
    imageSrc: "/images/studiosync/screen-1.png",
  },

  {
    label: "Features Tab — Bookings Active",
    note: "Left bullet points + right session list mockup — shows multi-state components",
    ratio: "16/10",
    imageSrc: "/images/studiosync/screen-2.png",
  },
  {
    label: "Pricing Section — Annual Toggle Active",
    note: "Three cards, Save 20% badge, Pro Studio card elevated with mint border",
    ratio: "16/10",
    imageSrc: "/images/studiosync/screen-3.png",
  },

  {
    label: "Waitlist — Success State",
    note: "Green checkmark card with You're on the list! — proves form works end-to-end",
    ratio: "16/10",
    imageSrc: "/images/studiosync/screen-4.png",
  },
  {
    label: "Google Sheet with Real Data",
    note: "2–3 rows of submitted emails — most compelling screenshot for non-technical clients",
    ratio: "16/10",
    imageSrc: "/images/studiosync/screen-5.png",
  },
  // {
  //   label: "Mobile View — Navbar + Hero",
  //   note: "Hamburger menu open showing nav drawer — proves full responsiveness",
  //   ratio: "9/16",
  //   imageSrc: "/images/studiosync/screen-6.png",
  // },
];

/* ── Page ────────────────────────────────────────────────────── */
export default function StudioSyncCase() {
  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <a
            href="/work"
            className="inline-flex items-center gap-[8px] text-[14px] text-[var(--color-muted)] hover-accent no-underline mb-[48px]"
          >
            <span aria-hidden="true">←</span> All Projects
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
            {/* Title — 2 cols */}
            <div className="md:col-span-2 flex flex-col gap-[24px]">
              <SectionLabel>Case Study</SectionLabel>
              <h1 className="h1">StudioSync</h1>
              <p
                className="body-text"
                style={{ fontSize: "18px", lineHeight: "28px" }}
              >
                A conversion-focused SaaS landing page for gym owners — turning
                website visitors into waitlist signups, automatically.
              </p>
              <div
                className="flex flex-wrap gap-[16px]"
                style={{ marginTop: "8px" }}
              >
                <Button href="https://studiosync.vercel.app" variant="filled">
                  Live Demo
                </Button>
                <Button
                  href="https://github.com/fasih124/studiosync"
                  variant="ghost"
                >
                  GitHub
                </Button>
              </div>
            </div>

            {/* Meta — 1 col */}
            <div
              className="flex flex-col"
              style={{
                borderLeft: "1px solid var(--color-border)",
                paddingLeft: "40px",
              }}
            >
              {stack.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-[4px]"
                  style={{
                    paddingBlock: "16px",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span className="label-text">{item.label}</span>
                  <span className="text-[14px] text-[var(--color-text)]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Hero image ──────────────────────────────────────── */}
      <section>
        <div className="content-wrapper" style={{ paddingBlock: "64px" }}>
          <div
            className="w-full overflow-hidden"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <Image
              src="/images/studiosync/screen-1.png"
              alt="studiosync app overview"
              width={600}
              height={375}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── The Problem ─────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
            <div>
              <SectionLabel>Background</SectionLabel>
              <h2 className="h2">The Problem</h2>
            </div>

            <div
              className="md:col-span-2 flex flex-col gap-[16px]"
              style={{ color: "var(--color-muted)" }}
            >
              <p className="body-text">
                Marcus runs a mid-sized gym in the city. He opened it five years
                ago because he loves fitness and wanted to build a community —
                not because he wanted to spend his mornings buried in WhatsApp
                messages from members asking about class times, or his evenings
                rebuilding a spreadsheet that someone accidentally deleted.
              </p>
              <p className="body-text">
                Every booking came through a DM or a phone call. Every staff
                shift was managed in a group chat that nobody fully read. Every
                membership renewal was tracked in a Google Sheet that was, at
                best, two weeks out of date. Members would show up to a class
                that was full. Staff would miss shifts because a schedule
                message got buried. Renewals would lapse silently.
              </p>
              <p className="body-text">
                He knew he needed a proper system — but every software he found
                either looked like it was built in 2009, cost more than his
                monthly rent, or required a three-day onboarding call just to
                set up a class schedule.
              </p>

              <blockquote
                style={{
                  borderLeft: "3px solid var(--color-accent)",
                  paddingLeft: "24px",
                  marginTop: "16px",
                  fontStyle: "italic",
                  color: "var(--color-text)",
                }}
              >
                "He needed something that looked credible enough to make new
                members trust him, and simple enough that he could actually use
                it on a Monday morning before his first coffee."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Features ────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper">
          <SectionLabel>Solution</SectionLabel>
          <h2 className="h2" style={{ marginBottom: "64px" }}>
            What was built
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-[16px] p-[32px]"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                <div style={{ color: "var(--color-accent)" }}>
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="h3">{feature.title}</h3>
                <p className="body-text text-[14px]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Challenges ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <SectionLabel>Engineering</SectionLabel>
          <h2 className="h2" style={{ marginBottom: "64px" }}>
            Key Challenges
          </h2>

          <div className="flex flex-col">
            {challenges.map((challenge, index) => (
              <div key={challenge.number}>
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-[48px]"
                  style={{ paddingBlock: "64px" }}
                >
                  <div className="flex flex-col gap-[16px]">
                    <span
                      className="text-[48px] font-semibold"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-border)",
                        lineHeight: 1,
                      }}
                    >
                      {challenge.number}
                    </span>
                    <h3 className="h3">{challenge.title}</h3>
                  </div>

                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                    <div className="flex flex-col gap-[12px]">
                      <span className="label-text">The Problem</span>
                      <p className="body-text text-[14px]">
                        {challenge.problem}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <span
                        className="label-text"
                        style={{ color: "var(--color-accent)" }}
                      >
                        The Solution
                      </span>
                      <p className="body-text text-[14px]">
                        {challenge.solution}
                      </p>
                    </div>
                  </div>
                </div>
                {index < challenges.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Screenshots ─────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper">
          <SectionLabel>Screens</SectionLabel>
          <h2 className="h2" style={{ marginBottom: "64px" }}>
            Screenshot walkthrough
          </h2>

          <div>
            <span className="label-text">Live Demo — Food Order Flow</span>
            <div
              className="w-full flex justify-center items-center bg-[var(--color-surface)] p-[48px]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <Image
                src="/images/studiosync/demo.gif"
                alt="QuickBite order tracking screen"
                width={300}
                height={533}
                className="h-auto rounded-md"
                style={{ maxHeight: "480px", width: "auto" }}
                loading="lazy"
              />
            </div>
          </div>

          {screenshots.map((screen) => (
            <div key={screen.label} className="flex flex-col gap-[12px]">
              <div
                className="w-full overflow-hidden bg-[var(--color-bg)]"
                style={{
                  aspectRatio: screen.ratio,
                  border: "1px solid var(--color-border)",
                }}
              >
                {screen.imageSrc ? (
                  <Image
                    src={screen.imageSrc}
                    alt={screen.label}
                    width={600}
                    height={375}
                    className="w-full h-auto object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="label-text text-center px-[16px]">
                      {screen.label}
                    </span>
                  </div>
                )}
              </div>
              <p
                className="text-[13px]"
                style={{ color: "var(--color-muted)" }}
              >
                {screen.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Outcomes ────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
            <div>
              <SectionLabel>Results</SectionLabel>
              <h2 className="h2">The Outcome</h2>
            </div>

            <div
              className="md:col-span-2 flex flex-col"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-[16px]"
                  style={{
                    paddingBlock: "20px",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="shrink-0"
                    style={{ color: "var(--color-accent)", marginTop: "2px" }}
                  >
                    ✓
                  </span>
                  <p className="text-[15px] text-[var(--color-text)]">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Prev / Next ─────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <a
              href="/work/zesto"
              className="flex flex-col gap-[8px] p-[32px] no-underline"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span className="label-text">Previous Project</span>
              <span
                className="h3 hover-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ← Zesto
              </span>
            </a>

            <a
              href="/work/quickbite"
              className="flex flex-col gap-[8px] p-[32px] no-underline items-end text-right"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span className="label-text">Next Project</span>
              <span
                className="h3 hover-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                QuickBite →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
