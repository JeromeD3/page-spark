"use client";
import { motion } from "framer-motion";
import AnimatedText from "../ui/AnimatedText";
import SectionContainer from "../ui/SectionContainer";

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: "Next.js & React",
    description:
      "Built with Next.js 14 App Router, featuring server components and streaming SSR for optimal performance.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  {
    title: "Modern UI Components",
    description:
      "Elegant UI with NextUI components, TailwindCSS for styling, and smooth animations via Framer Motion.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    ),
  },
  {
    title: "Authentication & Security",
    description:
      "Secure authentication powered by Auth.js with multiple providers and role-based access control.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Database & ORM",
    description:
      "Type-safe database operations with Prisma ORM, supporting multiple databases with easy migrations.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
      />
    ),
  },
  {
    title: "Motion & Animations",
    description:
      "Smooth, performant animations and gestures powered by Framer Motion for enhanced user experience.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "Internationalization",
    description:
      "Built-in i18n support for multiple languages with Next.js, enabling global reach for your application.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Stack = () => {
  const title = (
    <p className="bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-2xl font-bold text-transparent dark:from-white dark:to-gray-200 md:text-4xl">
      Built with Modern{" "}
      <AnimatedText text="Tech Stack" className="text-neutral-400" />
    </p>
  );

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionContainer
          subTitle="Technology"
          title={title}
          description="Leveraging cutting-edge technologies to deliver scalable, secure, and performant web applications."
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative transform-gpu rounded-xl border border-gray-200/80 bg-gradient-to-b from-white/95 to-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300/80 hover:from-white hover:to-white/90 hover:shadow-lg hover:shadow-gray-200/20 active:translate-y-0 dark:border-gray-800/80 dark:from-gray-900/40 dark:to-gray-900/20 dark:hover:border-gray-700/90 dark:hover:from-gray-900/60 dark:hover:to-gray-900/40 dark:hover:shadow-gray-950/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800/80 dark:to-gray-900/80 dark:group-hover:from-gray-800">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-600 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                >
                  {feature.icon}
                </svg>
              </div>

              <h3 className="mb-3 bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-xl font-semibold text-transparent transition-colors duration-300 dark:from-white dark:to-gray-200">
                {feature.title}
              </h3>
              <p className="text-gray-600/90 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-400/90 dark:group-hover:text-gray-300/90">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stack;
