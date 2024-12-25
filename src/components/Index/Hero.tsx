import React from "react";
import { AnimatedGradientText } from "../ui/AnimatedGradientText";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { RainbowButton } from "../ui/RainbowButton";
import { Icon } from "@iconify/react";
import { Spotlight } from "../ui/Spotlight";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

const Hero = () => {
  return (
    <div className="z-10 flex flex-col items-center justify-center py-24">
      <StarsBackground />
      <ShootingStars />
      <Introduction />
      <Content />
    </div>
  );
};

export default Hero;

const Content = () => {
  return (
    <div className="max-w-7xl px-4">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <h1 className="max-w-prose bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text pt-4 text-center text-5xl font-bold text-transparent dark:from-white dark:to-neutral-300 sm:text-6xl md:text-7xl lg:text-8xl">
        Bring creative sparks to <br className="hidden sm:block" />
        landing pages that <br className="hidden sm:block" />
        <span className="inline animate-gradient bg-gradient-to-r from-blue-600 via-pink-500 to-blue-600 bg-[length:200%_100%] bg-clip-text text-transparent [--bg-size:200%]">
          capture attention
        </span>
      </h1>

      <div className="mt-10 flex flex-col items-center justify-center">
        <p className="text-center text-lg text-gray-500 dark:text-gray-400">
          Page Spark is a tool that helps you create landing pages that capture
          attention.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <RainbowButton className="gap-2 dark:text-black">
          Get Started for free
          <Icon
            icon="solar:alt-arrow-right-linear"
            className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
          />
        </RainbowButton>
      </div>
    </div>
  );
};

const Introduction = () => {
  return (
    <div className="z-10 mb-6  flex items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Introducing Page Spark
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
};
