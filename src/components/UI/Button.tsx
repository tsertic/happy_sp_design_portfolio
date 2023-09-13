import Link from "next/link";
import React from "react";
interface IButton {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
  colorSchema: "primary" | "secondary";
}
export const Button: React.FC<IButton> = ({
  children,
  href,
  ariaLabel,
  colorSchema,
}) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`bg-${colorSchema} hover:bg-${colorSchema}-focus text-${colorSchema}-content   rounded-[28px]`}
    >
      {children}
    </Link>
  );
};
