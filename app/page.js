import HeroSection from "@/components/homepage-hero";

import { MainHeader } from "@/components/navbar";
import Vision from "@/components/vision";

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <main>
        <HeroSection />
        <Vision />
      </main>
    </>
  );
}
