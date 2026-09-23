"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { QUOTE_HREF } from "@/lib/navigation";

const STEPS = [
  {
    number: "01",
    title: "Tell Us About Your Space",
    description: "Request a quote and let us know what you need.",
    icon: QuoteIcon,
  },
  {
    number: "02",
    title: "We Make It Easy",
    description: "We communicate clearly and find a time that works for you.",
    icon: CalendarIcon,
  },
  {
    number: "03",
    title: "We Take Care of the Details",
    description: "Your space gets the thoughtful attention it deserves.",
    icon: HomeIcon,
  },
  {
    number: "04",
    title: "Enjoy Your Space",
    description: "Come back to a home or workplace that feels refreshed.",
    icon: ChairIcon,
  },
] as const;

function QuoteIcon() {
  return (
    <svg viewBox="0 0 48 48" className="process-medallion-icon" aria-hidden="true">
      <rect
        x="11.5"
        y="8.5"
        width="20"
        height="27"
        rx="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M16.5 16.5h10M16.5 21h10M16.5 25.5h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M28.2 29.8 37 21l3.1 3.1-8.8 8.8H28.2v-3.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 48 48" className="process-medallion-icon" aria-hidden="true">
      <rect
        x="10"
        y="12"
        width="28"
        height="24"
        rx="2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M10 19.5h28M17 9.5v6M31 9.5v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17.5 25h2.4M22.8 25h2.4M28.1 25h2.4M17.5 30h2.4M22.8 30h2.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="process-medallion-icon" aria-hidden="true">
      <path
        d="M9.5 23.2 24 10.8 38.5 23.2V36.2a1.8 1.8 0 0 1-1.8 1.8H11.3a1.8 1.8 0 0 1-1.8-1.8V23.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M20.2 38V27.6h7.6V38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        fill="currentColor"
        d="M36.2 11.4 36.9 13.2l1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"
      />
      <path
        fill="currentColor"
        d="M40.6 16.8 41 18l1.2.4-1.2.4-.4 1.2-.4-1.2-1.2-.4 1.2-.4z"
      />
    </svg>
  );
}

function ChairIcon() {
  return (
    <svg viewBox="0 0 48 48" className="process-medallion-icon" aria-hidden="true">
      <path
        d="M16.5 12.5h15A2.2 2.2 0 0 1 33.7 14.7V23H14.3v-8.3a2.2 2.2 0 0 1 2.2-2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M13 23.4h22"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M18 23.4V36M30 23.4V36M14.5 36.2h19"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <path
        fill="currentColor"
        d="M36.4 10.6 37.1 12.4l1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"
      />
      <path
        fill="currentColor"
        d="M11.2 15.2 11.6 16.4l1.2.4-1.2.4-.4 1.2-.4-1.2-1.2-.4 1.2-.4z"
      />
    </svg>
  );
}

function LineSparkle({ className }: { className: string }) {
  return (
    <span className={`process-line-sparkle ${className}`} aria-hidden="true">
      ✦
    </span>
  );
}

export function LuxeDuoProcess() {
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
      id="what-to-expect"
      aria-labelledby="process-heading"
      data-visible={visible ? "true" : "false"}
      className="luxeduo-process relative overflow-hidden bg-ivory text-ink"
    >
      <div aria-hidden="true" className="process-glow process-glow-left" />
      <div aria-hidden="true" className="process-glow process-glow-right" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="process-intro mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-[0.68rem] font-medium tracking-[0.32em] text-gold uppercase sm:text-[0.72rem]">
            <span aria-hidden="true" className="h-px w-7 bg-gold/70 sm:w-9" />
            What to Expect <span aria-hidden="true">✦</span>
            <span aria-hidden="true" className="h-px w-7 bg-gold/70 sm:w-9" />
          </p>
          <h2
            id="process-heading"
            className="mt-4 font-serif text-[clamp(1.85rem,4.1vw,3.05rem)] leading-[1.08] font-medium tracking-[-0.02em]"
          >
            <span className="block text-ink">From First Contact.</span>
            <span className="block text-gold">To a Beautifully Clean Space.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[0.94rem] leading-relaxed text-ink/58 sm:text-[1rem]">
            A simple, seamless experience designed around you.
          </p>
        </div>

        <div className="process-track relative mx-auto mt-10 max-w-5xl sm:mt-12">
          <div className="process-line" aria-hidden="true">
            <div className="process-line-fill" />
            <LineSparkle className="process-sparkle-a" />
            <LineSparkle className="process-sparkle-b" />
            <LineSparkle className="process-sparkle-c" />
          </div>

          <ol className="process-steps grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-4 lg:gap-5 xl:gap-6">
            {STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.number}
                  className={`process-step process-step-${index + 1} relative flex flex-col items-center text-center`}
                >
                  {index > 0 ? (
                    <div
                      className="process-mobile-connector"
                      aria-hidden="true"
                    />
                  ) : null}
                  <p className="font-serif text-[1.05rem] leading-none text-gold lining-nums">
                    {step.number}
                  </p>
                  <div className="process-medallion mt-3">
                    <div className="process-medallion-face">
                      <Icon />
                    </div>
                  </div>
                  <h3 className="mt-4 max-w-[14rem] font-serif text-[1.28rem] leading-[1.15] font-medium tracking-[-0.015em] text-ink md:text-[1.2rem] lg:text-[1.35rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[16rem] text-[0.88rem] leading-relaxed text-ink/62 md:text-[0.84rem] lg:text-[0.9rem]">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="process-cta mx-auto mt-10 flex flex-col items-center text-center sm:mt-12">
          <Link href={QUOTE_HREF} className="process-quote-cta">
            Get My Free Quote <span aria-hidden="true">→</span>
          </Link>
          <p className="mt-3 text-[0.78rem] tracking-[0.04em] text-ink/48">
            Fast response • No obligation
          </p>
        </div>
      </div>
    </section>
  );
}
