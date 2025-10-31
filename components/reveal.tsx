"use client";

import { motion, type Variants } from "motion/react";

type MotionComponentKey = "div" | "section" | "article" | "header" | "footer" | "main" | "nav" | "aside";

type RevealProps = {
  children: React.ReactNode;
  as?: MotionComponentKey;
  className?: string;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
};

const motionComponents: Record<MotionComponentKey, typeof motion.div> = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  main: motion.main,
  nav: motion.nav,
  aside: motion.aside,
};

export function Reveal({ children, as = "div", className }: RevealProps) {
  const MotionComponent = motionComponents[as] || motionComponents.div;
  
  return (
    <MotionComponent
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}


