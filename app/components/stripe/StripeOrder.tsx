"use client";

import { StripeItem } from "@/app/types/types";
import StripeItemCard from "../cards/StripeItemCard";

interface StripeOrderProps {
  data: StripeItem[];
}

const StripeOrder: React.FC<StripeOrderProps> = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return <StripeItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default StripeOrder;
