"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Avatar,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
} from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";
import { Link } from "@/i18n/routing";
import { ThemeSwitch } from "./theme-switch";
import { I18nSwitch } from "./i18n-switch";

export function Header() {
  const { data: session } = useSession();

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          My App
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end" className="gap-4">
        <I18nSwitch />
        <ThemeSwitch />
        {session?.user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name={session.user.name ?? undefined}
                size="sm"
                src={session.user.image ?? undefined}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="用户操作">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">已登录为</p>
                <p className="font-semibold">{session.user.email}</p>
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onPress={() => signOut()}
              >
                退出登录
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Link href="/auth/login" className="text-primary">
            登录
          </Link>
        )}
      </NavbarContent>
    </Navbar>
  );
}
