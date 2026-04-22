type ButtonProps = {
  children: React.ReactNode;
  variant?: "filled" | "ghost" | "white";
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  children,
  variant = "filled",
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-body text-[14px] font-medium px-[24px] py-[12px] rounded-none border transition-all duration-200 ease-in-out cursor-pointer no-underline";

  const variants = {
    filled:
      "bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)] hover:opacity-90",
    ghost:
      "bg-transparent text-[var(--color-text)] border-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]",
    white:
      "bg-[var(--color-bg)] text-[var(--color-accent)] border-[var(--color-bg)] hover:opacity-90",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
