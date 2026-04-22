import Divider from "@/components/Divider";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Image from "next/image";
import {
  Calendar,
  LayoutDashboard,
  Mail,
  UserCheck,
  ClipboardList,
  Users,
} from "lucide-react";

/* ── Data ────────────────────────────────────────────────────── */
const stack = [
  { label: "Frontend", value: "React 18, Vite, Tailwind CSS" },
  { label: "State", value: "Zustand, TanStack React Query" },
  { label: "Backend", value: "Node.js, Express.js, JWT" },
  { label: "Database", value: "MongoDB, Mongoose" },
  { label: "Email", value: "Nodemailer + node-cron" },
  { label: "Deployment", value: "Vercel + Render + MongoDB Atlas" },
];

const features = [
  {
    icon: Calendar,
    title: "Online Booking Flow",
    description:
      "Customers pick a trainer, choose a date from a live calendar that only shows available days, select a time slot, and confirm — all in three steps. No phone calls, no WhatsApp, no waiting.",
  },
  {
    icon: ClipboardList,
    title: "Staff Schedule Dashboard",
    description:
      "Each trainer sees today's sessions in a clean timeline view, can mark appointments complete or flag no-shows, and sets their own working hours and blocked dates independently.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Control Panel",
    description:
      "The owner sees live KPI cards — today's sessions, monthly revenue, total customers — appointment trend charts, a full staff performance table, and the ability to export data as CSV.",
  },
  {
    icon: Mail,
    title: "Automated Email Reminders",
    description:
      "The system automatically sends reminder emails to clients 24 hours before their session via a scheduled job — reducing no-shows without the owner lifting a finger.",
  },
  {
    icon: UserCheck,
    title: "Walk-in Booking",
    description:
      "Admin can instantly log walk-in customers directly from the dashboard, keeping all records in one place even for unplanned arrivals.",
  },
  {
    icon: Users,
    title: "Three Separated Roles",
    description:
      "Customers, trainers, and the admin each see only what's relevant to them — JWT-protected routes keep each role completely separated and secure.",
  },
];

const challenges = [
  {
    number: "01",
    title: "Real-time slot availability with no double-bookings",
    problem:
      "The trickiest part of any booking system is making sure two customers can't book the same slot at the same time — especially when multiple users are browsing simultaneously.",
    solution:
      "The backend generates available time slots dynamically based on each trainer's working hours, existing bookings, and blocked dates — all calculated fresh on every request. When a booking is submitted, the slot is locked immediately and the availability cache is invalidated so other users see the updated state within seconds.",
  },
  {
    number: "02",
    title: "Cross-browser session persistence — Firefox caching bug",
    problem:
      "During testing, a subtle but serious bug appeared: Firefox was aggressively caching the authentication response from a previous user session. When a new user logged in, Firefox would return the old cached user data — meaning the wrong dashboard would load.",
    solution:
      "Solved by adding explicit no-cache headers on the authentication request at the HTTP client level, forcing Firefox to always fetch a fresh session. This kind of browser-specific bug is invisible during Chrome development but would have caused real confusion on shared front-desk devices in production.",
  },
];

const outcomes = [
  "Booking time reduced from 10–15 minutes of back-and-forth messages to under 2 minutes — entirely self-served",
  "Zero double-bookings — slot locking and live availability prevent scheduling conflicts that previously happened multiple times per month",
  "Automated reminders eliminate manual follow-up — 24-hour emails send without any staff involvement",
  "Owner visibility went from zero to real-time — revenue, sessions, and staff performance on one dashboard",
  "Three fully separated user roles — each feels purpose-built rather than generic",
  "Fully deployed and live — not a prototype, a production-ready system accessible from any device",
];

const screenshots = [
  {
    label: "Home Page — Trainer Grid",
    note: "Client-facing first impression with Book Session buttons",
    ratio: "16/10",
    imageSrc: "/images/fitzone/screen-1.png",
  },
  {
    label: "Booking Flow — Date Picker",
    note: "Live availability logic — only shows free slots",
    ratio: "16/10",
    imageSrc: "/images/fitzone/screen-2.png",
  },
  {
    label: "Admin Dashboard — KPIs + Charts",
    note: "Revenue, sessions, and trends in one view",
    ratio: "16/10",
    imageSrc: "/images/fitzone/screen-3.png",
  },
  {
    label: "Staff Dashboard — Today's Schedule",
    note: "Timeline with Mark Complete buttons",
    ratio: "16/10",
    imageSrc: "/images/fitzone/screen-4.png",
  },
  {
    label: "Admin Bookings Table",
    note: "Filtering, status tracking, and walk-in booking",
    ratio: "16/10",
    imageSrc: "/images/fitzone/screen-5.png",
  },
  {
    label: "Customer — My Appointments",
    note: "Upcoming tab with status badges and Cancel button",
    ratio: "16/10",
    imageSrc: "/images/fitzone/screen-6.png",
  },
];

/* ── Page ────────────────────────────────────────────────────── */
export default function FitzoneCase() {
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
              <h1 className="h1">FitZone Gym</h1>
              <p
                className="body-text"
                style={{ fontSize: "18px", lineHeight: "28px" }}
              >
                A full-stack web app that lets gym clients book sessions online,
                gives trainers control of their schedule, and hands owners a
                live dashboard — so the business runs itself.
              </p>
              <div
                className="flex flex-wrap gap-[16px]"
                style={{ marginTop: "8px" }}
              >
                <Button
                  href="https://fitzone-gym-ten.vercel.app"
                  variant="filled"
                >
                  Live Demo
                </Button>
                <Button
                  href="https://github.com/fasih124/fitzone-gym"
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
              src="/images/fitzone/screen-3.png"
              alt="fitzone app overview"
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
                Ahmad runs a mid-sized gym in Lahore with four personal trainers
                and a growing client base. For two years, his entire booking
                system was a combination of WhatsApp messages, a paper
                appointment book behind the front desk, and a shared Google
                Sheet that nobody kept updated. Every morning started the same
                way: trainers asking which clients were coming in, clients
                calling to check if a slot was still available, and Ahmad
                personally confirming bookings between sets.
              </p>
              <p className="body-text">
                The real cost wasn't just the chaos — it was the lost revenue. A
                client would message at 10pm to book a Saturday slot. Nobody
                would see it until Monday. By then the client had already gone
                somewhere else. Double-bookings happened at least twice a month,
                which meant awkward conversations and refunds. Ahmad estimated
                he was losing four to six bookings every week just from slow or
                missed responses.
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
                "He needed a system that handled the entire booking flow on its
                own — clients could see availability, pick a time, and confirm
                without a single message being exchanged."
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
            Core Features
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
                src="/images/fitzone/demo.gif"
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
                    width={700}
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
              href="/work"
              className="flex flex-col gap-[8px] p-[32px] no-underline"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span className="label-text">Back</span>
              <span
                className="h3 hover-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ← All Projects
              </span>
            </a>
            <a
              href="/work/zesto"
              className="flex flex-col gap-[8px] p-[32px] no-underline items-end text-right"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span className="label-text">Next Project</span>
              <span
                className="h3 hover-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Zesto →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
