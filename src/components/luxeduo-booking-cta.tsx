"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/button-link";

export const BOOKING_URL = "https://app.jotform.com/262634133425149";
const BOOKING_IMAGE_SRC = "/luxeduo-booking-cta.png";

function ClockIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="11.5" />
      <path d="M16 9.5v7l4.8 2.8M7.8 7.9l2.1 2.1M24.2 7.9 22.1 10" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="5.5" y="7.5" width="21" height="19" rx="1.8" />
      <path d="M5.5 12.7h21M10.5 5.5v5M21.5 5.5v5M10 17h3M15 17h3M20 17h2M10 21.5h3M15 21.5h3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 4.5 25 8v7.5c0 5.5-3.6 9.3-9 11-5.4-1.7-9-5.5-9-11V8l9-3.5Z" />
      <path d="m12.2 15.5 2.4 2.4 4.9-5.3" />
    </svg>
  );
}

export function LuxeDuoBookingCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const show = () => setVisible(true);
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      node.getBoundingClientRect().top < window.innerHeight * 0.92
    ) {
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
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="quote"
      aria-labelledby="booking-cta-heading"
      data-visible={visible ? "true" : "false"}
      className="luxeduo-booking-cta relative overflow-hidden text-ivory"
    >
      <div aria-hidden="true" className="booking-cta-ambient" />

      <div className="booking-cta-shell relative z-20 mx-auto w-full max-w-[1440px]">
        <div className="booking-cta-content px-5 pt-12 sm:px-8 lg:px-12 lg:pt-[4.5rem] xl:px-[4.5rem]">
          <p className="booking-cta-reveal booking-cta-eyebrow flex items-center gap-3 text-[0.66rem] font-medium tracking-[0.31em] text-gold uppercase sm:text-[0.71rem]">
            <span aria-hidden="true" />
            Book Your Cleaning
            <span aria-hidden="true" />
          </p>

          <h2
            id="booking-cta-heading"
            className="booking-cta-reveal booking-cta-reveal-2 mt-5 max-w-[35rem] font-serif text-[clamp(3rem,4.45vw,4.2rem)] leading-[0.94] font-medium tracking-[-0.04em]"
          >
            <span className="block">Ready for a</span>
            <span className="block text-gold">Cleaner Space?</span>
          </h2>

          <p className="booking-cta-reveal booking-cta-reveal-3 mt-4 font-serif text-[clamp(1.55rem,2.25vw,2rem)] leading-tight font-medium text-ivory/94">
            Let’s Get Your Cleaning Scheduled.
          </p>

          <p className="booking-cta-reveal booking-cta-reveal-3 mt-4 max-w-[32rem] text-[0.93rem] leading-[1.5] text-ivory/72 sm:text-base">
            Tell us about your home or business and we’ll take it from there.
            <span className="block">
              It’s quick, easy, and takes less than 2 minutes.
            </span>
          </p>

          <div className="booking-cta-reveal booking-cta-reveal-4 mt-6">
            <ButtonLink
              href={BOOKING_URL}
              className="booking-cta-button w-full min-h-[3.75rem] sm:w-[20.5rem]"
              trackingLocation="final_booking"
              trackingLabel="BOOK MY CLEANING"
            >
              Book My Cleaning
              <span className="booking-cta-arrow" aria-hidden="true">
                →
              </span>
            </ButtonLink>

            <ul className="booking-cta-trust mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
              <li>
                <ClockIcon />
                <span>Fast &amp; Easy Booking</span>
              </li>
              <li>
                <CalendarIcon />
                <span>See Your Price Instantly</span>
              </li>
              <li>
                <ShieldIcon />
                <span>Secure Payment with Square</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="booking-cta-visual relative z-10 mt-10 h-80 sm:h-[22rem] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[55%]"
      >
        <Image
          src={BOOKING_IMAGE_SRC}
          alt="Folded towels, an amber cleaning bottle, a candle, and greenery in a warm, elegant interior"
          fill
          priority={false}
          quality={82}
          sizes="(max-width: 1023px) 100vw, 55vw"
          className="booking-cta-image object-cover"
        />
        <div aria-hidden="true" className="booking-cta-image-shade" />
        <p className="booking-cta-script" aria-hidden="true">
          More Time
          <span>for What</span>
          <span>Matters. ♡</span>
        </p>
      </div>

      <p className="booking-cta-finishing relative z-30 flex items-center justify-center gap-4 px-5 pb-9 pt-9 text-[0.58rem] font-medium tracking-[0.27em] text-gold/78 uppercase sm:px-8 sm:text-[0.64rem] sm:tracking-[0.31em] lg:absolute lg:right-12 lg:bottom-8 lg:left-12 lg:p-0 xl:right-[4.5rem] xl:left-[4.5rem]">
        <span aria-hidden="true" />
        Cleaner Spaces. Brighter Days.
        <span aria-hidden="true" />
      </p>
    </section>
  );
}
