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

export function NavTop() {
  return (
    <nav className="p-4 bg-background text-foreground">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          Jacob Huber
        </Link>

        {/* Navigation Menu */}
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