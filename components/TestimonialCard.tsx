import { type Testimonial } from "@/lib/testimonials";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure
      className="flex flex-col gap-[24px] p-[32px]"
      style={{ border: "1px solid var(--color-border)" }}
    >
      {/* Quote mark */}
      <span
        className="text-[48px] leading-none"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-accent)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        "
      </span>

      {/* Quote */}
      <blockquote>
        <p
          className="text-[16px]"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-text)",
            lineHeight: "26px",
          }}
        >
          {testimonial.quote}
        </p>
      </blockquote>

      {/* Attribution */}
      <figcaption
        className="flex items-center justify-between"
        style={{
          paddingTop: "24px",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="flex flex-col gap-[4px]">
          <span
            className="text-[15px] font-medium"
            style={{ color: "var(--color-text)" }}
          >
            {testimonial.name}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
