"use client"

import { Link } from "@nextui-org/react";
import Image from "next/image";

const LogoWithText = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Page Spark Logo"
        width={32}
        height={32}
        className="text-black dark:text-white"
      />
      <span className="ml-2 text-lg font-bold text-black dark:text-white">Page Spark</span>
    </Link>
  );

}

export default LogoWithText
