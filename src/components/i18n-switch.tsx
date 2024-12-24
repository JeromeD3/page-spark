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
import { Icon } from "@iconify/react";

export function I18nSwitch() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const switchLanguage = (locale: string) => {
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
        <Button
          variant="light"
          size="sm"
          className="min-w-[60px] bg-default-100 hover:bg-default-200"
          startContent={
            <Icon icon="majesticons:globe-grid" className="text-default-500" />
          }
        >
          {(params.locale as string)?.toUpperCase() ||
            routing.defaultLocale.toUpperCase()}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language selection" className="min-w-[120px]">
        {routing.locales.map((locale) => (
          <DropdownItem
            key={locale}
            onPress={() => switchLanguage(locale)}
            className={`${locale === params.locale ? "font-medium text-primary" : ""} capitalize`}
            startContent={
              <Icon
                icon={
                  locale === "zh"
                    ? "emojione:flag-for-china"
                    : "emojione:flag-for-united-states"
                }
                className="text-lg"
              />
            }
          >
            {locale === "zh" ? "中文" : "English"}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
