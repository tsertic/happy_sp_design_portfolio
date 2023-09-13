"use client";
import React from "react";
import Image from "next/image";
import { IWorkCardData } from "@/types/index.t";
import { motion } from "framer-motion";
interface IWorkCard {
  cardData: IWorkCardData;
  position: number;
  index: number;
}
export const WorkCard: React.FC<IWorkCard> = ({
  cardData,
  position,
  index,
}) => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{
        rotate: 0,
        left: `${(index - position) * 560}px`,
        scale: 1,
      }}
      className="min-w-[270px] min-h-[180px] md:min-w-[540px] md:min-h-[360px] ronded-[10px] overflow-hidden absolute top-0 "
    >
      <Image
        src={cardData.imgUrl}
        width={540}
        height={360}
        alt="project xyz"
        className="max-md:px-4"
      />
    </motion.div>
  );
};
