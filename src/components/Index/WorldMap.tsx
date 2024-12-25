"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

export default function WorldMap() {
  return (
    <div className="mx-auto w-full max-w-7xl bg-white py-40 dark:bg-black">
      <div className="text-center">
        <p className="text-xl font-bold text-black dark:text-white md:text-4xl">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="mx-auto max-w-2xl py-4 text-sm text-neutral-500 md:text-lg">
          Our global network connects clients worldwide, from bustling cities to
          remote corners. Join thousands of satisfied customers across
          continents who trust our services.
        </p>
      </div>
    </div>
  );
}
