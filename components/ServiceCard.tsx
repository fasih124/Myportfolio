import { type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="flex flex-col gap-2 p-4 border border-border bg-bg">
      {/* Icon */}
      <div className="w-5 h-5 flex items-center justify-center text-accent">
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="h3">{title}</h3>

      {/* Description */}
      <p className="body-text text-small">{description}</p>
    </article>
  );
}
