"use client";

import { Bot, ChevronRight, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import navbars from "@/data/navbars.json";
import apps from "@/data/apps.json";
import Link from "next/link";

export function Navbar({
  isActive,
  toggleMenu,
}: {
  isActive: boolean;
  toggleMenu: () => void;
}) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <header className="fixed top-0 w-full bg-background flex justify-center z-30">
      <div className="w-full max-w-7xl flex justify-between items-center p-4">
        <div className="font-bold flex gap-2 items-center justify-center">
          <Bot className="duration-300" />
          <p className="font-mono duration-300">{apps.title}</p>
        </div>

        <div className="md:hidden flex items-center gap-5">
          <div
            className="rounded-full cursor-pointer duration-300"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          >
            {currentTheme === "dark" ? <Moon /> : <Sun />}
          </div>
          <div className="cursor-pointer duration-300" onClick={toggleMenu}>
            {isActive ? <X /> : <Menu />}
          </div>
        </div>

        <ul className="md:flex gap-5 text-sm hidden">
          {navbars.menus.map((menu) => (
            <Link
              href={`${menu.path}`}
              key={menu.id}
              className="cursor-pointer border-b-3 border-transparent hover:border-primary px-5 duration-300"
            >
              {menu.name}
            </Link>
          ))}
        </ul>

        <div className="md:flex gap-4 items-center justify-center hidden">
          <Button
            className="rounded-full cursor-pointer p-5"
            variant="secondary"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          >
            {currentTheme === "dark" ? <Moon /> : <Sun />}
          </Button>
          <Link href={apps.link} target="_blank">
            <Button className="cursor-pointer hover:scale-105 transition-transform flex gap-2 items-center justify-center">
              <p>Try it now</p>
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
