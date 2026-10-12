import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Security } from "@/components/security";
import { UseCases } from "@/components/use-cases";
import { Waitlist } from "@/components/waitlist";

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <UseCases />
      <Faq />
      <Pricing />
      <Waitlist />
    </>
  );
}