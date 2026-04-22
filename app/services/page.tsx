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
    title: "Web Application Development",
    description:
      "I build custom web applications and SaaS platforms using React on the frontend and Node.js with Express on the backend. Whether you need a customer-facing product or an internal tool, I handle the full stack from database design to deployment.",
    deliverables: [
      "Responsive React frontend with clean UI",
      "REST API built with Node.js and Express",
      "MongoDB database design and integration",
      "User authentication and role-based access",
      "Deployment to a live server with a custom domain",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "I build Flutter mobile apps for Android that feel native, load fast, and work reliably. I use a clean feature-first architecture with Riverpod for state management — making the codebase easy to maintain and extend as your product grows.",
    deliverables: [
      "Flutter app for Android (iOS on request)",
      "Clean feature-first project architecture",
      "Offline-first storage with Isar or SQLite",
      "State management with Riverpod",
      "App Store submission guidance",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Business Tools & Dashboards",
    description:
      "I build internal tools, admin panels, and management dashboards that help businesses run more efficiently. These are purpose-built for your workflow — not off-the-shelf software adapted to fit — so they do exactly what you need and nothing you don't.",
    deliverables: [
      "Custom admin panel or internal dashboard",
      "Data tables, filters, and export features",
      "Role-based access for different team members",
      "Integration with existing systems or APIs",
      "Clean, fast UI your team will actually use",
    ],
  },
];

const packages = [
  {
    name: "Starter",
    price: "$300 – $600",
    description:
      "Best for small projects, MVPs, or simple tools with a defined scope.",
    features: [
      "Single-feature web or mobile app",
      "Up to 5 screens or pages",
      "Basic authentication",
      "1 round of revisions",
      "2 weeks delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$800 – $2,000",
    description:
      "Best for full-featured apps and business tools with multiple roles or flows.",
    features: [
      "Full-stack web or Flutter mobile app",
      "Up to 15 screens or pages",
      "Role-based authentication",
      "Admin dashboard or management panel",
      "2 rounds of revisions",
      "4–6 weeks delivery",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$2,500+",
    description:
      "Best for complex platforms, SaaS products, or ongoing development work.",
    features: [
      "Complex multi-role web or mobile platform",
      "Unlimited screens and features",
      "Third-party API integrations",
      "DevOps setup and CI/CD pipeline",
      "Ongoing support after delivery",
      "Flexible timeline based on scope",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "How does the process work?",
    answer:
      "We start with a free discovery call where I learn about your project, goals, and timeline. From there I send a written proposal with scope, cost, and delivery estimate. Once agreed, I work in milestones — sharing progress at each stage so you're never in the dark. Final delivery includes a handoff call and documentation.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes — most of my clients are based in the US, UK, and Australia. I work async over email and Slack, and schedule calls to fit your timezone. Payments are accepted via Wise, PayPal, or direct bank transfer in USD, GBP, or AUD.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A clear description of what you want to build, who it's for, and any reference apps or designs you like. You don't need a full spec — we can work through the details together. The more context you can share upfront, the more accurate my proposal will be.",
  },
  {
    question: "Do you offer ongoing support after delivery?",
    answer:
      "Yes. Every project includes a 2-week support window after delivery for bug fixes at no extra cost. For longer-term support, maintenance retainers are available on the Premium tier or as a separate agreement.",
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
                What I build
              </h1>
              <p
                className="body-text"
                style={{ fontSize: "18px", maxWidth: "520px" }}
              >
                Full-stack web and mobile development for startups and growing
                businesses. Scoped clearly, delivered on time.
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
        className="section-padding"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="content-wrapper">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="h2" style={{ marginBottom: "16px" }}>
            Simple, honest pricing
          </h2>
          <p
            className="body-text"
            style={{ marginBottom: "64px", maxWidth: "480px" }}
          >
            Every project is quoted based on scope. These ranges give you a
            starting point before we talk.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
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
            Ready to get started?
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
            Tell me about your project and I'll get back to you within 24 hours.
          </p>
          <Button
            href="/https://calendly.com/fasih-ahmad/discovery-call"
            variant="white"
          >
            Book a Free Call
          </Button>
        </div>
      </section>
    </main>
  );
}
