"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";
import { NAV_LINKS } from "@/lib/navigation";

const HEADER_QUOTE_HREF = "https://app.jotform.com/262634133425149";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) {
        setOpen(false);
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`relative z-50 transition-colors duration-300 ${
        open ? "bg-ink" : "bg-transparent"
      }`}
    >
      <a
        href="#hero-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        Skip to content
      </a>

      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-12 lg:py-4">
        <Logo className="justify-self-start" />

        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-8 lg:flex xl:gap-10"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-[0.78rem] font-medium tracking-[0.16em] text-ivory uppercase transition-colors duration-300 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 justify-self-end lg:flex">
          <CallButton />
          <ButtonLink
            href={HEADER_QUOTE_HREF}
            size="nav"
            trackingLocation="header"
            trackingLabel="GET MY FREE QUOTE"
          >
            Get My Free Quote
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <CallButton />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-ivory transition-colors duration-300 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 h-[calc(100svh-100%)] overflow-y-auto border-t border-white/10 bg-ink lg:hidden"
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex max-w-[1440px] flex-col gap-1 px-5 py-6 sm:px-8"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="min-h-12 border-b border-white/8 py-3 text-[0.82rem] font-medium tracking-[0.16em] text-ivory uppercase transition-colors duration-300 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink
            href={HEADER_QUOTE_HREF}
            className="mt-5 w-full"
            size="default"
            trackingLocation="header"
            trackingLabel="GET MY FREE QUOTE"
          >
            Get My Free Quote
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}

function CallButton() {
  return (
    <a
      href="tel:+19293361957"
      aria-label="Call LuxeDuo Cleaning Services at (929) 336-1957"
      title="Call (929) 336-1957"
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/75 bg-ink/30 text-gold backdrop-blur-sm transition-[color,background-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-px hover:scale-[1.02] hover:bg-gold hover:text-ink hover:shadow-[0_0_20px_rgba(201,162,74,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:h-12 lg:w-12"
    >
      <PhoneIcon />
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[1.15rem] w-[1.15rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7.2 3.8 9.5 7c.4.6.3 1.4-.2 1.9l-1.4 1.3a14.5 14.5 0 0 0 5.9 5.9l1.3-1.4c.5-.5 1.3-.6 1.9-.2l3.2 2.3c.6.4.8 1.2.5 1.9l-.8 1.7c-.3.7-1.1 1.1-1.8 1-8.2-1.1-14.4-7.3-15.5-15.5-.1-.7.3-1.5 1-1.8l1.7-.8c.7-.3 1.5-.1 1.9.5Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
