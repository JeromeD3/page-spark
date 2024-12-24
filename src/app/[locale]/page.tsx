import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { type Metadata } from "next";
import Image from "next/image";

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
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div>
          <h1>{t("title")}</h1>
        </div>

        <Link
          href="/auth/login"
          className="rounded-xl px-8 py-4 text-xl font-bold"
        >
          登录
        </Link>

        <Image
          src="/logo.png"
          alt="Page Spark Logo"
          width={32}
          height={32}
          className="text-black dark:text-white"
        />
      </div>
    </main>
  );
}
