import Divider from "@/components/Divider";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Image from "next/image";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work — Fasih Ahmad",
};

export default function WorkPage() {
  return (
    <main>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
            {/* Left — text */}
            <div>
              <SectionLabel>Portfolio</SectionLabel>
              <h1
                className="h1"
                style={{ maxWidth: "640px", marginBottom: "24px" }}
              >
                Real sites. Real results.
              </h1>
              <p
                className="body-text"
                style={{ fontSize: "18px", maxWidth: "480px" }}
              >
                These aren’t templates. These are working sites built to get
                enquiries. Most HVAC websites load in 6–9 seconds. These load in
                under 3.
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
                    left: "50%",
                    transform: "translate(-50%, -50%)",

                    boxShadow: ` 0 0 1000px 170px rgba(200, 75, 49, 0.8)`,
                  }}
                />
                <Image
                  src="/images/illustration03.svg"
                  alt="Web and mobile development services"
                  width={350}
                  height={350}
                  className="w-full h-auto"
                  style={{ position: "relative", zIndex: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Project List ─────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <div key={project.id}>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center"
                  style={{ paddingBlock: "80px" }}
                >
                  {/* Image */}
                  <div
                    className={
                      project.align === "right" ? "md:order-2" : "md:order-1"
                    }
                  >
                    <div
                      className="w-full overflow-hidden bg-[var(--color-surface)] relative"
                      style={{
                        aspectRatio: "16/9",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {project.imageSrc ? (
                        <Image
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          width={600}
                          height={338}
                          className="w-full h-full object-cover object-center"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="label-text">{project.imageAlt}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={
                      project.align === "right"
                        ? "md:order-1 flex flex-col gap-[24px]"
                        : "md:order-2 flex flex-col gap-[24px]"
                    }
                  >
                    <div className="flex flex-col gap-[8px]">
                      <span className="label-text">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[14px] text-[var(--color-muted)]">
                        {project.subtitle}
                      </p>
                    </div>

                    <h2 className="h2">{project.title}</h2>
                    <p className="body-text">{project.longDescription}</p>

                    <div className="flex flex-wrap gap-[8px]">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tag-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-[16px] items-center">
                      {project.liveHref !== "#/no" ? (
                        <Button href={project.liveHref} variant="filled">
                          View Site
                        </Button>
                      ) : (
                        " "
                      )}

                      <a
                        href={project.caseStudyHref}
                        className="text-[14px] font-medium text-[var(--color-accent)] hover-accent inline-flex items-center gap-[8px] no-underline"
                      >
                        See Breakdown <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>

                {index < projects.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Bottom CTA ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="content-wrapper flex flex-col items-center text-center gap-[24px]">
          <h2 className="h2" style={{ maxWidth: "480px" }}>
            How many enquiries did you miss this month?
          </h2>
          <p className="body-text" style={{ maxWidth: "400px" }}>
            If your site isn’t bringing work, it’s costing you money.
          </p>
          <Button href="/contact" variant="filled">
            Fix My Website
          </Button>
        </div>
      </section>
    </main>
  );
}
