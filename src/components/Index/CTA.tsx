"use client";

import { motion } from "framer-motion";
import { RainbowButton } from "../ui/RainbowButton";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-800 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-400 dark:to-pink-600 md:text-5xl lg:text-6xl">
            Ship your first AI SaaS Startup
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-900 dark:text-gray-100">
            Start from here, with PageSpark.
          </p>
          <div className="mt-8">
            <RainbowButton className="group flex items-center gap-3 px-6 py-2.5 text-white transition-transform dark:text-black">
              Get PageSpark
              <svg
                className="h-5 w-5 transform transition-all duration-500 group-hover:translate-x-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </RainbowButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
