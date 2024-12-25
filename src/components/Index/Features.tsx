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
    <p className="text-xl font-bold text-black dark:text-white md:text-4xl">
      Key Features of{" "}
      <AnimatedText text="PageSpark" className="text-neutral-400" />
    </p>
  );

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <SectionContainer
          subTitle="Features"
          title={title}
          description="Our global network connects clients worldwide, from bustling cities to remote corners. Join thousands of satisfied customers across continents who trust our services."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-800 bg-black/30 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
