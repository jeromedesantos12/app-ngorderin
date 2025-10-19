"use client";

import { Footer } from "@/components/molecules/footer";
import { Hero } from "@/components/molecules/hero";
import { Menu } from "@/components/molecules/menu";
import { Navbar } from "@/components/molecules/navbar";
import { Profile } from "@/components/molecules/profile";
import { Steps } from "@/components/molecules/steps";
import { useState } from "react";

export function Home() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => setIsActive(!isActive);

  return (
    <div>
      <Navbar isActive={isActive} toggleMenu={toggleMenu} />
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
