import Divider from "@/components/Divider";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import {
  MapPin,
  ShoppingCart,
  Tag,
  RotateCcw,
  BookmarkCheck,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

/* ── Data ────────────────────────────────────────────────────── */
const stack = [
  { label: "Framework", value: "Flutter (Dart)" },
  { label: "State", value: "Riverpod 2 — CartNotifier, SearchNotifier" },
  { label: "Navigation", value: "GoRouter with ShellRoute" },
  { label: "Animation", value: "Lottie, Shimmer loading states" },
  { label: "Images", value: "CachedNetworkImage with shimmer placeholders" },
  { label: "Map", value: "Custom Flutter CustomPainter — no paid SDK" },
  { label: "Data", value: "Mock data layer — drop-in ready for Firebase" },
  {
    label: "Deployment",
    value: "Vercel (demo), structured for Firebase/Supabase",
  },
];

const features = [
  {
    icon: MapPin,
    title: "Live Order Tracking with Animated Map",
    description:
      "Customers watch their rider move toward them in real time, with an estimated arrival countdown. Built entirely with Flutter's CustomPainter — no Google Maps, no Mapbox, no surprise API bills. This single feature cuts 'where is my order?' calls to near zero.",
  },
  {
    icon: ShoppingCart,
    title: "Smart Cart with Add-on Customisation",
    description:
      "Every menu item supports optional upgrades — extra cheese, a different size, a side dish. The cart calculates the total live as selections are made, so customers always know exactly what they are paying before they confirm.",
  },
  {
    icon: Tag,
    title: "Promo Code and Discount Engine",
    description:
      "The owner can run timed promotions — first-order discounts, weekend deals, minimum-order offers — that apply automatically at checkout. Replaces the informal 'tell them I said 20% off' system that was impossible to track and easy to abuse.",
  },
  {
    icon: RotateCcw,
    title: "Order History and Reorder in One Tap",
    description:
      "Returning customers see every previous order with the exact items, add-ons, and total. Reordering their usual takes one tap. Repeat business increases without the owner doing anything.",
  },
  {
    icon: BookmarkCheck,
    title: "Saved Addresses and Checkout Memory",
    description:
      "The app remembers delivery addresses, preferred payment methods, and past restaurants. A returning customer can go from opening the app to placing an order in under 30 seconds.",
  },
  {
    icon: Smartphone,
    title: "Single Codebase for Android and iOS",
    description:
      "Built in Flutter — one development budget covers both platforms, and any future update deploys to all users simultaneously. No separate native apps, no doubled maintenance cost.",
  },
];

const challenges = [
  {
    number: "01",
    title: "Making the cart work across every screen without breaking",
    problem:
      "In a food delivery app, the cart is touched by more screens than any other feature — the restaurant page adds to it, the search page adds to it, the cart screen modifies quantities, and the checkout reads from it. The challenge was keeping all of these in sync without the cart resetting when the user navigated back, or allowing items from two different restaurants to mix.",
    solution:
      "A single CartNotifier using Riverpod's StateNotifier pattern — a single source of truth that every screen reads from and writes to, with a built-in guard that clears the cart and prompts the user if they try to add items from a second restaurant. No confused orders, no double-restaurant fulfilment nightmares, and a checkout total that is always accurate.",
  },
  {
    number: "02",
    title: "Building a real-time tracking experience without a paid map SDK",
    problem:
      "Integrating Google Maps or Mapbox adds cost, API key management, billing risk, and third-party dependency to every deployment. For a small restaurant owner, a surprise £200 API bill in month three would kill confidence in the product.",
    solution:
      "The tracking screen was built entirely with Flutter's CustomPainter — a hand-drawn street grid, an animated orange coverage zone, and a rider pin that moves smoothly using Flutter's built-in AnimationController. The pulsing location ring, the rider position drift, and the estimated arrival countdown all run at 60fps with zero external dependencies and zero ongoing cost.",
  },
];

const outcomes = [
  "Order placement time reduced from 8–12 minutes of WhatsApp back-and-forth to under 60 seconds via in-app checkout with saved addresses",
  "'Where is my order?' support calls projected to drop by 80%+ — live rider tracking answers the question before the customer picks up the phone",
  "Promo code engine replaces informal discounting — every offer is trackable, time-limited, and tied to a minimum order value",
  "Reorder in one tap increases repeat purchase rate — returning customers replicate any previous order instantly",
  "Full menu customisation captured digitally — add-ons and special options are recorded per order, eliminating disputes",
  "Single codebase runs on Android and iOS — one development budget, simultaneous updates across all users",
];

const screenshots = [
  {
    label: "Home Screen — browsing state",
    note: "Location header, category chips, promo banner",
    // ratio: "13/24",
    imageSrc: "/images/quickbite/screen-1.png",
  },
  {
    label: "Restaurant Screen — customisation sheet",
    note: "Dark hero header, menu tabs, Add to Cart sheet",
    // ratio: "16/16",
    imageSrc: "/images/quickbite/screen-2.png",
  },
  {
    label: "Cart Screen — promo code applied",
    note: "Item thumbnails, quantity steppers, discount row",
    // ratio: "16/16",
    imageSrc: "/images/quickbite/screen-3.png",
  },
  {
    label: "Order Confirmed — Lottie animation",
    // ratio: "16/16",
    imageSrc: "/images/quickbite/screen-4.png",
  },
  {
    label: "Order Tracking — rider mid-route",
    note: "Animated map, orange blob, rider pin, Journey timeline",
    // ratio: "16/16",
    imageSrc: "/images/quickbite/screen-5.png",
  },
  {
    label: "Profile Screen — stats visible",
    note: "Elite Member badge, Favourites and Orders stat cards",
    // ratio: "16/16",
    imageSrc: "/images/quickbite/screen-6.png",
  },
];

/* ── Page ────────────────────────────────────────────────────── */
export default function QuickBiteCase() {
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
              <h1 className="h1">QuickBite</h1>
              <p
                className="body-text"
                style={{ fontSize: "18px", lineHeight: "28px" }}
              >
                A full-stack food delivery app that lets restaurants take
                orders, track deliveries, and grow their customer base — without
                lifting a finger for every transaction.
              </p>
              <div
                className="flex flex-wrap gap-[16px]"
                style={{ marginTop: "8px" }}
              >
                <Button
                  href="https://github.com/fasih124/quickbite"
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
            <div
              className="w-full flex justify-center items-center bg-[var(--color-surface)] p-[48px]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <Image
                src="/images/quickbite/screen-1.png"
                alt="QuickBite order tracking screen"
                width={300}
                height={533}
                className="h-auto rounded-md"
                style={{ maxHeight: "480px", width: "auto" }}
              />
            </div>
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
                Tariq runs a popular Pakistani restaurant in Islamabad. His
                biryani sells out every Friday, his tikka platter has a
                five-star reputation on Google, and regulars drive across the
                city just for his karahi. But behind the counter, it's chaos.
                Orders come in through WhatsApp voice notes, someone's cousin
                manages a handwritten list of deliveries, and the phone rings
                non-stop during the dinner rush.
              </p>
              <p className="body-text">
                The delivery side was even worse. There was no way to track
                where the rider was, no way for the customer to know when to
                expect their food, and no record of what was ordered — so
                disputes about missing items had to be settled on trust. Refunds
                came out of his own pocket. His best customers were quietly
                switching to a competitor who had an app.
              </p>
              <p className="body-text">
                Tariq didn't need a tech co-founder. He needed a system that
                handled the ordering, the payments, the tracking, and the
                customer communication — so he could go back to doing the one
                thing he was actually brilliant at: cooking.
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
                "He needed a system that handled the operations so the owner
                could focus on the food."
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
                src="/images/quickbite/demo.gif"
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
            <div
              key={screen.label}
              className="flex flex-col gap-[12px] text-center"
            >
              <div
                // className="w-full overflow-hidden bg-[var(--color-bg)]"
                className="w-full overflow-hidden flex justify-center  not-first:  rounded-4xl"
                style={{
                  // aspectRatio: screen.ratio,
                  border: "1px solid var(--color-border)",
                }}
              >
                {screen.imageSrc ? (
                  <Image
                    src={screen.imageSrc}
                    alt={screen.label}
                    width={300}
                    height={611}
                    className=" h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="label-text text-center px-[16px] ">
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
              href="/work/studiosync"
              className="flex flex-col gap-[8px] p-[32px] no-underline"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span className="label-text">Previous Project</span>
              <span
                className="h3 hover-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ← StudioSync
              </span>
            </a>

            <a
              href="/work/AsaanBill"
              className="flex flex-col gap-[8px] p-[32px] no-underline items-end text-right"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span className="label-text">Next Project</span>
              <span
                className="h3 hover-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Asaan Bill →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
