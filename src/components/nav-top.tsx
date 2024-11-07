"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";

export function NavTop() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-background text-foreground">
      <Link href="/" className="text-xl font-bold">
        Jacob Huber
      </Link>
      <div className="hidden md:flex space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/resume" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Resume
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
          <Link href="/blog" className="text-foreground" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/projects" className="text-foreground" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/about" className="text-foreground" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/resume" className="text-foreground" onClick={() => setIsOpen(false)}>
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}