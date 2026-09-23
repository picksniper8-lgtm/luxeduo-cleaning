"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BENEFITS = [
  {
    number: "01",
    title: "Service That Puts You First",
    description:
      "Friendly, responsive communication from your first quote through every cleaning.",
  },
  {
    number: "02",
    title: "Reliable & Consistent",
    description:
      "We respect your time, communicate clearly, and show up ready to care for your space.",
  },
  {
    number: "03",
    title: "Attention to Every Detail",
    description:
      "Thoughtful cleaning focused on the finishing touches that make your space feel truly refreshed.",
  },
] as const;

export function LuxeDuoDifference() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-luxeduo"
      aria-labelledby="difference-heading"
      data-visible={visible ? "true" : "false"}
      className="luxeduo-difference relative bg-ivory text-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gold/35"
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_0.95fr] lg:gap-14 xl:gap-16">
          <div className="max-w-3xl">
            <p className="reveal-in mb-4 flex items-center gap-3 text-[0.68rem] font-medium tracking-[0.32em] text-gold uppercase sm:mb-5 sm:text-[0.72rem]">
              <span aria-hidden="true" className="h-px w-7 bg-gold sm:w-8" />
              The LuxeDuo Difference
              <SparkleMark />
            </p>

            <h2
              id="difference-heading"
              className="reveal-in reveal-in-2 font-serif text-[clamp(2.15rem,5vw,3.65rem)] leading-[1.05] font-medium tracking-[-0.02em]"
            >
              <span className="block text-ink">A Cleaner Home.</span>
              <span className="block text-gold">A Better Experience.</span>
            </h2>

            <p className="reveal-in reveal-in-3 mt-5 max-w-lg text-[0.95rem] leading-relaxed text-ink/65 sm:mt-6 sm:text-base">
              Cleaning is only part of what we do. LuxeDuo is built around
              dependable service, clear communication, and thoughtful attention
              to the details that matter to you.
            </p>

            <div className="reveal-in reveal-in-4 mt-8 max-w-lg sm:mt-10">
              <p className="font-serif text-[clamp(1.35rem,2.5vw,1.85rem)] leading-snug font-medium tracking-[-0.01em] text-ink">
                A cleaner home should come with better service.
              </p>
              <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/58 sm:text-[0.92rem]">
                Responsive communication, dependable scheduling, and care you
                can count on.
              </p>
              <Link
                href="#service-promise"
                className="mt-4 inline-flex items-center gap-1.5 text-[0.68rem] font-medium tracking-[0.16em] text-gold uppercase transition-colors duration-300 hover:text-gold-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Our Service Promise <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <figure className="reveal-in reveal-in-3 w-full max-w-xl lg:max-w-[34rem] lg:justify-self-end">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2px] lg:aspect-[4/3]">
              <Image
                src="/luxeduo-bathroom-clean.png"
                alt="A finished bathroom with a clean vanity, mirror, and folded towels"
                fill
                quality={90}
                sizes="(max-width: 1023px) 90vw, 544px"
                className="object-cover object-[68%_center]"
              />
            </div>
            <figcaption className="mt-3 text-[0.72rem] tracking-[0.06em] text-ink/48 sm:text-[0.75rem]">
              Clean spaces. Thoughtful details.
            </figcaption>
          </figure>
        </div>

        <ol className="mt-8 grid grid-cols-1 divide-y divide-gold/20 sm:mt-10 lg:mt-12 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:border-t lg:border-gold/20 lg:pt-6">
          {BENEFITS.map((benefit, index) => (
            <li
              key={benefit.number}
              className={`reveal-in py-7 first:pt-0 lg:px-10 lg:py-0 lg:first:pl-0 lg:last:pr-0 ${
                index === 0
                  ? "reveal-in-4"
                  : index === 1
                    ? "reveal-in-5"
                    : "reveal-in-6"
              }`}
            >
              <p
                aria-hidden="true"
                className="font-serif text-[2.15rem] leading-none text-gold/85 lining-nums sm:text-[2.4rem]"
              >
                {benefit.number}
              </p>
              <h3 className="mt-4 text-[1.05rem] font-medium tracking-[0.01em] text-ink sm:text-lg">
                {benefit.title}
              </h3>
              <p className="mt-2.5 max-w-sm text-[0.92rem] leading-relaxed text-ink/58 sm:text-[0.95rem]">
                {benefit.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SparkleMark() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-2.5 w-2.5 text-gold"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 0.6 9.15 6.85 15.4 8 9.15 9.15 8 15.4 6.85 9.15 0.6 8 6.85 6.85Z" />
    </svg>
  );
}
