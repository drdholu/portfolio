"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { opacity, expand } from '@/utils/anim';

export const PageTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const nbOfColumns = 5;

  const anim = (variants: any, custom?: number | null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants
    }
  }

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="page stairs">
        <motion.div {...anim(opacity)} className="transition-background" />
        <div className="transition-container">
          {[...Array(nbOfColumns)].map((_, i) => (
            <motion.div key={i} {...anim(expand, nbOfColumns - i)} />
          ))}
        </div>
        {children}
      </div>
    </AnimatePresence>
  );
};