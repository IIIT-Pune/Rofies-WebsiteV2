import SignupForm from "@/components/signupform";
import { WavyBackground } from "@/ui/wavy-background";

export default function SignupPage() {
  return (
    <WavyBackground
      blur={0}
      className="mx-auto my-7 h-screen w-full overflow-auto pt-4"
    >
      <SignupForm />
    </WavyBackground>
  );
}
