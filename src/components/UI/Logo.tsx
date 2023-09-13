import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/" aria-label="Logo , link to homepage">
      <Image
        src="/images/logo.svg"
        width={64}
        height={64}
        className="max-md:w-[48px] max-md:h-[48px] "
        alt="logo"
      />
    </Link>
  );
};
