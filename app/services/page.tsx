import Divider from "@/components/Divider";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import { Monitor, Smartphone, LayoutDashboard, Check } from "lucide-react";
import Image from "next/image";
export const metadata = {
  title: "Services — Fasih Ahmad ",
};
/* ── Data ────────────────────────────────────────────────────── */
const services = [
  {
    icon: Monitor,
    title: "The 10-Day HVAC Lead Engine",
    description:
      "A complete website built to bring in real enquiries, not just look good. Designed specifically for UK heating engineers.",
    deliverables: [
      "Loads under 2 seconds on mobile",
      "Built to capture calls and enquiries",
      "Designed for boiler and heat pump work",
      "Ready in 10 days",
      "No monthly fees",
    ],
  },
  {
    icon: Smartphone,
    title: "24/7 Lead Capture System",
    description:
      "Customers send their details straight to you while you're on the job. No missed opportunities.",
    deliverables: [
      "Name, phone, postcode captured",
      "Instant email notification",
      "Works all day while you're working",
      "No shared leads",
      "Direct contact only",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Speed That Wins Jobs",
    description:
      "When a boiler breaks, the fastest site gets the call. This makes sure it's yours.",
    deliverables: [
      "90+ PageSpeed guaranteed",
      "Faster than most competitors",
      "Better Google ranking potential",
      "Mobile-first build",
      "Under 3 second load time",
    ],
  },
];

const packages = [
  {
    name: "Starter",
    price: "£1,197",
    description:
      "Complete website built to bring in enquiries and replace paid leads.",
    features: [
      "Full HVAC website",
      "Under 2s mobile speed",
      "Lead capture form",
      "£7,500 grant section",
      "30 days free changes",
      "You own everything",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "£1,597",
    description:
      "Everything in Starter plus tools to turn enquiries into booked jobs.",
    features: [
      "Everything in Starter",
      "What to say on the phone script",
      "Fast-start enquiry plan",
      "Review collection guide",
      "60 days free changes",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
];

const faqs = [
  {
    question: "I already tried Checkatrade. Why is this different?",
    answer:
      "Those platforms sell the same lead to multiple engineers. This gives you your own website and your own enquiries. No sharing.",
  },
  {
    question: "How do I know this will get me work?",
    answer:
      "Faster sites get more calls. Most HVAC sites are slow. This fixes that and captures enquiries directly.",
  },
  {
    question: "I already have a website",
    answer:
      "If it’s slow or not bringing enquiries, it’s costing you jobs. This replaces it with one that works.",
  },
  {
    question: "Do I need technical knowledge?",
    answer: "No. Everything is handled for you. You just receive enquiries.",
  },
];

/* ── Page ────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <main>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
            {/* Left — text */}
            <div>
              <SectionLabel>Services</SectionLabel>
              <h1
                className="h1"
                style={{ maxWidth: "640px", marginBottom: "24px" }}
              >
                Stop paying for leads you don’t own.
              </h1>
              <p
                className="body-text"
                style={{ fontSize: "18px", maxWidth: "520px" }}
              >
                A complete website built for UK heating engineers to get direct
                enquiries without Checkatrade or Bark.
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
                    left: "60%",
                    transform: "translate(-50%, -50%)",
                    border: "1px solid var(--color-border)",
                    boxShadow: ` 0 0 1000px 170px rgba(200, 75, 49, 0.8)`,
                  }}
                />
                <Image
                  src="/images/illustration07.svg"
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

      {/* ── Service Details ──────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="flex flex-col gap-[0px]">
            {services.map((service, index) => (
              <div key={service.title}>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-[64px]"
                  style={{ paddingBlock: "64px" }}
                >
                  {/* Left — title + icon */}
                  <div className="flex flex-col gap-[24px]">
                    <div
                      className="w-[48px] h-[48px] flex items-center justify-center"
                      style={{ color: "var(--color-accent)" }}
                    >
                      <service.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h2 className="h2">{service.title}</h2>
                    <p className="body-text">{service.description}</p>
                  </div>

                  {/* Right — deliverables */}
                  <div
                    className="flex flex-col gap-[16px]"
                    style={{ paddingTop: "8px" }}
                  >
                    <p className="label-text" style={{ marginBottom: "8px" }}>
                      What you get
                    </p>
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-[12px]">
                        <Check
                          size={16}
                          strokeWidth={2}
                          style={{
                            color: "var(--color-accent)",
                            marginTop: "4px",
                            flexShrink: 0,
                          }}
                        />
                        <span className="text-[15px] text-[var(--color-muted)]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {index < services.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Pricing ─────────────────────────────────────────── */}
      <section
        className="section-padding "
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="h2 text-center" style={{ marginBottom: "16px" }}>
            One job pays for this
          </h2>
          <p
            className="body-text m-auto"
            style={{ marginBottom: "64px", maxWidth: "680px" }}
          >
            <span className="px-2 ">One boiler repair = ~£250</span>
            <span className="px-2">One install = £2,500+ </span>
            <span className="px-2">This pays for itself fast.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex flex-col gap-[24px] p-[32px]"
                style={{
                  border: pkg.highlighted
                    ? "2px solid var(--color-accent)"
                    : "1px solid var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                  position: "relative",
                }}
              >
                {/* Popular badge */}
                {pkg.highlighted && (
                  <div
                    className="absolute label-text"
                    style={{
                      top: "-12px",
                      left: "32px",
                      backgroundColor: "var(--color-accent)",
                      color: "var(--color-bg)",
                      padding: "2px 12px",
                      fontSize: "11px",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Package name */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="h3">{pkg.name}</h3>
                  <p
                    className="text-[28px] font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: pkg.highlighted
                        ? "var(--color-accent)"
                        : "var(--color-text)",
                    }}
                  >
                    {pkg.price}
                  </p>
                </div>

                <p className="text-[14px] text-[var(--color-muted)]">
                  {pkg.description}
                </p>

                <Divider />

                {/* Features */}
                <div className="flex flex-col gap-[12px] flex-1">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-[10px]">
                      <Check
                        size={14}
                        strokeWidth={2}
                        style={{
                          color: "var(--color-accent)",
                          marginTop: "4px",
                          flexShrink: 0,
                        }}
                      />
                      <span className="text-[14px] text-[var(--color-muted)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ marginTop: "8px" }}>
                  <Button
                    href="/contact"
                    variant={pkg.highlighted ? "filled" : "ghost"}
                    className="w-full justify-center"
                  >
                    {pkg.highlighted ? pkg.cta : "Get Started"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="h2" style={{ marginBottom: "64px" }}>
            Common questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
            {faqs.map((faq) => (
              <div key={faq.question} className="flex flex-col gap-[16px]">
                <h3 className="h3">{faq.question}</h3>
                <p className="body-text">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Bottom CTA ──────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--color-accent)",
          paddingBlock: "96px",
        }}
      >
        <div className="content-wrapper flex flex-col items-center text-center gap-[24px]">
          <h2
            className="h2"
            style={{ color: "var(--color-bg)", maxWidth: "480px" }}
          >
            How many jobs did you miss last month?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              lineHeight: "24px",
              color: "var(--color-bg)",
              opacity: 0.85,
              maxWidth: "400px",
            }}
          >
            If your phone isn’t ringing, this fixes it.
          </p>
          <Button href="/contact" variant="white">
            Get My Site Built
          </Button>
        </div>
      </section>
    </main>
  );
}
