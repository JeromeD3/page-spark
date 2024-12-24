"use client";
import { ThemeSwitch } from "./theme-switch";
import { I18nSwitch } from "./i18n-switch";
import Image from "next/image";
import { useState } from "react";
import HeaderUser from "./header-user";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  NavbarProps,
} from "@nextui-org/react";
import { cn } from "@nextui-org/react";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Products", href: "#", isActive: true },
  { name: "About Us", href: "#" },
];

export function Header(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      {...props}
      isBordered
      classNames={{
        base: cn("border-default-100", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
        }),
        wrapper: "w-full justify-center",
        item: "hidden md:flex",
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <Logo />
          <span className="ml-2 text-lg font-bold">Page Spark</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        justify="center"
        className="hidden h-11 rounded-full px-6 shadow-medium dark:bg-[#131316] md:flex"
      >
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={item.isActive}>
            <Link
              className={!item.isActive ? "text-default-500" : undefined}
              color={item.isActive ? "foreground" : undefined}
              href={item.href}
              size="sm"
              aria-current={item.isActive ? "page" : undefined}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden items-center gap-2 md:flex">
          <I18nSwitch />
        </NavbarItem>
        <ThemeSwitch />
        <HeaderUser />
      </NavbarContent>

      <NavbarMenu className="bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 will-change-auto dark:bg-default-100/50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={item.isActive ? "primary" : "foreground"}
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <div>
          <I18nSwitch />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Page Spark Logo"
      width={32}
      height={32}
      className="text-black dark:text-white"
    />
  );
};
