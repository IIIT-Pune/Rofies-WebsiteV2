import { HeroHighlightDemo } from "@/components/homepage-hero";

import { MainHeader } from "@/components/navbar";
import { LayoutGridDemo } from "@/components/test";

export default function HomePage() {
  return (
    <>
      <header className="grid place-items-center pt-4">
        <MainHeader />
      </header>
      <main className="pt-4">
        <HeroHighlightDemo />
        <LayoutGridDemo />
      </main>
    </>
  );
}
