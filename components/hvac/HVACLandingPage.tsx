"use client";

import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Zap,
  Shield,
  Star,
  ChevronDown,
  Phone,
  ArrowRight,
  BadgeCheck,
  Banknote,
  Timer,
  Flame,
} from "lucide-react";

// ============================================================
// TYPES
// ============================================================

interface BundleItem {
  name: string;
  desc: string;
  value: number;
}
interface FAQ {
  q: string;
  a: string;
}
interface Platform {
  name: string;
  monthly: string;
  annual: string;
  problem: string;
}
interface Step {
  step: string;
  day: string;
  title: string;
  desc: string;
}
interface Guarantee {
  icon: React.ElementType;
  title: string;
  desc: string;
  badge: string;
}

// ============================================================
// DATA
// ============================================================

const TRUST_ITEMS = [
  { icon: Timer, label: "10-Day Delivery", sub: "Fixed. Never moves." },
  { icon: Zap, label: "98/100 PageSpeed", sub: "Verified before launch" },
  { icon: Banknote, label: "Fixed Price", sub: "No monthly fee. Ever." },
  { icon: BadgeCheck, label: "Gas Safe Ready", sub: "Trust signals built in" },
];

const PLATFORMS: Platform[] = [
  {
    name: "Checkatrade",
    monthly: "£170 – £200 / month",
    annual: "£2,040 – £2,400 / year",
    problem:
      "Your enquiry goes to 5 engineers simultaneously. The cheapest one wins. You compete on price every single time — and pay for the privilege.",
  },
  {
    name: "Bark.com",
    monthly: "£200 – £400 / month",
    annual: "£2,400 – £4,800 / year",
    problem:
      "Pay per lead whether they respond or not. UK tradespeople forums are full of engineers reporting 22 leads bought, 5 replied, none booked. Zero refunds.",
  },
  {
    name: "Word of Mouth",
    monthly: "Uncontrollable",
    annual: "Feast or famine",
    problem:
      "Works brilliantly until it doesn't. Cannot be turned up when July arrives and the phone goes quiet. No winter preparation. No scale. No control.",
  },
];

const STARTER_ITEMS: BundleItem[] = [
  {
    name: "The 10-Day HVAC Lead Engine",
    desc: "Complete website built to rank locally and convert visitors into booked calls — not just look nice",
    value: 2500,
  },
  {
    name: "The 24/7 Never-Miss Lead Capture",
    desc: "Contact form with instant email alert. You know about every enquiry within seconds, even on a job",
    value: 300,
  },
  {
    name: "The £7,500 Grant Job Magnet",
    desc: "Dedicated Boiler Upgrade Scheme section targeting homeowners actively searching for heat pump grants",
    value: 400,
  },
  {
    name: "The Instant Customer Trust Blueprint",
    desc: "Gas Safe badge, registration number, years trading, and job count — positioned where it changes minds",
    value: 150,
  },
  {
    name: "The Rank-Higher Speed Guarantee",
    desc: "90+ PageSpeed score on mobile guaranteed or we rebuild at no charge. Verified before launch day.",
    value: 500,
  },
  {
    name: "The 10-Day Live Before Winter Promise",
    desc: "Fixed build schedule with exact dates confirmed before we start. Day 1 to Day 10 mapped out.",
    value: 400,
  },
  {
    name: "The Own-It-Forever No-Fee Transfer",
    desc: "Full code ownership transferred to you on launch day. No monthly licence. No platform. No strings.",
    value: 400,
  },
  {
    name: "The Zero-Stress Engineers Launch",
    desc: "DNS connection, Google Search Console setup, sitemap submitted to Google — handled completely.",
    value: 450,
  },
  {
    name: "The 30-Day No-Surprises Change Promise",
    desc: "Any reasonable change made within 48 hours. No charge. No questions. Starter: 30 days.",
    value: 300,
  },
];

