import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "nav";
  className?: string;
};

const variantClass = {
  primary:
    "border border-gold bg-gold text-ink hover:border-gold-muted hover:bg-gold-muted",
  secondary:
    "border border-ivory/40 bg-ink/35 text-ivory hover:border-gold hover:bg-ink/55",
};

const sizeClass = {
  default: "min-h-12 px-6 text-[0.72rem] tracking-[0.16em] sm:px-7",
  nav: "min-h-10 px-5 text-[0.68rem] tracking-[0.14em]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-[3px] font-medium uppercase transition-[color,background-color,border-color,transform] duration-300 ease-out hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${variantClass[variant]} ${sizeClass[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
