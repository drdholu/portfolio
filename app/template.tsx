"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
      }}
      exit={{ 
        opacity: 0, 
        y: -8, 
        filter: "blur(4px)",
        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } 
      }}
    >
      {children}
    </motion.div>
  );
}


