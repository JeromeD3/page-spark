"use client";

import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useRouter, routing, usePathname } from "@/i18n/routing";

export function I18nSwitch() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const switchLanguage = (locale: string) => {
    // 更安全的路径处理
    const segments = pathname.split("/");
    const currentLocale = segments[1];
    const pathWithoutLocale = segments
      .slice(currentLocale === params.locale ? 2 : 1)
      .join("/");
    router.push(`/${pathWithoutLocale}`, { locale });
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" size="sm">
          {(params.locale as string)?.toUpperCase() ||
            routing.defaultLocale.toUpperCase()}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language selection">
        {routing.locales.map((locale) => (
          <DropdownItem
            key={locale}
            onPress={() => switchLanguage(locale)}
            className={locale === params.locale ? "text-primary" : ""}
          >
            {locale.toUpperCase()}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
