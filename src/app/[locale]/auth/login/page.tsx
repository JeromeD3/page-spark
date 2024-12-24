import { LoginButtons } from "@/components/login-buttons";
import { type Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("LoginPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Login({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("LoginPage");
  setRequestLocale(locale);

  return (
    <>
      <div className="grid h-[calc(100vh-64px)] w-full">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">{t("title")}</h1>
              <p className="text-muted-foreground text-balance">
                {t("description")}
              </p>
            </div>
            <LoginButtons />
          </div>
        </div>
      </div>
    </>
  );
}
