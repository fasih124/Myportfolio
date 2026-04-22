import Image from "next/image";
import Divider from "@/components/Divider";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import {
  Smartphone,
  LayoutDashboard,
  Layers,
  Zap,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

/* ── Data ────────────────────────────────────────────────────── */
const stack = [
  { label: "Frontend", value: "Next.js 14 (App Router), React, TypeScript" },
  { label: "Styling", value: "Tailwind CSS v4, Custom CSS Variables" },
  { label: "Animation", value: "Framer Motion" },
  { label: "UI", value: "shadcn/ui (Accordion for FAQ)" },
  { label: "Icons", value: "Lucide React" },
  { label: "Fonts", value: "Clash Display + Satoshi via Fontshare" },
  { label: "Deployment", value: "Vercel" },
  { label: "Other", value: "CSS SVG noise texture, IntersectionObserver" },
];

const features = [
  {
    icon: Smartphone,
    title: "Live App Screen Mockups",
    description:
      "Real screenshots of the Zesto app displayed inside interactive phone frames throughout the page. Instead of telling potential users the app looks great, we show them — before they've downloaded a single thing. This removes the biggest barrier to a first download: uncertainty about what they're getting.",
  },
  {
    icon: LayoutDashboard,
    title: "Restaurant Partner Dashboard Preview",
    description:
      "A fully designed dark-mode dashboard card showing real order data, a bar chart, revenue stats, and live order status. Restaurant owners can see exactly what their control panel would look like — more persuasive than three paragraphs of bullet points about features.",
  },
  {
    icon: Layers,
    title: "Dual-Audience Page Architecture",
    description:
      "The page speaks to hungry consumers in the hero and features sections, then pivots cleanly into a dedicated restaurant partner section with its own headline, value props, and CTA. One URL. Two complete sales conversations.",
  },
  {
    icon: Sparkles,
    title: "Scroll-Triggered Animations",
    description:
      "Every section enters the viewport with a staggered fade-up animation that makes the page feel like a premium consumer product — the kind of polish that signals to a restaurant partner that this company takes its brand seriously.",
  },
  {
    icon: MonitorSmartphone,
    title: "Fully Responsive Mobile Layout",
    description:
      "Built mobile-first with a horizontal-scrolling app showcase, a collapsing navbar drawer, and touch-optimised CTA buttons. Given that most food delivery decisions happen on a phone, mobile is treated as the primary experience — not an afterthought.",
  },
  {
    icon: Zap,
    title: "Performance-First Build",
    description:
      "Static generation via Next.js, font preconnect, passive scroll listeners, and Framer Motion animations gated behind a useReducedMotion check for accessibility compliance. Fast on mobile data from anywhere.",
  },
];

const challenges = [
  {
    number: "01",
    title:
      "Making two audiences feel at home on one page without confusing either",
    problem:
      "The brief required the page to convert both hungry end-users and sceptical restaurant owners — two groups with completely different motivations, vocabulary, and trust signals. Showing commission rates and revenue dashboards in the hero would kill consumer appetite. Showing food photography in the partner section would feel amateurish to a business owner.",
    solution:
      "A deliberate page architecture with a hard visual break: the consumer experience runs through the first five sections in a warm off-white palette, then the page shifts to a full-bleed dark section (#1A1208) for the restaurant pitch — a contrast so dramatic it signals a completely different conversation without a single word of explanation. Both audiences get a page that feels written specifically for them.",
  },
  {
    number: "02",
    title:
      "Building a phone mockup component that works as a reusable design system",
    problem:
      "The phone mockup appears in four different sections at three different sizes with different tilt angles and different screen content inside each one. Getting the frame, notch, side buttons, inner screen radius, and overflow clipping to look pixel-perfect across all combinations was far more complex than it appeared.",
    solution:
      "Precise sub-pixel radius matching between the outer frame (40px) and the inner screen (36px), with overflow-hidden enforced at both levels independently. Without this, every phone on the page would have had visible corner leaks — the kind of detail that makes a polished product page look unfinished and erodes the trust it's trying to build.",
  },
];

const outcomes = [
  "Restaurant partners can be sent a single URL instead of a live screenshare demo — cutting first-meeting prep time from 30 minutes to zero",
  "The app showcase displays all four core screens (Discover, Order, Track, Earn) inside real phone frames — giving potential users a complete picture before download",
  "The restaurant dashboard mockup answers the three most common partner objections — commission rate, reporting tools, order visibility — without a single sales call",
  "Page load performance optimised for mobile-first delivery: static generation, font preconnect, passive scroll listeners, and reduced-motion accessibility support",
  "The dual-CTA architecture means every visitor type has a clear next action — removing the drop-off that kills single-CTA landing pages",
];

const screenshots = [
  {
    label: "Hero — Full Desktop Viewport",
    note: "H1, both CTAs, phone mockup with floating glassmorphism cards",
    ratio: "16/10",
    imageSrc: "/images/zesto/screen-01.png",
  },
  {
    label: "How It Works — Three Phones",
    note: "Tilted mockups side by side with dashed arrows and step numbers",
    ratio: "16/10",
    imageSrc: "/images/zesto/screen-2.png",
  },
  {
    label: "Restaurant Partner — Dark Section",
    note: "White/orange headline + complete dashboard card with bar chart",
    ratio: "16/10",
    imageSrc: "/images/zesto/screen-3.png",
  },
  {
    label: "Features Grid",
    note: "3×2 feature cards with one card in hover state",
    ratio: "16/10",
    imageSrc: "/images/zesto/screen-4.png",
  },
  {
    label: "FAQ + Footer",
    note: "Accordion open state with orange trigger + dark footer",
    ratio: "16/10",
    imageSrc: "/images/zesto/screen-6.png",
  },
];

/* ── Page ────────────────────────────────────────────────────── */
export default function ZestoCase() {
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
              <h1 className="h1">Zesto</h1>
              <p
                className="body-text"
                style={{ fontSize: "18px", lineHeight: "28px" }}
              >
                A high-converting mobile app landing page that turns hungry
                visitors into app downloads — built for local food delivery
                businesses ready to grow.
              </p>
              <div
                className="flex flex-wrap gap-[16px]"
                style={{ marginTop: "8px" }}
              >
                <Button href="https://zesto-xi.vercel.app/" variant="filled">
                  Live Demo
                </Button>
                <Button
                  href="https://github.com/fasih124/zesto"
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

      {/* ── Hero image placeholder ───────────────────────────── */}
      <section>
        <div className="content-wrapper" style={{ paddingBlock: "64px" }}>
          <div
            className="w-full overflow-hidden"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <Image
              src="/images/zesto/screen-01.png"
              alt="zesto app overview"
              width={1100}
              height={550}
              className="w-full h-auto object-cover"
              priority
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
                Tariq runs a food delivery startup in a mid-sized city. He had
                the riders, the restaurant partnerships, and a working app — but
                nobody was downloading it. His only marketing presence was a
                WhatsApp status update every few days and a basic link in his
                Instagram bio that went to a generic app store page.
              </p>
              <p className="body-text">
                When potential restaurant partners asked to see his platform,
                he'd scramble to screenshare his phone over a Zoom call. The
                restaurants he wanted to partner with had one recurring
                question: "What makes you different from the big platforms?"
                Tariq had a great answer — lower commission rates, faster
                payouts, real-time dashboards — but no professional way to show
                it.
              </p>
              <p className="body-text">
                Every pitch felt like it started from zero. Without a proper
                landing page, he was doing the job of a brochure, a sales rep,
                and a demo video all at once, manually, every single time.
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
                "The same page had to speak to two completely different
                audiences — hungry customers who wanted to order food in
                seconds, and restaurant owners who needed to trust a new
                platform with their business."
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
                src="/images/zesto/demo.gif"
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
                    className="w-full h-full object-cover object-top"
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
              href="/work/fitzone"
              className="flex flex-col gap-[8px] p-[32px] no-underline"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span className="label-text">Previous Project</span>
              <span
                className="h3 hover-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ← FitZone
              </span>
            </a>
            <a
              href="/work/studiosync"
              className="flex flex-col gap-[8px] p-[32px] no-underline items-end text-right"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span className="label-text">Next Project</span>
              <span
                className="h3 hover-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                StudioSync →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
