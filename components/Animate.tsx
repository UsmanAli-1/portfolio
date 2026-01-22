"use client";
import { motion } from "framer-motion";

type AnimationType = "fade-up" | "pop" | "slide-left" | "slide-right";

export default function Animate({
  children,
  type = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
}: {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const animations = {
    "fade-up": {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
    },
    pop: {
      initial: { opacity: 0, scale: 0.30 },
      animate: { opacity: 1, scale: 1 },
    },
    "slide-left": {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
    },
    "slide-right": {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      className={className}
      initial={animations[type].initial}
      whileInView={animations[type].animate}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