const STANDARD_EXTRAS: BundleItem[] = [
  {
    name: "The 5-Minute Booked Job Script",
    desc: "Word-for-word guide for calling back website leads. What to say, how to give a price, how to close.",
    value: 500,
  },
  {
    name: "The Same-Week Enquiry Playbook",
    desc: "Three fast-start actions that can bring your first enquiry before Google indexes a single page.",
    value: 300,
  },
  {
    name: "The 2-Minute Proof It's Working Dashboard",
    desc: "Check your Google traffic in 2 minutes once a week. One number. Zero technical knowledge needed.",
    value: 200,
  },
  {
    name: "The 2-Week 10-Review Fast Track",
    desc: "Get your first 10 Google reviews from past customers using one copy-paste WhatsApp message.",
    value: 100,
  },
  {
    name: "The 60-Day No-Surprises Change Promise",
    desc: "Double the amendment window. 60 full days to request any changes at no charge.",
    value: 500,
  },
];

const HOW_IT_WORKS: Step[] = [
  {
    step: "01",
    day: "Today",
    title: "Pay and complete your 15-minute briefing form",
    desc: "On your phone between jobs. Business name, services, coverage area. Photos if you have them. That is everything we need to start.",
  },
  {
    step: "02",
    day: "Day 8",
    title: "Review your preview on your phone",
    desc: "We send a live Vercel preview link. Check 5 things. Reply with anything to change in plain English. Changes completed within 24 hours.",
  },
  {
    step: "03",
    day: "Day 10",
    title: "Your site goes live on your domain",
    desc: "DNS connected, Search Console live, sitemap submitted. Every item on our 30-point checklist verified before you are told it is live.",
  },
];

const GUARANTEES: Guarantee[] = [
  {
    icon: Zap,
    title: "Speed Guarantee",
    badge: "Verified before launch",
    desc: "90+ PageSpeed score on mobile — checked and confirmed before we tell you the site is live. If it ever drops below, we fix it at no charge.",
  },
  {
    icon: Shield,
    title: "Preview Promise",
    badge: "Before you go live",
    desc: "You review the full site before it launches. Redesign any 3 sections if not satisfied. No time limit on the preview review. No pressure.",
  },
  {
    icon: Star,
    title: "30-Day Enquiry Promise",
    badge: "Standard package",
    desc: "Standard clients who complete all three fast-start actions on launch day and receive zero website enquiries in 30 days get a free second landing page.",
  },
];

const FAQS: FAQ[] = [
  {
    q: "I tried a website before and got absolutely nothing from it.",
    a: "Most HVAC websites fail for three reasons: they load in 5+ seconds on mobile, they have no local SEO signals, and there is no clear call-to-action. Our sites load under 1.5 seconds, are built with Gas Safe keywords and local area targeting, and have a click-to-call button in every section. The PageSpeed score alone puts you above 90% of local competitors. We also submit your sitemap to Google on launch day — most developers never do this.",
  },
  {
    q: "How do I know this will actually bring me calls?",
    a: "We guarantee the technical foundation — speed, local SEO structure, and form functionality. What we cannot guarantee is the exact number of calls because that depends on your area, your competition, and how quickly Google indexes the site. Engineers who complete the three fast-start actions on launch day typically see first enquiries within 1 to 3 weeks.",
  },
  {
    q: "What happens after my amendment period ends?",
    a: "Changes are available at fixed prices you always know upfront. Small text change: £30. Image replacement: £30. New service added to existing page: £75. New page built: £150. You are always told the cost before any work starts. No surprise invoices. Ever. Or take our Monthly Care Plan at £99/month for unlimited small changes plus a monthly Google traffic summary.",
  },
  {
    q: "Do I need to be available for calls or video meetings?",
    a: "No. The entire project runs over WhatsApp and email. The briefing form takes 15 minutes on your phone. The Day 8 preview review takes 10 minutes on your phone. Your total time between payment and launch day is under one hour. We handle everything in between.",
  },
  {
    q: "What if I already have a website?",
    a: "Your current site stays live until the new one is approved by you. We never take anything down without your sign-off. If you already have a domain, we connect the new site to it on Day 10. If you are on Wix, Squarespace, or a similar platform, we move you to a faster, permanently owned solution without you losing your domain name.",
  },
  {
    q: "I am not MCS certified — can I still have the heat pump section?",
    a: "Yes. The heat pump section explains the Boiler Upgrade Scheme grant in general terms and attracts homeowners researching it — even if you do not install heat pumps yourself. Many engineers refer these enquiries to an MCS-certified partner and earn a referral fee. If you become MCS certified later, we update the section within your amendment period at no charge.",
  },
];

