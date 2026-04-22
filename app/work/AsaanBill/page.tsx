import Divider from "@/components/Divider";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import { Mic, WifiOff, MessageCircle, PenLine } from "lucide-react";
import Image from "next/image";

/* ── Data ────────────────────────────────────────────────────── */
const stack = [
  { label: "Framework", value: "Flutter (Dart)" },
  { label: "State Management", value: "Riverpod 2" },
  { label: "Local Database", value: "Isar Community" },
  { label: "Navigation", value: "GoRouter" },
  { label: "Speech", value: "speech_to_text (Google)" },
  { label: "Sharing", value: "share_plus · url_launcher" },
];

const outcomes = [
  "Invoice creation reduced from 10–15 minutes to under 60 seconds",
  "Zero typing required — entire flow is voice-driven",
  "Works fully offline — no internet dependency",
  "WhatsApp sharing in 2 taps with no copy-pasting",
  "Mixed Urdu/English voice commands supported natively",
  "Customer records persist with full edit capability",
];

const features = [
  {
    icon: Mic,
    title: "Voice-First Item Entry",
    description:
      'Say the item name in English, then the quantity and price in Urdu. The app converts spoken Urdu number words — "panch sau", "do hazar" — into digits automatically. Adding a full item takes 5–8 seconds without touching the keyboard.',
  },
  {
    icon: PenLine,
    title: "Session-Based Invoice Building",
    description:
      "Add multiple items in one continuous voice session. Each saved item appears in a running list so the shopkeeper can see everything added so far, edit any item heard incorrectly, and keep going without closing anything.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Direct Sharing",
    description:
      "One tap opens the customer's WhatsApp chat directly with the invoice pre-loaded as a message. No copy-pasting, no manually finding the contact.",
  },
  {
    icon: WifiOff,
    title: "Fully Offline",
    description:
      "Invoices are saved to the device instantly using Isar — a fully offline local database. If the internet drops mid-session, nothing is lost and nothing slows down.",
  },
];

const challenges = [
  {
    number: "01",
    title: "Voice recognition breaking on MIUI devices after the first session",
    problem:
      'On Xiaomi phones running MIUI — the most common low-cost Android in Pakistan — the speech engine stops firing the "done listening" callback after the first session closes. The mic button would appear stuck on "Listening..." indefinitely, breaking the core feature for the majority of target users.',
    solution:
      "A 300ms hardware release delay between sessions. A reinitialize flag that triggers a fresh engine setup when a permanent error is detected. A fallback timer that force-resets the UI if the platform goes silent. Switching the mic button from onTap to onTapDown to bypass MIUI's aggressive touch rejection.",
  },
  {
    number: "02",
    title: "Recognizing mixed Urdu-English speech for numbers",
    problem:
      'Pakistani shopkeepers don\'t speak in one language. A shopkeeper might say "cooking oil" (English) then "teen kilo" (Urdu) then "chaar sau pachas" (Urdu). The English speech engine simply doesn\'t know what "teen" or "panch sau" means.',
    solution:
      "The app switches the speech locale dynamically — English for item name fields, Urdu (ur_PK) for quantity and price fields. A custom number conversion function maps over 80 Urdu words, romanized transliterations, and compound phrases into digits before saving. Partial speech results are used to accept a recognized number the instant it's detected, reducing wait time from 3–4 seconds to under 1 second.",
  },
];

const screenshots = [
  {
    label: "Invoice Creation — items list",
    note: "The end result — a clean invoice being built",
  },
  { label: "Voice Sheet — mic active", note: "Core feature in action" },
  {
    label: "Customer Selection — search active",
    note: "Complete system, not just one screen",
  },
  {
    label: "Bottom Bar — Next (3 items) button",
    note: "Smart progressive UI detail",
  },
  {
    label: "WhatsApp share — invoice pre-loaded",
    note: "Real-world outcome for the shopkeeper",
  },
  { label: "Session list — 2 items added", note: "Multi-item session flow" },
];

