"use client";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { BentoGridDemo } from "./BentoGrid";
import { DockDemo } from "./DockDemo";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "./ui/background-beams";
import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo";
import { IconLocation } from "@tabler/icons-react";
import { MapPin } from "lucide-react";

export function Landing() {
    const words = ["A Web-Developer"];
    return (
        <div className="flex md:flex-row flex-col items-center justify-evenly h-screen p-10">
            <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: [20, -5, 0],
            }}
            exit={{
                opacity: 0,
                x: '100%',
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
            }}
            className="flex flex-col text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left"
            >
                <div className="flex flex-col">
                    Hi, I&apos;m
                    <span className="text-4xl md:text-5xl bg-clip-text animate-gradient text-transparent bg-gradient-to-r from-green-400 to-blue-400">Paras Dhole</span>                
                </div>
                {/* <FlipWords words={words} />  */}
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.35}}
                >
                    <div className="flex gap-2 items-center text-2xl md:text-3xl whitespace-nowrap flex-wrap">
                        {/* <MapPin/> */}a
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-200">fullstack dev</p>
                        based in
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-200">pune</p>
                    </div>
                    <DockDemo />
                </motion.div>
            </motion.div>
            
            <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: [20, -5, 0],
            }}
            transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
            }}
            >
                <div className="hidden md:block">
                    <BentoGridDemo />
                </div>
                <div className="md:hidden overflow-hidden w-screen">
                    <AppleCardsCarouselDemo/>
                </div>
            </motion.div>
        </div>
    );
}
