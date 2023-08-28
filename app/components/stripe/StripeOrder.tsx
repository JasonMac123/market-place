"use client";

import { StripeItem } from "@/app/types/types";
import { Timestamp } from "firebase/firestore";

import StripeItemCard from "../cards/StripeItemCard";

interface StripeOrderProps {
  data: StripeItem[];
  timeStamp: Timestamp;
  orderID: string;
}

const StripeOrder: React.FC<StripeOrderProps> = ({
  data,
  timeStamp,
  orderID,
}) => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="w-full h-20 bg-cerulean flex justify-between">
        <div>Order Number - {orderID}</div>
        <div>Ordered on {timeStamp.toDate().toDateString()}</div>
      </div>
      {data.map((item) => {
        return <StripeItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default StripeOrder;
