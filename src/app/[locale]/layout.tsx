import "@/styles/globals.css";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Header } from "@/components/header";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Page Spark",
  description: "Light up the creative spark of Landing Page",
  icons: [{
    rel: "icon",
    url: "/logo.png",
    type: "image/svg+xml"
  }],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale} className={GeistSans.variable}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
