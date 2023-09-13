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
  let styleColorSchema = "";
  if (colorSchema === "primary")
    styleColorSchema = "bg-primary hover:bg-primary-focus text-primary-content";
  if (colorSchema === "secondary")
    styleColorSchema =
      "bg-secondary hover:bg-secondary-focus text-secondary-content";
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${styleColorSchema} rounded-[28px] py-[8px] px-[28px] md:py-[14px] md:px-[45px] text-button capitalize`}
    >
      {children}
    </Link>
  );
};
