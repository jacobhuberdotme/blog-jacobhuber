"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function NavTop() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-background text-foreground">
      <Link href="/" className="text-xl font-bold">
        Jacob Huber
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link href="/blog">
          <Button variant="link" className="text-foreground">
            Blog
          </Button>
        </Link>
        <Link href="/resume">
          <Button variant="link" className="text-foreground">
            Resume
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="link" className="text-foreground">
            About
          </Button>
        </Link>
      </div>
      <div className="md:hidden">
        <Button
          variant="outline"
          size="icon"
          className="text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-4 bg-background p-4 rounded-md shadow-md flex flex-col space-y-2 md:hidden">
          <Link href="/about" className="text-foreground" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/blog" className="text-foreground" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/resume" className="text-foreground" onClick={() => setIsOpen(false)}>
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}