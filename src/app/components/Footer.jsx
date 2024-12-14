"use client";

import { usePathname } from "next/navigation";
import FooterWrapper from "./FooterWrapper";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/contact") {
    return null;
  }
  return (
    <div className="w-full flex flex-col items-center">
      <FooterWrapper />
    </div>
  )
}