/* ── Page ────────────────────────────────────────────────────── */
export default function AsaanBillCase() {
  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          {/* Back link */}
          <a
            href="/work"
            className="inline-flex items-center gap-1 text-small text-muted hover-accent no-underline mb-6"
          >
            <span aria-hidden="true">←</span> All Projects
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Title block — 2 cols */}
            <div className="md:col-span-2 flex flex-col gap-3">
              <SectionLabel>Case Study</SectionLabel>
              <h1 className="h1">Asaan Bill</h1>
              <p
                className="body-text"
                style={{ fontSize: "18px", lineHeight: "28px" }}
              >
                A voice-powered invoicing app that lets Pakistani shopkeepers
                create and share invoices in under 60 seconds — without typing a
                single word.
              </p>
              <div
                className="flex flex-wrap gap-2"
                style={{ marginTop: "8px" }}
              >
                <Button
                  href="https://github.com/fasih124/AssanBill"
                  variant="ghost"
                >
                  GitHub
                </Button>
              </div>
            </div>

            {/* Meta block — 1 col */}
            <div
              className="flex flex-col gap-0"
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
                  <span className="text-small text-text">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── The Problem ─────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <SectionLabel>Background</SectionLabel>
              <h2 className="h2">The Problem</h2>
            </div>

            <div
              className="md:col-span-2 flex flex-col gap-2"
              style={{ color: "var(--color-muted)" }}
            >
              <p className="body-text">
                Tariq runs a busy general store in Lahore's Raja Bazaar. On a
                good day he serves 80–100 customers. For years, his invoicing
                system was a stack of paper receipts, a ballpoint pen, and a
                prayer that his handwriting was legible enough for the customer
                to read.
              </p>
              <p className="body-text">
                He tried switching to a basic spreadsheet on his phone. It took
                him 10–15 minutes per invoice — too slow when there's a queue of
                five people waiting. He had to type every item name in English,
                manually calculate totals, and screenshot the screen to send
                over WhatsApp. He went back to paper within a week.
              </p>
              <p className="body-text">
                The real cost wasn't just time — it was the professional image
                he was losing every time he handed a customer a crumpled
                handwritten chit instead of a clean digital invoice. What Tariq
                needed wasn't a complicated accounting app. He needed something
                he could talk to in Urdu, that would handle the math, and send
                the invoice to the customer's WhatsApp in two taps.
              </p>

              {/* Pull quote */}
              <blockquote
                className="body-text"
                style={{
                  borderLeft: "3px solid var(--color-accent)",
                  paddingLeft: "24px",
                  marginTop: "16px",
                  fontStyle: "italic",
                  color: "var(--color-text)",
                }}
              >
                "He needed something he could talk to in Urdu, that would handle
                the math, and send the invoice to the customer's WhatsApp in two
                taps."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Key Features ────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper">
          <SectionLabel>Solution</SectionLabel>
          <h2 className="h2" style={{ marginBottom: "64px" }}>
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-2 p-4"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                <div style={{ color: "var(--color-accent)" }}>
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="h3">{feature.title}</h3>
                <p className="body-text text-small">{feature.description}</p>
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

          <div className="flex flex-col gap-0">
            {challenges.map((challenge, index) => (
              <div key={challenge.number}>
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  style={{ paddingBlock: "64px" }}
                >
                  {/* Number + title */}
                  <div className="flex flex-col gap-2">
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

                  {/* Problem + Solution */}
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-[12px]">
                      <span className="label-text">The Problem</span>
                      <p className="body-text text-small">
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
                      <p className="body-text text-small">
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

          {/* ── GIF — full width, featured ───────────────────── */}
          <div
            className="flex flex-col gap-[16px]"
            style={{ marginBottom: "48px" }}
          >
            <span className="label-text">Live Demo — Voice Input Flow</span>
            {/* <div
              className="w-full flex justify-center items-center overflow-hidden  rounded-4xl"
              style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-bg)",
                padding: "32px",
              }}
            >
              <img
                src="/images/asaan-bill/demo.gif"
                alt="Voice input demo — item name spoken in English, quantity and price in Urdu, field fills automatically"
                style={{
                  height: "auto",
                  width: "400px",
                  display: "block",
                }}
                className=" rounded-4xl"
                loading="lazy"
              />
            </div> */}
            <div
              className="w-full flex justify-center items-center bg-[var(--color-surface)] p-[48px]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <Image
                src="/images/asaan-bill/demo.gif"
                alt="Voice input demo — item name spoken in English, quantity and price in Urdu, field fills automatically"
                width={300}
                height={533}
                className="h-auto rounded-md"
                style={{ maxHeight: "480px", width: "auto", display: "block" }}
                loading="lazy"
              />
            </div>
            <p className="text-[13px]" style={{ color: "var(--color-muted)" }}>
              Open voice sheet → say item name → say quantity in Urdu → say
              price → item saves and resets. Recorded on a real device.
            </p>
          </div>

          {/* ── Screenshot grid — 3 cols ─────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {/* Screen 1 */}
            <div className="flex flex-col gap-[12px]">
              <div
                className="w-full overflow-hidden flex justify-center items-start  rounded-4xl"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                <Image
                  src="/images/asaan-bill/screen-1.png"
                  alt="Invoice creation screen with items list"
                  width={400}
                  height={711}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p
                className="text-[13px]"
                style={{ color: "var(--color-muted)" }}
              >
                The end result — a clean invoice being built
              </p>
            </div>

            {/* Screen 2 */}
            <div className="flex flex-col gap-[12px]">
              <div
                className="w-full overflow-hidden flex justify-center items-start  rounded-4xl"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                <Image
                  src="/images/asaan-bill/screen-2.png"
                  alt="Voice sheet open with mic active"
                  width={400}
                  height={711}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p
                className="text-[13px]"
                style={{ color: "var(--color-muted)" }}
              >
                Core feature in action — mic active, field filling
              </p>
            </div>

            {/* Screen 3 */}
            <div className="flex flex-col gap-[12px]">
              <div
                className="w-full overflow-hidden flex justify-center items-start  rounded-4xl"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                <Image
                  src="/images/asaan-bill/screen-3.png"
                  alt="Customer selection with search active"
                  width={400}
                  height={711}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p
                className="text-[13px]"
                style={{ color: "var(--color-muted)" }}
              >
                Complete system — real data management built in
              </p>
            </div>

            {/* Screen 4 */}
            <div className="flex flex-col gap-[12px]">
              <div
                className="w-full overflow-hidden flex justify-center items-start  rounded-4xl"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                <Image
                  src="/images/asaan-bill/screen-4.png"
                  alt="Bottom bar showing Next button with item count"
                  width={400}
                  height={711}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p
                className="text-[13px]"
                style={{ color: "var(--color-muted)" }}
              >
                Smart progressive UI — Next only appears when ready
              </p>
            </div>

            {/* Screen 5 */}
            <div className="flex flex-col gap-[12px]">
              <div
                className="w-full overflow-hidden flex justify-center items-start rounded-4xl"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                <Image
                  src="/images/asaan-bill/screen-5.png"
                  alt="WhatsApp share with invoice pre-loaded"
                  width={400}
                  height={711}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p
                className="text-[13px]"
                style={{ color: "var(--color-muted)" }}
              >
                The money shot — invoice lands in customer's WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>
      <Divider />

      {/* ── Outcomes ────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <SectionLabel>Results</SectionLabel>
              <h2 className="h2">The Outcome</h2>
            </div>

            <div
              className="md:col-span-2 flex flex-col gap-0"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-2"
                  style={{
                    paddingBlock: "20px",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="text-body shrink-0"
                    style={{ color: "var(--color-accent)", marginTop: "2px" }}
                  >
                    ✓
                  </span>
                  <p className="text-[15px] text-text">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Next / Prev nav ─────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a
              href="/work/quickbite"
              className="flex flex-col gap-1 p-4 no-underline group"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span className="label-text">Previous Project</span>
              <span
                className="h3 hover-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ← QuickBite
              </span>
            </a>

            <a
              href="/work"
              className="flex flex-col gap-1 p-[32px] no-underline group items-end text-right"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span className="label-text">Next Project</span>
              <span
                className="h3 hover-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                All Projects →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
