import { IKnowledgeCardData } from "@/types/index.t";
import Image from "next/image";
import React from "react";
interface IKnowledgeCard {
  cardData: IKnowledgeCardData;
  additionalStyle: string;
}
export const KnowledgeCard: React.FC<IKnowledgeCard> = ({
  cardData,
  additionalStyle,
}) => {
  const { text, img } = cardData;
  return (
    <div
      className={`p-[24px] rounded-[8px] flex flex-col justify-between ${additionalStyle}`}
    >
      <Image
        src={img.url}
        alt={text}
        width={img.width}
        height={img.height}
        className="ml-auto"
      />
      <p className="text-headingCard text-white">{text}</p>
    </div>
  );
};
