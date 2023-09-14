import Image from "next/image";
import React from "react";
interface IRoundArrowButton {
  direction: "left" | "right";
  onClickAction: () => void;
}
export const RoundArrowButton: React.FC<IRoundArrowButton> = ({
  direction,
  onClickAction,
}) => {
  let arrowSvg = "";
  if (direction === "left") arrowSvg = "/images/icon-arrow-left.svg";
  if (direction === "right") arrowSvg = "/images/icon-arrow-right.svg";
  return (
    <button
      className=" bg-primary hover:bg-primary-focus w-[64px] h-[64px] rounded-full flex justify-center items-center transition-universal "
      onClick={onClickAction}
    >
      <Image src={arrowSvg} width={16} height={14.81} alt="arrow icon" />
    </button>
  );
};
