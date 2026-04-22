import Image from "next/image";
type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  caseStudyHref?: string;
  imageAlt?: string;
  imageSrc?: string;
};

export default function ProjectCard({
  title,
  description,
  stack,
  caseStudyHref = "#",
  imageAlt = "",
  imageSrc,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col border border-border group">
      {/* Image area — 16:9 ratio placeholder */}
      <div
        className="w-full overflow-hidden bg-[var(--color-surface)] relative"
        style={{ aspectRatio: "16/9" }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={600}
            height={338}
            className={
              title === "QuickBite" || title === "Asaan Bill"
                ? "w-full h-full object-center object-cover   transition-transform duration-300 group-hover:scale-[1.02]"
                : "w-full h-full object-fill  transition-transform duration-300 group-hover:scale-[1.02]"
            }
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="label-text">{imageAlt || title}</span>
          </div>
        )}
      </div>
      {/* Card body */}
      <div className="flex flex-col gap-2 p-3">
        {/* Title */}
        <h3 className="h3">{title}</h3>

        {/* Description */}
        <p className="body-text text-small">{description}</p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1">
          {stack.map((tech) => (
            <span key={tech} className="tag-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={caseStudyHref}
          className="inline-flex items-center gap-1 text-small font-medium text-accent hover-accent mt-1 w-fit"
          style={{ transition: "gap 200ms ease" }}
        >
          View Case Study
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
