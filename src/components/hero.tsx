import { ButtonLink } from "@/components/button-link";
import { SiteHeader } from "@/components/site-header";
import { QUOTE_HREF } from "@/lib/navigation";

const SERVICES = [
  { label: "Residential Cleaning", icon: HouseIcon },
  { label: "Deep Cleaning", icon: SparkleIcon },
  { label: "Move-In / Move-Out", icon: MoveIcon },
  { label: "Commercial Cleaning", icon: BuildingIcon },
] as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col overflow-hidden bg-ink text-ivory"
    >
      <div className="absolute inset-0">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
        >
          <source src="/luxeduo-hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-video-shade absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-ink/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-ink/32 to-transparent" />
      </div>

      <SiteHeader />

      <div
        id="hero-content"
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-12 lg:px-12 lg:pt-6 lg:pb-14"
      >
        <div className="max-w-xl xl:max-w-2xl">
          <p className="hero-eyebrow reveal reveal-delay-1 mb-4 text-[0.68rem] font-medium tracking-[0.32em] text-gold uppercase sm:mb-5 sm:text-[0.72rem]">
            A cleaner space. A brighter you.
          </p>

          <h1
            id="hero-heading"
            className="hero-heading reveal reveal-delay-2 font-serif text-[clamp(2.35rem,6.4vw,4.85rem)] leading-[0.96] font-medium tracking-[-0.02em]"
          >
            <span className="block text-ivory">A Higher</span>
            <span className="hero-heading-gold block text-gold">
              Standard of Clean.
            </span>
          </h1>

          <p className="reveal reveal-delay-3 mt-5 max-w-[30rem] text-[0.95rem] leading-relaxed text-ivory/80 sm:mt-6 sm:text-[1.05rem]">
            Premium cleaning with service that puts you first. Reliable
            communication, thoughtful care, and attention to every detail.
          </p>

          <p className="hero-trust reveal reveal-delay-4 mt-5 flex max-w-[30rem] flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.72rem] leading-snug tracking-[0.06em] text-ivory/76 sm:mt-6 sm:text-[0.78rem]">
            <span>Easy Communication</span>
            <span className="text-gold/80" aria-hidden="true">
              •
            </span>
            <span>Reliable Scheduling</span>
            <span className="text-gold/80" aria-hidden="true">
              •
            </span>
            <span>Attention to Detail</span>
          </p>

          <div className="reveal reveal-delay-5 mt-8 flex flex-col items-start gap-3 sm:mt-9 sm:flex-row sm:items-center">
            <ButtonLink
              href={QUOTE_HREF}
              trackingLocation="hero"
              trackingLabel="GET MY FREE QUOTE"
            >
              Get My Free Quote <span aria-hidden="true">→</span>
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              Our Services
            </ButtonLink>
          </div>
        </div>
      </div>

      <ul className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-2 border-t border-gold/15 bg-ink/10 sm:px-3 lg:grid-cols-4 lg:px-8">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;

          return (
            <li
              key={service.label}
              className={`group border-white/10 ${
                index < 2 ? "border-b lg:border-b-0" : ""
              } ${index % 2 === 0 ? "border-r lg:border-r-0" : ""} ${
                index < 3 ? "lg:border-r" : ""
              }`}
            >
              <a
                href="#services"
                className="flex min-h-16 items-center gap-3 px-4 py-3.5 text-ivory/92 transition-colors duration-300 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold sm:min-h-[4.25rem] sm:px-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center text-gold transition-transform duration-300 group-hover:-translate-y-px">
                  <Icon />
                </span>
                <span className="text-[0.76rem] leading-snug font-medium tracking-[0.04em] sm:text-[0.84rem]">
                  {service.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function HouseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.15rem] w-[1.15rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M4.5 11.2 12 5.2l7.5 6" />
      <path d="M7 10.8V19h10v-8.2" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.15rem] w-[1.15rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M12 4.5v3M12 16.5v3M4.5 12h3M16.5 12h3" />
      <path d="M12 8.2c.7 1.6 1.8 2.7 3.4 3.4-1.6.7-2.7 1.8-3.4 3.4-.7-1.6-1.8-2.7-3.4-3.4 1.6-.7 2.7-1.8 3.4-3.4Z" />
    </svg>
  );
}

function MoveIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.15rem] w-[1.15rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M5 9.2h8.6v9.3H5z" />
      <path d="M13.6 12.4H19v6.1h-5.4" />
      <path d="M7.8 6.4 11.2 9.2 7.8 12" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.15rem] w-[1.15rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M6 20V6.5h8V20" />
      <path d="M14 10h4v10h-4" />
      <path d="M8.4 9.4h1.4M11.2 9.4h1.4M8.4 12.4h1.4M11.2 12.4h1.4M8.4 15.4h1.4M11.2 15.4h1.4" />
    </svg>
  );
}
