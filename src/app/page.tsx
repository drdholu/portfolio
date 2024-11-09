// import { HeroHighlight } from "@/components/ui/hero-highlight";
// import Image from "next/image";
// import { AnimatePresence, motion } from "framer-motion";
import { Landing } from "@/components/Landing";
import { NextUIProvider } from "@nextui-org/react";
// import { Component } from "react";
// import { Router } from "lucide-react";
// import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
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
  );
}
