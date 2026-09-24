import Image from "next/image";

const SERVICES = [
  {
    title: "Residential Cleaning",
    description:
      "A consistently clean, comfortable home with thoughtful attention to the details that matter.",
    features: ["Regular Cleaning", "Recurring Service", "Kitchen & Bathrooms"],
    icon: "/services/residential-3d.png",
  },
  {
    title: "Airbnb Cleaning",
    description:
      "Keep your rental guest-ready with reliable, high-quality turnover cleaning.",
    features: ["Turnover Cleaning", "Linen Changes", "Guest-Ready Standards"],
    icon: "/services/airbnb-3d.png",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description:
      "A thorough cleaning that leaves your old or new space fresh, sanitized, and ready for what’s next.",
    features: ["Move-In Cleaning", "Move-Out Cleaning", "Detailed Checklist"],
    icon: "/services/move-3d.png",
  },
  {
    title: "Commercial / Office Cleaning",
    description:
      "Reliable cleaning for offices and workspaces designed to keep your business clean, professional, and welcoming.",
    features: [
      "Offices & Workspaces",
      "Flexible Scheduling",
      "Custom Cleaning Plans",
    ],
    icon: "/services/commercial-3d.png",
  },
  {
    title: "Deep Cleaning",
    description:
      "A detailed top-to-bottom clean for spaces that need extra attention and a complete refresh.",
    features: ["Detailed Cleaning", "Hard-to-Reach Areas", "Complete Refresh"],
    icon: "/services/deep-cleaning-3d.png",
  },
] as const;

function CheckMark() {
  return (
    <span className="service-check" aria-hidden="true">
      <svg viewBox="0 0 16 16" className="h-2 w-2 fill-none stroke-current">
        <path
          d="M3.4 8.2 6.3 11.1 12.6 4.7"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ServiceCard({
  title,
  description,
  features,
  icon,
}: (typeof SERVICES)[number]) {
  return (
    <article className="service-card flex h-full flex-col items-center px-5 pt-6 pb-5 text-center sm:px-6 sm:pt-7 sm:pb-5">
      <div className="service-card-icon">
        <Image
          src={icon}
          alt=""
          width={220}
          height={220}
          className="h-[5.25rem] w-[5.25rem] object-contain sm:h-[5.75rem] sm:w-[5.75rem]"
        />
      </div>

      <h3 className="mt-4 min-h-[3.7rem] font-serif text-[1.48rem] leading-[1.15] font-medium tracking-[-0.02em] text-ivory sm:min-h-[4rem] sm:text-[1.58rem]">
        {title}
      </h3>

      <span aria-hidden="true" className="service-card-rule" />

      <p className="mt-3 min-h-[4.6rem] text-[0.9rem] leading-relaxed text-ivory/62 sm:text-[0.92rem]">
        {description}
      </p>

      <ul className="mt-3.5 w-full space-y-1.5 text-left">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-[0.86rem] leading-snug text-ivory/78 sm:text-[0.88rem]"
          >
            <CheckMark />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function LuxeDuoServices() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="luxeduo-services bg-ink text-ivory"
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-[0.68rem] font-medium tracking-[0.32em] text-gold uppercase sm:text-[0.72rem]">
            <span aria-hidden="true" className="h-px w-8 bg-gold/70 sm:w-10" />
            Our Services
            <span aria-hidden="true" className="h-px w-8 bg-gold/70 sm:w-10" />
          </p>
          <h2
            id="services-heading"
            className="mt-4 font-serif text-[clamp(1.9rem,4.4vw,3.35rem)] leading-[1.08] font-medium tracking-[-0.025em]"
          >
            <span className="text-ivory">A Cleaner Space for Every </span>
            <span className="text-gold">Chapter</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[0.92rem] leading-relaxed text-ivory/62 sm:mt-5 sm:text-[0.98rem]">
            From everyday cleaning to major transitions, we provide reliable,
            detail-focused service tailored to your home or business.
          </p>
        </div>

        <div className="mt-7 grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <p className="service-finishing mt-7 flex items-center justify-center gap-3 text-[0.62rem] font-medium tracking-[0.28em] text-ivory/45 uppercase sm:mt-8 sm:text-[0.66rem] sm:tracking-[0.32em]">
          <span aria-hidden="true" className="h-px w-10 bg-gold/45 sm:w-14" />
          Clean Spaces <span aria-hidden="true">•</span> Happier Days
          <span aria-hidden="true" className="h-px w-10 bg-gold/45 sm:w-14" />
        </p>
      </div>
    </section>
  );
}
