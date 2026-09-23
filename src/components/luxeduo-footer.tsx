import Image from "next/image";
import { ButtonLink } from "@/components/button-link";

const BOOKING_URL = "https://app.jotform.com/262634133425149";

const QUICK_LINKS = [
  { href: "#hero-content", label: "Home" },
  { href: "#services", label: "Our Services" },
  { href: "#what-to-expect", label: "What to Expect" },
  { href: "#service-areas", label: "Service Area" },
  { href: "#faq", label: "FAQ" },
  { href: "#quote", label: "Book Your Cleaning" },
  { href: "#contact", label: "Contact" },
] as const;

const SERVICES = [
  "Residential Cleaning",
  "Airbnb Cleaning",
  "Move-In / Move-Out",
  "Commercial / Office Cleaning",
  "Deep Cleaning",
] as const;

const SERVICE_AREAS = [
  "Queens, NY",
  "Flushing",
  "Jackson Heights",
  "Forest Hills",
  "Brooklyn",
  "Long Island",
] as const;

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.5" r="0.8" className="footer-icon-dot" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.7 20v-7h2.5l.4-3h-2.9V8.1c0-.9.3-1.5 1.5-1.5h1.6V3.9c-.7-.1-1.5-.2-2.2-.2-2.2 0-3.8 1.4-3.8 3.9V10H9.2v3h2.6v7" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.4 4c.4 2.2 1.7 3.5 3.8 3.7v3a8.2 8.2 0 0 1-3.8-1.1v5.5a5.2 5.2 0 1 1-4.5-5.2v3.1a2.2 2.2 0 1 0 1.5 2.1V4h3Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 3.8 9.5 7c.4.6.3 1.4-.2 1.9l-1.4 1.3a14.5 14.5 0 0 0 5.9 5.9l1.3-1.4c.5-.5 1.3-.6 1.9-.2l3.2 2.3c.6.4.8 1.2.5 1.9l-.8 1.7c-.3.7-1.1 1.1-1.8 1-8.2-1.1-14.4-7.3-15.5-15.5-.1-.7.3-1.5 1-1.8l1.7-.8c.7-.3 1.5-.1 1.9.5Z" />
    </svg>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="footer-column-heading">
      {children}
      <span aria-hidden="true" />
    </h2>
  );
}

export function LuxeDuoFooter() {
  return (
    <footer className="luxeduo-footer relative overflow-hidden text-ivory">
      <svg
        className="footer-botanical"
        viewBox="0 0 330 310"
        aria-hidden="true"
      >
        <path d="M-8 318C55 224 88 133 109 14" />
        <path d="M29 273c55-17 89-51 100-102-50 3-88 35-100 102Z" />
        <path d="M65 205c-10-48 4-87 43-116 24 42 10 86-43 116Z" />
        <path d="M99 145c38-17 71-13 99 14-27 29-64 24-99-14Z" />
        <path d="M3 298c15-42 45-63 90-64-2 41-32 63-90 64Z" />
        <path d="M128 100c20-30 47-43 82-36-7 37-36 49-82 36Z" />
      </svg>

      <div className="footer-main relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[4.5rem]">
        <div className="footer-grid">
          <section className="footer-brand" aria-label="About LuxeDuo">
            <div className="footer-logo-wrap">
              <Image
                src="/luxeduo-momdaughterlogo.png"
                alt="LuxeDuo Cleaning Services"
                width={1024}
                height={683}
                className="footer-logo-image"
              />
            </div>
            <span className="footer-brand-rule" aria-hidden="true" />
            <p className="footer-tagline font-serif">
              A Cleaner Space
              <span>for a Brighter You.</span>
            </p>
            <p className="footer-description">
              Reliable. Detailed. Trusted. We help you enjoy a cleaner,
              healthier space so you can focus on what matters most.
            </p>
            <div className="footer-socials" aria-label="Social media links">
              <button
                type="button"
                disabled
                aria-label="Instagram link not yet configured"
                title="Instagram link not yet configured"
              >
                <InstagramIcon />
              </button>
              <button
                type="button"
                disabled
                aria-label="Facebook link not yet configured"
                title="Facebook link not yet configured"
              >
                <FacebookIcon />
              </button>
              <button
                type="button"
                disabled
                aria-label="TikTok link not yet configured"
                title="TikTok link not yet configured"
              >
                <TikTokIcon />
              </button>
              <button
                type="button"
                disabled
                aria-label="Email address not yet configured"
                title="Email address not yet configured"
              >
                <MailIcon />
              </button>
            </div>
          </section>

          <nav className="footer-links" aria-label="Footer navigation">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-services" aria-label="Cleaning services">
            <ColumnHeading>Our Services</ColumnHeading>
            <ul>
              {SERVICES.map((service) => (
                <li key={service}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footer-areas" aria-labelledby="footer-areas-title">
            <ColumnHeading>
              <span id="footer-areas-title">Service Area</span>
            </ColumnHeading>
            <ul>
              {SERVICE_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <div className="footer-area-note">
              <PinIcon />
              <p className="font-serif">
                Proudly serving homes
                <span>and businesses across</span>
                <span>Queens, Brooklyn &amp; Long Island.</span>
              </p>
            </div>
          </section>

          <section
            id="contact"
            className="footer-contact scroll-mt-28 lg:scroll-mt-36"
            aria-labelledby="footer-contact-title"
          >
            <ColumnHeading>
              <span id="footer-contact-title">Get in Touch</span>
            </ColumnHeading>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <PhoneIcon />
              </span>
              <a href="tel:+19293361957">(929) 336-1957</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <PinIcon />
              </span>
              <p>Queens • Brooklyn • Long Island</p>
            </div>
            <ButtonLink
              href={BOOKING_URL}
              className="footer-booking-button mt-7 w-full"
              trackingLocation="footer"
              trackingLabel="BOOK MY CLEANING"
            >
              Book My Cleaning
              <span aria-hidden="true">→</span>
            </ButtonLink>
            <p className="footer-booking-note font-serif">
              Fast. Easy. Hassle-Free.
            </p>
          </section>
        </div>

        <div className="footer-lower">
          <p className="footer-script font-serif" aria-hidden="true">
            More Time
            <span>for What Matters. ♡</span>
          </p>
          <p className="footer-divider">
            <span aria-hidden="true" />
            Cleaner Spaces. Brighter Days.
            <span aria-hidden="true" />
          </p>
        </div>
      </div>

      <div className="footer-legal relative z-10">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-5 py-6 text-center sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:text-left xl:px-[4.5rem]">
          <p>© 2026 LuxeDuo Cleaning Services. All rights reserved.</p>
          <div className="footer-legal-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Website by Gorilla Upgrades</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
