"use client";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  icon,
  label,
  variant,
  className,
  type,
}) {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <Button
      className={className}
      disabled={pending}
      variant={variant}
      type={type}
    >
      {pending ? (
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
