"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faDesktop } from "@fortawesome/free-solid-svg-icons"; 
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; 
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const getCurrentIcon = (theme: string | undefined): IconDefinition => {
  switch (theme) {
    case "light":
      return faSun;
    case "dark":
      return faMoon;
    case "system":
      return faDesktop;
    default:
      return faDesktop; 
  }
};

export function ThemeToggle() {
  const { setTheme, theme } = useTheme(); 

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <FontAwesomeIcon
            icon={getCurrentIcon(theme)}
            className="h-[1.2rem] w-[1.2rem] transition-all"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <FontAwesomeIcon icon={faSun} className="mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <FontAwesomeIcon icon={faMoon} className="mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <FontAwesomeIcon icon={faDesktop} className="mr-2" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}