"use client";

import Link from "next/link";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function NavTop() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="p-4 bg-background text-foreground">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          Jacob Huber
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Blog Link */}
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Projects Link */}
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Dropdown Menu for "Me" */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Me</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[200px]">
                    <ListItem href="/about" title="About">
                      Learn more about me and my work.
                    </ListItem>
                    <ListItem href="/resume" title="Resume">
                      View my professional experience.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Authentication Section */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
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
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="outline" size="sm" className="w-full" onClick={closeSheet}>
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";