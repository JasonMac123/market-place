"use client";

import { StripeItem } from "../types/types";

import StripeItemCard from "./cards/StripeItemCard";

interface StripeItemsProps {
  data: StripeItem[];
}

const StripeItems: React.FC<StripeItemsProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return <StripeItemCard key={item.id} {...item} />;
      })}
    </>
  );
};

export default StripeItems;