const JOB_VALUES = [
  { job: "Emergency boiler repair", value: "£150 – £300" },
  { job: "Annual boiler service", value: "£80 – £120" },
  { job: "New boiler installation", value: "£2,000 – £4,000" },
  { job: "Heat pump installation", value: "£7,000 – £15,000" },
  { job: "Gas safety certificate", value: "£60 – £90" },
];

const YEAR_COMPARISON = [
  { label: "Checkatrade (12 months)", cost: "£2,040 – £2,400", negative: true },
  { label: "Bark.com (12 months)", cost: "£2,400 – £4,800", negative: true },
  { label: "Starter — one payment", cost: "£1,197", negative: false },
  { label: "Standard — one payment", cost: "£1,597", negative: false },
  { label: "Monthly fee after launch", cost: "£0 forever", negative: false },
];

// ============================================================
// SUB-COMPONENTS
// ============================================================

function SectionLabel({
  text,
  light = false,
}: {
  text: string;
  light?: boolean;
}) {
  return (
    <p
      className="label-text mb-4"
      style={{ color: light ? "rgba(200,75,49,0.75)" : "var(--color-accent)" }}
    >
      {text}
    </p>
  );
}

function Divider() {
  return <hr className="divider" />;
}

function BundleRow({
  item,
  highlight = false,
}: {
  item: BundleItem;
  highlight?: boolean;
}) {
  return (
    <div
      className="flex items-start gap-4 p-4 rounded-xl border transition-colors"
      style={{
        backgroundColor: highlight ? "#FDF5F2" : "white",
        borderColor: highlight ? "#D4795E" : "var(--color-border)",
      }}
    >
      <CheckCircle2
        className="w-5 h-5 shrink-0 mt-0.5"
        style={{ color: highlight ? "var(--color-accent)" : "#059669" }}
      />
      <div className="flex-1 min-w-0">
        <p
          className="font-semibold text-sm leading-snug"
          style={{ color: "var(--color-text)" }}
        >
          {item.name}
        </p>
        <p
          className="text-sm mt-0.5 leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          {item.desc}
        </p>
      </div>
      <span
        className="text-sm font-medium shrink-0 whitespace-nowrap"
        style={{
          color: highlight ? "var(--color-accent)" : "var(--color-muted)",
        }}
      >
        £{item.value.toLocaleString()}
      </span>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function HVACLandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const starterValue = STARTER_ITEMS.reduce((s, i) => s + i.value, 0);
  const standardValue =
    starterValue + STANDARD_EXTRAS.reduce((s, i) => s + i.value, 0);

  // ---- REPLACE BEFORE GOING LIVE ----
  const WHATSAPP_LINK = "https://wa.me/923107555744";
  const EMAIL_STARTER =
    "mailto:fasih.khan.dev@gmail.com?subject=HVAC Lead Engine - Starter";
  const EMAIL_STANDARD =
    "mailto:fasih.khan.dev@gmail.com?subject=HVAC Lead Engine - Standard";
  const SWIFT_HEAT_URL = "https://swift-heat-london.vercel.app";
  const BRIGHTWIRE_URL = "https://brightwire-electrical.vercel.app";
  // ------------------------------------

  return (
    <div
      className="overflow-x-hidden"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      {/* ================================================
          HERO
          Light bg — big Fraunces — terracotta on key phrase
      ================================================ */}
      <section className="min-h-screen flex items-center justify-center px-4 py-11">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          {/* Headline */}
          <div className="animate-fade-up animate-fade-up-2">
            <h1 className="h1">
              Your Next Boiler Emergency
              <br />
              <em
                className="not-italic"
                style={{ color: "var(--color-accent)" }}
              >
                Is Searching Google Right Now
              </em>
            </h1>
          </div>

          {/* Decorative rule */}
          <div className="animate-fade-up animate-fade-up-2 flex justify-center">
            <div
              className="h-px w-24"
              style={{ backgroundColor: "var(--color-accent)", opacity: 0.4 }}
            />
          </div>

          {/* Story */}
          <div className="animate-fade-up animate-fade-up-3">
            <p
              className="body-text max-w-3xl mx-auto"
              style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}
            >
              A homeowner's boiler breaks at 10pm in December. She searches on
              her phone. Three engineers show up. Two take 6 seconds to load.{" "}
              <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
                One loads in 1.3 seconds and shows a Gas Safe number.
              </strong>{" "}
              She taps that number. Is it yours?
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-fade-up animate-fade-up-4 flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 text-white font-semibold rounded-xl text-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Get Your Site Built
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="#proof"
              className="inline-flex items-center border-gray-600 justify-center gap-2 px-6 py-2 font-medium rounded-xl text-lg transition-colors border"
              style={{
                color: "var(--color-text)",
                backgroundColor: "transparent",
              }}
            >
              See Live Portfolio
            </a>
          </div>

          {/* Reassurances */}
          <ul
            className="flex flex-wrap justify-center gap-x-3 gap-y-2 pt-2 text-sm"
            style={{ color: "var(--color-muted)" }}
          >
            {[
              "10-day fixed delivery",
              "No monthly fee ever",
              "You own it permanently",
              "98/100 PageSpeed guaranteed",
            ].map((item) => (
              <li key={item} className="flex items-center gap-1">
                <CheckCircle2
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#059669" }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================================
          TRUST BAR
          Surface bg — terracotta icons
      ================================================ */}
      <div
        className="py-8 px-4 border-y"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-2"
            >
              <item.icon
                className="w-8 h-8"
                style={{ color: "var(--color-accent)" }}
                aria-hidden="true"
              />
              <div>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--color-muted)" }}
                >
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================
          PAIN SECTION
          Off-white bg — white cards — terracotta pivot callout
      ================================================ */}
      <section
        className="section-padding px-4"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="The problem" />
            <h2 className="h2 mb-4">
              How Most HVAC Engineers Get Work —{" "}
              <span style={{ color: "#B91C1C" }}>And Why It Has a Ceiling</span>
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              There are three ways engineers currently get leads. All three have
              a ceiling. Two of them cost more than they should. None of them
              get better with time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {PLATFORMS.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl p-6 space-y-4 border"
                style={{
                  backgroundColor: "white",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="h3">{p.name}</h3>
                  <XCircle
                    className="w-5 h-5 shrink-0 mt-1 text-red-500"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-600">{p.monthly}</p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--color-muted)" }}
                  >
                    per month
                  </p>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {p.problem}
                </p>
                <div
                  className="pt-3 border-t"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Annual cost:{" "}
                    <span className="font-medium text-red-600">{p.annual}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pivot callout */}
          <div
            className="text-center rounded-2xl p-10 border"
            style={{ backgroundColor: "#FDF5F2", borderColor: "#D4795E" }}
          >
            <p
              className="mb-3"
              style={{ color: "var(--color-muted)", fontSize: "1.125rem" }}
            >
              There is a fourth option.
            </p>
            <p
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text)",
              }}
            >
              Own the channel that brings you leads — permanently.{" "}
              <span style={{ color: "var(--color-accent)" }}>
                Pay for it once. Use it for the rest of your business.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          PORTFOLIO PROOF
          Surface bg — dark browser mockup preserved (shows real browser chrome)
      ================================================ */}
      <section
        id="proof"
        className="section-padding px-4"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="Real portfolio" />
            <h2 className="h2 mb-4">
              Built for Real Engineers. Verified by Google.
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              These are live sites — not mockups. Open them on your phone right
              now. Check the speed. This is the standard every site is built to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Swift Heat */}
            <article
              className="rounded-2xl overflow-hidden border group transition-all hover:shadow-lg"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Dark browser mockup — intentionally dark to simulate real browser */}
              <div
                className="h-52 flex flex-col items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-8 border-b flex items-center px-3 gap-2"
                  style={{ backgroundColor: "#111", borderColor: "#2a2a2a" }}
                >
                  <div className="flex gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "#FF5F57" }}
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "#FEBC2E" }}
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "#28C840" }}
                    />
                  </div>
                  <div
                    className="flex-1 mx-3 h-4 rounded text-xs flex items-center px-2 truncate"
                    style={{ backgroundColor: "#222", color: "#666" }}
                  >
                    swift-heat-london.vercel.app
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p
                    className="text-6xl font-black"
                    style={{ color: "var(--color-accent)" }}
                  >
                    98<span className="text-3xl text-gray-400">/100</span>
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Mobile PageSpeed Score
                  </p>
                  <p className="text-gray-600 text-xs mt-0.5">
                    1.3 second load time
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="h3">Swift Heat London</h3>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: "var(--color-muted)" }}
                  >
                    HVAC Engineer — South London
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "98/100 Mobile",
                    "Gas Safe signals",
                    "Heat pump section",
                    "Lead capture form",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill text-xs"
                      style={{ color: "#059669", borderColor: "#A7F3D0" }}
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={SWIFT_HEAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover-accent transition-all group-hover:gap-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  Open live site on your phone
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </article>

            {/* BrightWire */}
            <article
              className="rounded-2xl overflow-hidden border group transition-all hover:shadow-lg"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="h-52 flex flex-col items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-8 border-b flex items-center px-3 gap-2"
                  style={{ backgroundColor: "#111", borderColor: "#2a2a2a" }}
                >
                  <div className="flex gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "#FF5F57" }}
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "#FEBC2E" }}
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "#28C840" }}
                    />
                  </div>
                  <div
                    className="flex-1 mx-3 h-4 rounded text-xs flex items-center px-2 truncate"
                    style={{ backgroundColor: "#222", color: "#666" }}
                  >
                    brightwire-electrical.vercel.app
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-6xl font-black text-yellow-400">
                    100<span className="text-3xl text-gray-400">/100</span>
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Desktop PageSpeed Score
                  </p>
                  <p className="text-gray-600 text-xs mt-0.5">
                    98/100 on mobile
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="h3">BrightWire Electrical</h3>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Electrical Engineer — UK
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "100/100 Desktop",
                    "98/100 Mobile",
                    "Lead capture form",
                    "Local SEO ready",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill text-xs"
                      style={{ color: "#059669", borderColor: "#A7F3D0" }}
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={BRIGHTWIRE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover-accent transition-all group-hover:gap-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  Open live site on your phone
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>

          <p
            className="text-center text-sm mt-8"
            style={{ color: "var(--color-muted)" }}
          >
            Both sites built with Next.js. Scores verified on Google PageSpeed
            Insights. Open them yourself — no screenshots, no exaggeration.
          </p>
        </div>
      </section>

      {/* ================================================
          WHAT'S INCLUDED
          Off-white bg — white bundle rows
      ================================================ */}
      <section
        id="included"
        className="section-padding px-4"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="What you get" />
            <h2 className="h2 mb-4">
              Every Problem Solved. Every Obstacle Removed.
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              Every item below has a specific job. None are filler. Together
              they remove every reason a homeowner would choose another engineer
              over you.
            </p>
          </div>

          <div className="mb-10">
            <div className="mb-4">
              <span
                className="tag-pill text-sm"
                style={{
                  color: "var(--color-muted)",
                  borderColor: "var(--color-border)",
                }}
              >
                Included in Both Packages
              </span>
            </div>
            <div className="space-y-3">
              {STARTER_ITEMS.map((item) => (
                <BundleRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          <Divider />

          <div className="mt-10">
            <div className="mb-4">
              <span
                className="tag-pill text-sm"
                style={{
                  color: "var(--color-accent)",
                  borderColor: "var(--color-accent)",
                }}
              >
                Standard Package — Also Includes
              </span>
            </div>
            <div className="space-y-3">
              {STANDARD_EXTRAS.map((item) => (
                <BundleRow key={item.name} item={item} highlight />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          HOW IT WORKS
          Surface bg — terracotta step circles — border connector
      ================================================ */}
      <section
        className="section-padding px-4"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="The process" />
            <h2 className="h2 mb-4">
              10 Days. 3 Stages. Under 1 Hour of Your Time.
            </h2>
            <p className="body-text">
              You are an engineer, not a project manager. Here is exactly what
              happens and exactly what is needed from you.
            </p>
          </div>

          <ol className="space-y-0">
            {HOW_IT_WORKS.map((step, i) => (
              <li key={step.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    {step.step}
                  </div>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div
                      className="w-px flex-1 my-2"
                      style={{ backgroundColor: "var(--color-border)" }}
                    />
                  )}
                </div>
                <div className="pb-10">
                  <p
                    className="label-text mb-1"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {step.day}
                  </p>
                  <h3 className="h3 mb-2">{step.title}</h3>
                  <p className="body-text leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================================================
          ROI
          Off-white bg — white cards — terracotta callout
      ================================================ */}
      <section
        className="section-padding px-4"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="The maths" />
            <h2 className="h2 mb-4">
              One Boiler Installation Pays For This.{" "}
              <span style={{ color: "var(--color-accent)" }}>
                Every Lead After That Is Free. Forever.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-border)",
              }}
            >
              <h3 className="h3 mb-6">What HVAC Jobs Pay</h3>
              {JOB_VALUES.map((row, i) => (
                <div
                  key={row.job}
                  className={`flex justify-between items-center py-3.5 ${
                    i < JOB_VALUES.length - 1 ? "border-b" : ""
                  }`}
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {row.job}
                  </span>
                  <span
                    className="font-semibold text-sm"
                    style={{ color: "var(--color-text)" }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-border)",
              }}
            >
              <h3 className="h3 mb-6">Year 1 Cost Comparison</h3>
              {YEAR_COMPARISON.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex justify-between items-center py-3.5 ${
                    i < YEAR_COMPARISON.length - 1 ? "border-b" : ""
                  }`}
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {row.label}
                  </span>
                  <span
                    className="font-semibold text-sm"
                    style={{ color: row.negative ? "#B91C1C" : "#059669" }}
                  >
                    {row.cost}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-8 p-8 rounded-2xl text-center border"
            style={{ backgroundColor: "#FDF5F2", borderColor: "#D4795E" }}
          >
            <p
              className="text-xl font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text)",
              }}
            >
              Checkatrade costs more than this website{" "}
              <span style={{ color: "var(--color-accent)" }}>
                every single year
              </span>{" "}
              — and after year one you pay Checkatrade again. This site costs{" "}
              <span style={{ color: "var(--color-accent)" }}>
                nothing in year two
              </span>
              . Or year ten.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          PRICING
          Surface bg — white cards — terracotta border on featured
      ================================================ */}
      <section
        id="pricing"
        className="section-padding px-4"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="Pricing" />
            <h2 className="h2 mb-4">
              Fixed Price. No Surprises. No Monthly Fee.
            </h2>
            <p className="font-medium" style={{ color: "var(--color-accent)" }}>
              Maximum 3 projects per month — 2 slots remaining this month
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* STARTER */}
            <div
              className="rounded-2xl p-8 space-y-7 border"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-border)",
              }}
            >
              <div>
                <h3 className="h3">Starter</h3>
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--color-muted)" }}
                >
                  Everything you need to own your lead flow permanently
                </p>
              </div>
              <div>
                <p
                  className="text-sm line-through"
                  style={{ color: "var(--color-muted)" }}
                >
                  £{starterValue.toLocaleString()} total value
                </p>
                <p
                  className="text-5xl font-black mt-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text)",
                  }}
                >
                  £1,197
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--color-muted)" }}
                >
                  One payment. Yours forever.
                </p>
              </div>
              <ul className="space-y-2.5">
                {STARTER_ITEMS.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: "#059669" }}
                      aria-hidden="true"
                    />
                    <span style={{ color: "var(--color-text)" }}>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={EMAIL_STARTER}
                className="block w-full text-center py-4 font-semibold rounded-xl transition-colors border"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                Get Started — £1,197
              </a>
              <p
                className="text-xs text-center"
                style={{ color: "var(--color-muted)" }}
              >
                Split payment: 50% upfront, 50% on Day 8 preview
              </p>
            </div>

            {/* STANDARD */}
            <div
              className="rounded-2xl p-8 space-y-7 relative border-2"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-accent)",
              }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span
                  className="px-5 py-1.5 text-white text-sm font-bold rounded-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  Most Popular
                </span>
              </div>
              <div>
                <h3 className="h3">Standard</h3>
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--color-muted)" }}
                >
                  Every tool to convert, close, and scale from day one
                </p>
              </div>
              <div>
                <p
                  className="text-sm line-through"
                  style={{ color: "var(--color-muted)" }}
                >
                  £{standardValue.toLocaleString()} total value
                </p>
                <p
                  className="text-5xl font-black mt-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text)",
                  }}
                >
                  £1,597
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--color-muted)" }}
                >
                  One payment. Yours forever.
                </p>
              </div>
              <ul className="space-y-2.5">
                {STARTER_ITEMS.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: "#059669" }}
                      aria-hidden="true"
                    />
                    <span style={{ color: "var(--color-text)" }}>
                      {item.name}
                    </span>
                  </li>
                ))}
                {STANDARD_EXTRAS.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: "var(--color-accent)" }}
                      aria-hidden="true"
                    />
                    <span
                      style={{ color: "var(--color-accent)", fontWeight: 500 }}
                    >
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={EMAIL_STANDARD}
                className="block w-full text-center py-4 text-white font-bold rounded-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Get Started — £1,597
              </a>
              <p
                className="text-xs text-center"
                style={{ color: "var(--color-muted)" }}
              >
                Split payment: 50% upfront, 50% on Day 8 preview
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          GUARANTEES
          Off-white bg — white cards — terracotta icons
      ================================================ */}
      <section
        className="section-padding px-4"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="Guarantees" />
            <h2 className="h2 mb-4">Three Guarantees. Zero Risk.</h2>
            <p className="body-text max-w-xl mx-auto">
              You have been burned before. Every guarantee below is in writing
              before any payment is made.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {GUARANTEES.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl p-7 space-y-4 text-center border transition-all hover:shadow-md"
                style={{
                  backgroundColor: "white",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
                  style={{ backgroundColor: "#FDF5F2" }}
                >
                  <g.icon
                    className="w-8 h-8"
                    style={{ color: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                </div>
                <span
                  className="tag-pill text-xs"
                  style={{
                    color: "var(--color-accent)",
                    borderColor: "var(--color-accent)",
                  }}
                >
                  {g.badge}
                </span>
                <h3 className="h3">{g.title}</h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          FAQ
          Surface bg — white accordion — terracotta on open
      ================================================ */}
      <section
        className="section-padding px-4"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel text="FAQ" />
            <h2 className="h2">Questions Every Engineer Asks</h2>
          </div>

          <div className="space-y-3" role="list">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border transition-all"
                style={{
                  backgroundColor: "white",
                  borderColor:
                    openFAQ === i
                      ? "var(--color-accent)"
                      : "var(--color-border)",
                }}
                role="listitem"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-6 text-left transition-colors"
                  aria-expanded={openFAQ === i}
                >
                  <span
                    className="font-semibold leading-snug"
                    style={{
                      color: "var(--color-text)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 mt-0.5 transition-transform duration-200 ${
                      openFAQ === i ? "rotate-180" : ""
                    }`}
                    style={{ color: "var(--color-accent)" }}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openFAQ === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div
                    className="px-6 pb-6 text-sm leading-relaxed border-t pt-4"
                    style={{
                      color: "var(--color-muted)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          FINAL CTA
          Dark bookend — terracotta CTA — white text
          Uses var(--color-text) = #1A1A1A for full contrast finish
      ================================================ */}
      <section
        className="py-28 px-4"
        style={{ backgroundColor: "var(--color-text)" }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <SectionLabel text="Ready" light />
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mt-2"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              Your Competitors Have Google Rankings.{" "}
              <span style={{ color: "var(--color-accent)" }}>Do You?</span>
            </h2>
          </div>

          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Maximum 3 projects per month. Once the slots fill, the next
            availability is the following month. No exceptions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={EMAIL_STANDARD}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-opacity hover:opacity-90 text-lg"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Claim Your Slot
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium rounded-xl border text-lg transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                color: "white",
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Ask on WhatsApp
            </a>
          </div>

          <ul
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 text-sm"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {[
              "Reply within 24 hours",
              "No video calls required",
              "WhatsApp and email only",
              "Split payment available",
            ].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckCircle2
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#4ADE80" }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
