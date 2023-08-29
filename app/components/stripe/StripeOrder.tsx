"use client";

import { StripeItem } from "@/app/types/types";

import StripeItemCard from "../cards/StripeItemCard";
import { useRouter } from "next/navigation";

interface StripeOrderProps {
  data: StripeItem[];
  timeStamp: string;
  orderID: string;
}

const StripeOrder: React.FC<StripeOrderProps> = ({
  data,
  timeStamp,
  orderID,
}) => {
  const router = useRouter();
  return (
    <div className="w-3/4 mx-auto border-[1px] border-black rounded-xl p-4">
      <div className="w-full h-20 bg-gradient-to-b from-neutral-400 to-neutral-300 flex justify-between items-center p-4 rounded-xl overflow-hidden">
        <div className="flex">
          Order Number -
          <div
            className="hover:underline hover:text-celestial ml-2"
            onClick={() => router.push(`/order/success/${orderID}`)}
          >
            {orderID}
          </div>
        </div>
        <div>Ordered on {timeStamp}</div>
      </div>
      {data.map((item) => {
        return <StripeItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default StripeOrder;
