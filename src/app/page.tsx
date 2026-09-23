import { Hero } from "@/components/hero";
import { LuxeDuoBookingCta } from "@/components/luxeduo-booking-cta";
import { LuxeDuoDifference } from "@/components/luxeduo-difference";
import { LuxeDuoExperience } from "@/components/luxeduo-experience";
import { LuxeDuoFaq } from "@/components/luxeduo-faq";
import { LuxeDuoFooter } from "@/components/luxeduo-footer";
import { LuxeDuoProcess } from "@/components/luxeduo-process";
import { LuxeDuoServiceArea } from "@/components/luxeduo-service-area";
import { LuxeDuoServices } from "@/components/luxeduo-services";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <LuxeDuoDifference />
        <LuxeDuoServices />
        <LuxeDuoProcess />
        <LuxeDuoExperience />
        <LuxeDuoServiceArea />
        <LuxeDuoFaq />
        <LuxeDuoBookingCta />
      </main>
      <LuxeDuoFooter />
    </>
  );
}
