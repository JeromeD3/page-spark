import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{
    locale: string;
  }>;
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
      </div>
    </main>
  );
}
