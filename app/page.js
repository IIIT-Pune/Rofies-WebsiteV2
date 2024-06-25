import HeroSection from "@/components/homepage-hero";

import { MainHeader } from "@/components/navbar";
import Vision from "@/components/vision";
import { verifyAuthSession } from "@/lib/auth";

export default async function HomePage() {
  const result = await verifyAuthSession();
  const isUserLoggedIn = result.user ? true : false;
  return (
    <>
      <MainHeader isUserLoggedIn={isUserLoggedIn} />
      <main>
        <HeroSection />
        <Vision />
      </main>
    </>
  );
}
