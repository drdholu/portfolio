"use client";
import { motion } from "framer-motion";
// import { FlipWords } from "./ui/flip-words";
import { BentoGridDemo } from "./BentoGrid";
import { DockDemo } from "./DockDemo";
import { cn } from "@/lib/utils";
// import { BackgroundBeams } from "./ui/background-beams";
// import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo";
// import { IconLocation } from "@tabler/icons-react";
// import { MapPin } from "lucide-react";
// import { BentoGridItem } from "./ui/bento-grid";
// import Image from "next/image";

export function Landing() {
    // const words = ["A Web-Developer"];
    return (
        <div className="flex md:flex-row flex-col items-center justify-evenly min-h-screen mx-10">
            
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
                <div className="flex-row md:flex gap-4">

                    <div className="bento-name md:p-0 p-2">
                        <div
                            className={cn(
                                "h-full row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4",
                            )}
                        >
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
                                className="flex flex-col text-xl md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left"
                            >
                                {/* <Image src={"../assets/images/scene.jpg"} width={10} alt="scene" className="w-10 h-10 rounded-full"/> */}
                                <div className="flex flex-col">
                                    Hi, I&apos;m
                                    <span className="text-2xl md:text-3xl bg-clip-text animate-gradient text-transparent bg-gradient-to-r from-green-400 to-blue-400">Paras Dhole</span>                
                                </div>

                                <motion.div
                                    initial={{opacity: 0, y: -20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.35}}
                                    className="space-y-4"
                                >
                                    <div className="flex gap-2 items-center text-lg md:text-xl whitespace-nowrap flex-wrap">
                                        a
                                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-200">fullstack dev</p>
                                        based in
                                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-200">pune</p>
                                    </div>
                                    
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rerum id autem inventore quidem, unde, obcaecati aliquam tempore at explicabo eos maiores. Provident deleniti culpa dolores quaerat modi sequi ullam!
                                    </p>
                                    
                                    <div className="flex gap-4 items-center whitespace-nowrap text-sm md:text-base">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                                        >
                                            Available for work
                                        </motion.div>
                                        <motion.a
                                            whileHover={{ y: -2 }}
                                            href="/resume.pdf"
                                            download
                                            className="px-4 py-2 rounded-full bg-gradient-to-br from-green-500 to-blue-500  hover:from-blue-500 hover:to-green-500 text-white transition-colors"
                                        >
                                            Download Resume
                                        </motion.a>
                                    </div>                                    
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    <BentoGridDemo />
                </div>
                <DockDemo />
                {/* <div className="md:hidden overflow-hidden w-screen">
                    <AppleCardsCarouselDemo/>
                </div> */}
            </motion.div>
        </div>
    );
}
