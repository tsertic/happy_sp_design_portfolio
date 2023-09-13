import { Button } from "@/components/UI/Button";
import React from "react";

export const ContactMe = () => {
  return (
    <div className="w-full bg-primary text-primary-content flex flex-col items-center xl:flex-row xl:justify-between  p-[50px] md:py-[56px] md:px-[75px] xl:pl-[65px] xl:pr-[95px] xl:py-[80px] text-center xl:text-left rounded-[10px] ">
      <div className="max-xl:mb-[25px] xl:max-w-[540px]">
        <h3 className="mb-[25px] text-headingMMobile md:text-headingS xl:text-headingM text-primary-content">
          Book a call with me
        </h3>
        <p>
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
      </div>
      <div>
        <Button
          colorSchema="secondary"
          href="mailto:happytest1323@gmail.com"
          ariaLabel="mail link for free consultation"
        >
          free consultation
        </Button>
      </div>
    </div>
  );
};
