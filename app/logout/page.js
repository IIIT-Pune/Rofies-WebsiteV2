"use client";
import { useRouter } from "next/navigation";

export default async function LogoutPage() {
  const router = useRouter();
  const response = await fetch("/api/logout");
  const result = await response.json();
  console.log(result);
  if (result.success) {
    window.location.href = "/";
  } else {
    console.error(result.error);
  }
}
