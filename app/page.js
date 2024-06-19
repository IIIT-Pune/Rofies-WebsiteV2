import { ModeToggle } from "@/components/modechange";
import { NavigationMenuDemo } from "@/components/navbar";

export default function HomePage() {
  return (
    <>
      <header className="grid place-items-center pt-4">
        <NavigationMenuDemo />
      </header>
      <h1 className="text-orange-600">Hello World</h1>
    </>
  );
}
