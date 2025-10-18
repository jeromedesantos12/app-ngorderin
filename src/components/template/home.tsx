"use client";

import { Footer } from "@/components/molecules/footer";
import { Hero } from "@/components/molecules/hero";
import { Menu } from "@/components/molecules/menu";
import { Navbar } from "@/components/molecules/navbar";
import { Profile } from "@/components/molecules/profile";
import { Steps } from "@/components/molecules/steps";
import { useEffect, useState } from "react";

export function Home() {
  const [isDark, setisDark] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => setIsActive(!isActive);
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setisDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setisDark(true);
    }
  }, []);

  return (
    <div>
      <Navbar
        isDark={isDark}
        isActive={isActive}
        toggleMenu={toggleMenu}
        toggleTheme={toggleTheme}
      />
      <div id="home" className="border-2 border-transparent">
        <Menu isActive={isActive} />
        <Hero />
      </div>
      <div id="steps" className="border-2 border-transparent">
        <Steps />
      </div>
      <div id="profile" className="border-2 border-transparent">
        <Profile />
      </div>
      <Footer />
    </div>
  );
}
