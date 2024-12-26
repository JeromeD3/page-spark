import AnimatedText from "../ui/AnimatedText";
import SectionContainer from "../ui/SectionContainer";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Next.js Boilerplate",
    description:
      "Production-ready Next.js templates with SEO-friendly structure and i18n support.",
  },
  {
    title: "Authentication & Payments",
    description:
      "Integrated Google OAuth, one-tap login, and Stripe payment processing.",
  },
  {
    title: "Data Infrastructure",
    description:
      "Built-in Supabase integration for reliable and scalable data storage.",
  },
  {
    title: "One-Click Deployment",
    description:
      "Seamless deployment to Vercel or Cloudflare with automated setup.",
  },
  {
    title: "Business Analytics",
    description:
      "Integrated Google Analytics and Search Console for tracking growth.",
  },
  {
    title: "AI-Ready Infrastructure",
    description:
      "Pre-configured AI integration with built-in credits system and API sales.",
  },
];

const Features = () => {
  const title = (
    <p className="bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-2xl font-bold text-transparent dark:from-white dark:to-gray-200 md:text-4xl">
      Key Features of{" "}
      <AnimatedText text="PageSpark" className="text-neutral-400" />
    </p>
  );

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionContainer
          subTitle="Features"
          title={title}
          description="Our global network connects clients worldwide, from bustling cities to remote corners. Join thousands of satisfied customers across continents who trust our services."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative transform-gpu rounded-xl border border-gray-200/80 bg-gradient-to-b from-white/95 to-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300/80 hover:from-white hover:to-white/90 hover:shadow-lg hover:shadow-gray-200/20 active:translate-y-0 dark:border-gray-800/80 dark:from-gray-900/40 dark:to-gray-900/20 dark:hover:border-gray-700/90 dark:hover:from-gray-900/60 dark:hover:to-gray-900/40 dark:hover:shadow-gray-950/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800/80 dark:to-gray-900/80 dark:group-hover:from-gray-800">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-600 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <h3 className="mb-3 bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-xl font-semibold text-transparent transition-colors duration-300 dark:from-white dark:to-gray-200">
                {feature.title}
              </h3>
              <p className="text-gray-600/90 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-400/90 dark:group-hover:text-gray-300/90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
