"use client";

import {
  Avatar,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  Button,
} from "@nextui-org/react";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Link } from "@/i18n/routing";

const HeaderUser = () => {
  const { data: session } = useSession();
  return session?.user ? (
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
      <DropdownMenu>
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{session.user.email}</p>
        </DropdownItem>
        <DropdownItem key="logout" color="danger" onPress={() => signOut()}>
          Sign out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <Link href="/auth/login">
      <Button className="text-default-500" radius="full" variant="light">
        Login
      </Button>
    </Link>
  );
};

export default HeaderUser;
