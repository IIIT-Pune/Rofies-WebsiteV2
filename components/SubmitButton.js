"use client";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ icon, label, variant, className }) {
  const { isLoading } = useFormStatus();
  return (
    <Button className={className} disabled={isLoading} variant={variant}>
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </>
      )}
    </Button>
  );
}
