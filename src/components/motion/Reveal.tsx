"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.95, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function MaskReveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ clipPath: "inset(0% 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.15, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
