"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  charClassName?: string;
}

export default function AnimatedText({
  text,
  className = "",
  charClassName = "inline-block",
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, idx) => (
        <motion.span
          key={idx}
          className={charClassName}
          initial={{ x: -10, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.04 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
