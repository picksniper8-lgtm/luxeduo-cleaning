"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { QUOTE_HREF } from "@/lib/navigation";

const IMAGE_CANDIDATES = [
  "/luxeduo-unisphere.jpg",
  "/luxeduo-unisphere.png",
] as const;

const LOCATIONS = [
  { name: "Queens", icon: PinIcon },
  { name: "Flushing", icon: LandmarkIcon },
  { name: "Jackson Heights", icon: HomeIcon },
  { name: "Forest Hills", icon: TreeIcon },
  { name: "Brooklyn", icon: BridgeIcon },
  { name: "Long Island", icon: WavesIcon },
] as const;

function PinIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 42S12.5 30.4 12.5 20.5a11.5 11.5 0 1 1 23 0C35.5 30.4 24 42 24 42Z" />
      <circle cx="24" cy="20.5" r="4.2" />
    </svg>
  );
}

function LandmarkIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M9 38h30M12 34h24M15 34V18h18v16M12 18h24L24 9 12 18ZM20 22v8M28 22v8" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="m8.5 23.5 15.5-13 15.5 13M12 21v17h24V21M20 38V27h8v11" />
      <path d="m36.5 10 .7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </svg>
  );
}

function TreeIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 39V25M17.5 39h13M24 8c-6.7 4.5-10 9.5-10 15.2 0 5.2 4.3 8.8 10 8.8s10-3.6 10-8.8C34 17.5 30.7 12.5 24 8Z" />
      <path d="m18.5 25.5 5.5 4.2 5.5-4.2" />
    </svg>
  );
}

function BridgeIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M7 36h34M11 36V17M37 36V17M8 21h32M15 36V23M33 36V23M11 17l4 4M37 17l-4 4M15 21c2.2 6 5.2 9 9 9s6.8-3 9-9" />
    </svg>
  );
}

function WavesIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M7 15c4.3 3.7 8.6 3.7 13 0 4.3 3.7 8.6 3.7 13 0 2.7 2.3 5.3 3.2 8 2.5M7 24c4.3 3.7 8.6 3.7 13 0 4.3 3.7 8.6 3.7 13 0 2.7 2.3 5.3 3.2 8 2.5M7 33c4.3 3.7 8.6 3.7 13 0 4.3 3.7 8.6 3.7 13 0 2.7 2.3 5.3 3.2 8 2.5" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m13.5 2.8-7 10.1h4.7l-.8 8.3 7.1-10.8h-4.7l.7-7.6Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.2 5.8h13.6v14H5.2v-14Zm0 4.2h13.6M8.2 3.8v4M15.8 3.8v4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.4 19.2 6v6.1c0 4.4-2.9 7.4-7.2 8.6-4.3-1.2-7.2-4.2-7.2-8.6V6L12 3.4Z" />
      <path d="m9.4 12.1 1.9 1.9 3.5-4.1" />
    </svg>
  );
}

export function LuxeDuoServiceArea() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const probe = (index: number) => {
      if (index >= IMAGE_CANDIDATES.length || cancelled) return;

      const image = new window.Image();
      image.onload = () => {
        if (!cancelled) setImageSrc(IMAGE_CANDIDATES[index]);
      };
      image.onerror = () => probe(index + 1);
      image.src = IMAGE_CANDIDATES[index];
    };

    probe(0);
    return () => {
      cancelled = true;
    };
  }, []);

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
      id="service-areas"
      aria-labelledby="service-area-heading"
      data-visible={visible ? "true" : "false"}
      className="luxeduo-service-area relative overflow-hidden bg-ivory text-ink"
    >
      <div className="service-area-shell relative mx-auto w-full max-w-[1440px]">
        <div className="service-area-content relative z-20 px-5 pt-12 sm:px-8 lg:px-12 lg:pt-16 xl:px-[4.5rem]">
          <p className="service-area-reveal service-area-eyebrow flex items-center gap-3 text-[0.66rem] font-medium tracking-[0.3em] text-gold-muted uppercase sm:text-[0.71rem]">
            <span aria-hidden="true" />
            Our Service Area <span aria-hidden="true">✦</span>
          </p>

          <h2
            id="service-area-heading"
            className="service-area-reveal service-area-reveal-2 mt-4 font-serif text-[clamp(2.75rem,3.8vw,3.5rem)] leading-[0.98] font-medium tracking-[-0.035em]"
          >
            <span className="block">Proudly Serving</span>
            <span className="block text-gold-muted">Our Community.</span>
          </h2>

          <p className="service-area-reveal service-area-reveal-3 mt-5 max-w-[34rem] text-[0.94rem] leading-[1.55] text-ink/74 sm:text-base">
            Professional cleaning services throughout Queens, Brooklyn, Long
            Island, and surrounding communities. If you don’t see your location
            listed, reach out — we’d be happy to confirm availability.
          </p>

          <div className="service-area-reveal service-area-reveal-4 mt-6">
            <ButtonLink
              href={QUOTE_HREF}
              className="service-area-quote w-full min-h-[3.35rem] sm:w-[17.5rem]"
            >
              Get My Free Quote <span aria-hidden="true">→</span>
            </ButtonLink>

            <ul
              aria-label="Quote benefits"
              className="service-area-trust mt-4 flex flex-wrap items-center gap-y-3 text-[0.7rem] text-ink/62"
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

        <div
          className={`service-area-visual relative z-10 mt-7 h-56 sm:h-64 lg:absolute lg:inset-0 lg:mt-0 lg:h-auto ${
            imageSrc ? "has-image" : "is-placeholder"
          }`}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt=""
              fill
              quality={75}
              sizes="(max-width: 1023px) 100vw, 68vw"
              className="service-area-image object-cover"
            />
          ) : (
            <div aria-hidden="true" className="service-area-placeholder" />
          )}
          <div aria-hidden="true" className="service-area-image-shade" />
          <p className="service-area-message" aria-hidden="true">
            Cleaner
            <span>Neighborhoods.</span>
            Brighter Days. ♡
          </p>
        </div>

        <ul className="service-area-cards relative z-30 mx-5 mt-6 grid grid-cols-2 gap-2.5 sm:mx-8 sm:grid-cols-3 sm:gap-3 lg:absolute lg:right-12 lg:bottom-[6.9rem] lg:mx-0 lg:mt-0 lg:w-[48%] xl:right-[4.5rem]">
          {LOCATIONS.map((location, index) => {
            const Icon = location.icon;
            return (
              <li
                key={location.name}
                className={`service-area-card service-area-card-${index + 1}`}
              >
                <Icon />
                <h3>{location.name}</h3>
              </li>
            );
          })}
        </ul>

        <p className="service-area-finishing relative z-30 flex items-center justify-center gap-4 px-5 pb-9 pt-9 text-[0.58rem] font-medium tracking-[0.26em] text-gold-muted/80 uppercase sm:px-8 sm:text-[0.64rem] sm:tracking-[0.31em] lg:absolute lg:right-12 lg:bottom-8 lg:left-12 lg:p-0 xl:right-[4.5rem] xl:left-[4.5rem]">
          <span aria-hidden="true" />
          Cleaner Homes • Stronger Communities
          <span aria-hidden="true" />
        </p>
      </div>
    </section>
  );
}
