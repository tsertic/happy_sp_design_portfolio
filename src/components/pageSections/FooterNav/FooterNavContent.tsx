import { Button } from "@/components/UI/Button";
import { Logo } from "@/components/UI/Logo";
import React from "react";

export const FooterNavContent = () => {
  return (
    <div className="container-wide flex justify-between items-center">
      <Logo />
      <Button
        colorSchema="primary"
        href="mailto:happytest1323@gmail.com"
        ariaLabel="mail link for free consultation"
      >
        free consultation
      </Button>
    </div>
  );
};
