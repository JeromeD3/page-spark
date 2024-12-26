import AvatarCircles from "../ui/avatar-circles";

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
    <div className="z-10 flex flex-col items-center justify-center pt-24 pb-12">
      <StarsBackground />
      <ShootingStars />
      <Introduction />
      <Content />
      <AnimatedTooltipPreview />
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

function AnimatedTooltipPreview() {
  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788", 
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center gap-4 my-10 w-full">
      <AvatarCircles numPeople={99} avatarUrls={avatars} />
      <div className="flex flex-col">
        <div className="flex items-center gap-1 text-yellow-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div className="text-gray-500 dark:text-gray-400">
          99+ users found it helpful
        </div>
      </div>
    </div>
  );
}
