"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function NavTop() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-background text-foreground">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        Jacob Huber
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4">
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/resume" className="hover:underline">
          Resume
        </Link>
      </div>

      {/* Mobile Navigation - Sheet (Drawer) */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="/blog" className="hover:underline text-lg" onClick={closeSheet}>
                Blog
              </Link>
              <Link href="/projects" className="hover:underline text-lg" onClick={closeSheet}>
                Projects
              </Link>
              <Link href="/about" className="hover:underline text-lg" onClick={closeSheet}>
                About
              </Link>
              <Link href="/resume" className="hover:underline text-lg" onClick={closeSheet}>
                Resume
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}