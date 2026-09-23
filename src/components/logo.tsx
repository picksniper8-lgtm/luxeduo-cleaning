import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`relative inline-flex w-fit shrink-0 items-center justify-self-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${className}`}
      aria-label="LuxeDuo Cleaning Services home"
    >
      <span
        aria-hidden="true"
        className="logo-glow pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[72%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
      <Image
        src="/luxeduo-logo.png"
        alt="LuxeDuo Cleaning Services"
        width={1536}
        height={1024}
        preload
        className="logo-mark relative h-auto w-[7.5rem] object-contain sm:w-[9rem] lg:w-[10.75rem]"
      />
    </Link>
  );
}
