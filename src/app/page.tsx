'use client'
// import { HeroHighlight } from "@/components/ui/hero-highlight";
// import Image from "next/image";
// import { AnimatePresence, motion } from "framer-motion";
import { Landing } from "@/components/Landing";
import Particles from "@/components/ui/particles";
import { NextUIProvider } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// import { Component } from "react";
// import { Router } from "lucide-react";
// import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  // const { theme } = useTheme();
  
  const [color, setColor] = useState("#000000");
  // useEffect(() => {
  //   setColor(theme === "dark" ? "#ffffff" : "#000000");
  // }, [theme]);

  return (
    <div className="">
      <NextUIProvider>
        {/* <div className="flex flex-col justify-center items-center md:hidden p-4 text-center text-lg h-screen">
          will make it responsive soon, for now please visit the site on your pc thanks :)
          <DockDemo />
        </div> */}
        {/* <div className="hidden md:block"> */}
          {/* <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          /> */}
            <Landing />
      </NextUIProvider>
    </div>
  );
}
