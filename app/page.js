import Footer from "@/components/footer";
import { HeroHighlightDemo } from "@/components/homepage-hero";

import { MainHeader } from "@/components/navbar";
import Vision from "@/components/vision";

export default function HomePage() {
  return (
    <>
      <header className="grid place-items-center pt-4">
        <MainHeader />
      </header>
      <main className="pt-4">
        <HeroHighlightDemo />
        <Vision />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}
