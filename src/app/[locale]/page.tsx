import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { type Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Index/Hero";

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Page Spark",
    description: "Light up the creative spark of Landing Page",
    keywords: "ai",
  };
}

export default async function HomePage({ params }: Props) {
  const t = await getTranslations("HomePage");
  const { locale } = await params;

  setRequestLocale(locale);
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
    </main>
  );
}
