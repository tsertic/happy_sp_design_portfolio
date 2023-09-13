import React from "react";
import { cardStylesArray } from "./cardStyles";
import { knowledgeCardData } from "@/constants";
import { KnowledgeCard } from "@/components/cards/KnowledgeCard";

export const KnowledgeCardsGrid = () => {
  return (
    <div className="w-full knowledgeCardsGrid  ">
      {knowledgeCardData.map((card, i) => {
        return (
          <KnowledgeCard
            additionalStyle={cardStylesArray[i]}
            cardData={card}
            key={card._id}
          />
        );
      })}
    </div>
  );
};
