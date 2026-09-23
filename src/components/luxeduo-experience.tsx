"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { QUOTE_HREF } from "@/lib/navigation";

export const CLEANER_PHOTO_SRC = "/luxeduo-cleaner-smiling.png";

const TRUST_DETAILS = [
  {
    title: "Respect for Your Space",
    description: "Your home is treated with care from the moment we arrive.",
    icon: ShieldIcon,
  },
  {
    title: "Friendly, Professional Service",
    description:
      "A welcoming experience built around comfort, respect, and professionalism.",
    icon: LeafIcon,
  },
  {
    title: "A Personal Touch",
    description:
      "We want every cleaning to leave your space feeling cared for, not just cleaned.",
    icon: HeartIcon,
  },
] as const;

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.4 19.2 6v6.1c0 4.4-2.9 7.4-7.2 8.6-4.3-1.2-7.2-4.2-7.2-8.6V6L12 3.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 12.1 11.3 14l3.5-4.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5.4 16.8c5.8-1.1 10.2-5.6 11.8-11.4-5.8 1.6-10.3 6-11.4 11.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 14.2 18.6 4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 19.2S4.6 14.3 4.6 9.6A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7.4 1.6c0 4.7-7.4 9.6-7.4 9.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m13.5 2.8-7 10.1h4.7l-.8 8.3 7.1-10.8h-4.7l.7-7.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5.2 5.8h13.6v14H5.2v-14Zm0 4.2h13.6M8.2 3.8v4M15.8 3.8v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LuxeDuoExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return;
    }

    const show = () => setVisible(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    const inView = () => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 64;
    };

    if (inView()) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="experience-heading"
      data-visible={visible ? "true" : "false"}
      className="luxeduo-experience relative scroll-mt-28 overflow-hidden bg-ink text-ivory lg:scroll-mt-36"
    >
      <div aria-hidden="true" className="experience-ambient" />

      <div className="experience-shell relative mx-auto w-full max-w-[1440px]">
        <div className="experience-content relative z-20 px-5 pt-12 sm:px-8 sm:pt-14 lg:px-12 lg:pt-[4.5rem] xl:px-[4.5rem]">
          <p className="experience-reveal experience-eyebrow flex items-center gap-3 text-[0.66rem] font-medium tracking-[0.32em] text-gold uppercase sm:text-[0.72rem]">
            <span aria-hidden="true" />
            Meet LuxeDuo
            <span aria-hidden="true" />
          </p>

          <h2
            id="experience-heading"
            className="experience-reveal experience-reveal-2 experience-heading mt-5 font-serif font-medium tracking-[-0.035em]"
          >
            <span className="block text-ivory">A Cleaning Service</span>
            <span className="block text-gold">You Can Feel Comfortable</span>
            <span className="block text-ivory">Inviting In.</span>
          </h2>

          <span
            aria-hidden="true"
            className="experience-reveal experience-reveal-3 experience-heading-rule mt-5 block"
          />

          <p className="experience-reveal experience-reveal-3 experience-story mt-5 text-[0.96rem] leading-[1.65] text-ivory/88 sm:mt-6 sm:text-[1.02rem]">
            At LuxeDuo, we know your home is personal. That’s why we approach
            every cleaning with respect, care, and a genuine commitment to
            making your space feel clean, comfortable, and stress-free.
          </p>

          <ul className="experience-trust mt-8 grid grid-cols-1 gap-6 sm:mt-9 sm:grid-cols-3 sm:gap-0">
            {TRUST_DETAILS.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <li
                  key={detail.title}
                  className={`experience-trust-item experience-trust-${index + 1} sm:px-4 sm:first:pl-0 sm:last:pr-0`}
                >
                  <span className="experience-trust-icon">
                    <Icon />
                  </span>
                  <h3 className="mt-3.5 text-[0.69rem] font-medium leading-[1.35] tracking-[0.14em] text-ivory uppercase">
                    {detail.title}
                  </h3>
                  <p className="mt-2 text-[0.82rem] leading-[1.55] text-ivory/68">
                    {detail.description}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="experience-reveal experience-reveal-5 mt-8 sm:mt-9">
            <ButtonLink
              href={QUOTE_HREF}
              className="experience-quote-cta min-h-[3.65rem] w-full sm:w-[18.5rem]"
              trackingLocation="meet_luxeduo"
              trackingLabel="GET MY FREE QUOTE"
            >
              Get My Free Quote{" "}
              <span className="experience-cta-arrow" aria-hidden="true">
                →
              </span>
            </ButtonLink>

            <ul
              aria-label="Quote benefits"
              className="experience-micro-trust mt-4 flex flex-wrap items-center gap-y-3 text-[0.72rem] text-ivory/72"
            >
              <li>
                <BoltIcon />
                Fast response
              </li>
              <li>
                <CalendarIcon />
                Flexible scheduling
              </li>
              <li>
                <ShieldIcon />
                No obligation
              </li>
            </ul>
          </div>
        </div>

        <div className="experience-photo-stage relative z-10 mt-10 px-5 pb-2 sm:px-8 lg:mt-0 lg:px-0 lg:pb-0">
          <div className="experience-photo">
            <Image
              src={CLEANER_PHOTO_SRC}
              alt="A smiling cleaning professional forming a heart with yellow-gloved hands"
              width={645}
              height={971}
              quality={75}
              sizes="(max-width: 1023px) 88vw, 480px"
              className="experience-subject"
            />
          </div>
          <p className="experience-photo-caption" aria-hidden="true">
            Cleaner
            <span>Spaces.</span>
            Happier
            <span>Days. ♡</span>
          </p>
        </div>
      </div>

      <p className="experience-finishing relative z-30 flex items-center justify-center gap-4 px-5 pb-9 pt-9 text-[0.62rem] font-medium tracking-[0.3em] text-gold/80 uppercase sm:px-8 sm:pb-10 sm:text-[0.67rem] sm:tracking-[0.34em] lg:absolute lg:bottom-5 lg:p-0">
        <span aria-hidden="true" />
        People You Can Trust
        <span aria-hidden="true" />
      </p>
    </section>
  );
}
