"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
export default function Header({
  heightToScroll = 500,
  gradient = "bg-gradient-to-r from-navy via-navy to-danger",
}: {
  heightToScroll?: number;
  gradient?: string;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const company = process.env.NEXT_PUBLIC_COMPANY_NAME?.toUpperCase() || "TP";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > heightToScroll);
    };

    // Ejecutar al inicio para evitar que quede transparente tras la recarga
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heightToScroll]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors bg-transparent duration-300 `}
    >
      <div
        className={`container max-w-screen-xl mx-auto px-4 py-3 m-2 rounded-xl flex justify-between items-center ${
          isScrolled
            ? // ? "bg-gradient-to-r from-indigo-800 to-red-900"
              // ? "bg-gradient-to-r from-indigo-800 to-blue-800"
              // ? "bg-gradient-to-r from-navy to-indigo-800"
              // ? ""
              gradient
            : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center justify-center gap-2">
          <Avatar className="rounded-xl">
            <AvatarImage src="/tplogowhite.svg" alt="tp" />
            <AvatarFallback className="bg-transparent text-secondary">
              TP
            </AvatarFallback>
          </Avatar>
          <div className="text-base sm:text-xl tracking-tight font-bold text-secondary flex flex-col">
            {company}
          </div>
        </Link>
      </div>
    </header>
  );
}
