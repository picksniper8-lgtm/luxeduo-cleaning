"use client";

import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { QUOTE_HREF } from "@/lib/navigation";

const FAQ_ITEMS = [
  {
    question: "What cleaning services do you offer?",
    answer:
      "LuxeDuo offers Residential, Airbnb, Move-In / Move-Out, Commercial / Office, and Post-Construction Cleaning.",
  },
  // Policy-dependent answers below require final client confirmation before launch.
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Contact LuxeDuo and we’ll confirm the access details that work best for your cleaning.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer:
      "Contact LuxeDuo and we’ll confirm the supplies and products planned for your cleaning.",
  },
  {
    question: "How long does a cleaning usually take?",
    answer:
      "Timing varies by the size, condition, and type of service. Contact LuxeDuo for details about your space.",
  },
  {
    question: "Can I book recurring cleaning?",
    answer:
      "Contact LuxeDuo and we’ll confirm the recurring service options available for your cleaning needs.",
  },
  {
    question: "How do I get a quote or schedule my cleaning?",
    answer:
      "Request a free quote and LuxeDuo will follow up to confirm the details and next steps for your cleaning.",
  },
] as const;

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

export function LuxeDuoFaq() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      id="faq"
      aria-labelledby="faq-heading"
      data-visible={visible ? "true" : "false"}
      className="luxeduo-faq relative overflow-hidden text-ivory"
    >
      <div aria-hidden="true" className="faq-ambient" />
      <div aria-hidden="true" className="faq-decor">
        <span />
        <span />
        <span />
      </div>

      <div className="faq-shell relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-[44%_56%]">
        <div className="faq-content px-5 pt-12 sm:px-8 lg:px-12 lg:pt-[4.5rem] xl:px-[4.5rem]">
          <p className="faq-reveal faq-eyebrow flex items-center gap-3 text-[0.66rem] font-medium tracking-[0.3em] text-gold uppercase sm:text-[0.71rem]">
            <span aria-hidden="true" />
            Questions, Answered <span aria-hidden="true">✦</span>
          </p>

          <h2
            id="faq-heading"
            className="faq-reveal faq-reveal-2 mt-5 max-w-[34rem] font-serif text-[clamp(2.6rem,3.8vw,3.55rem)] leading-[1.01] font-medium tracking-[-0.035em]"
          >
            <span className="block">Everything You Need</span>
            <span className="block">to Know,{" "}</span>
            <span className="text-gold">Before We Clean.</span>
          </h2>

          <p className="faq-reveal faq-reveal-3 mt-5 max-w-[28rem] text-[0.94rem] leading-[1.55] text-ivory/72 sm:text-base">
            Quick answers to the most common questions about our cleaning
            services.
          </p>

          <div className="faq-reveal faq-reveal-4 mt-6">
            <ButtonLink
              href={QUOTE_HREF}
              className="faq-quote w-full min-h-[3.35rem] sm:w-[17.5rem]"
            >
              Get My Free Quote <span aria-hidden="true">→</span>
            </ButtonLink>

            <ul
              aria-label="Quote benefits"
              className="faq-trust mt-4 flex flex-wrap items-center gap-y-3 text-[0.7rem] text-ivory/68"
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

        <div className="faq-list-wrap relative px-5 pb-2 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-[7.5rem] xl:pr-[4.5rem] xl:pl-8">
          <p className="faq-script" aria-hidden="true">
            A Cleaner Home.
            <span>A Happier You. ♡</span>
          </p>

          <ol className="faq-list">
            {FAQ_ITEMS.map((item, index) => {
              const open = openIndex === index;
              const answerId = `faq-answer-${index + 1}`;
              const buttonId = `faq-button-${index + 1}`;

              return (
                <li
                  key={item.question}
                  className={`faq-item faq-item-${index + 1}`}
                  data-open={open ? "true" : "false"}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                    className="faq-trigger"
                  >
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className="faq-number-rule" />
                    <span className="faq-question">{item.question}</span>
                    <span aria-hidden="true" className="faq-plus">
                      +
                    </span>
                  </button>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!open}
                    className="faq-answer-grid"
                  >
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="faq-finishing relative z-20 col-span-full flex items-center justify-center gap-4 px-5 pb-8 pt-8 text-[0.58rem] font-medium tracking-[0.27em] text-gold/78 uppercase sm:px-8 sm:text-[0.64rem] sm:tracking-[0.31em] lg:absolute lg:right-12 lg:bottom-8 lg:left-12 lg:p-0 xl:right-[4.5rem] xl:left-[4.5rem]">
          <span aria-hidden="true" />
          Cleaner Spaces. Brighter Days.
          <span aria-hidden="true" />
        </p>
      </div>
    </section>
  );
}
