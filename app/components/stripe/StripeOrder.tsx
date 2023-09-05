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

  const total = data.reduce((acc, item) => item.amount_total + acc, 0);

  return (
    <div className="w-full mx-auto border-[1px] border-black rounded-xl p-4 lg:p-8">
      <div className="w-full bg-neutral-400 flex lg:flex-row flex-col 2xl:h-20 justify-between space-y-4 lg:space-y-0 lg:items-center p-4 rounded-xl overflow-hidden">
        <div className="flex lg:flex-row flex-col w-full">
          Order Number -
          <div
            className="hover:underline hover:cursor-pointer hover:text-celestial lg:ml-2 ml-0 break-all"
            onClick={() => router.push(`/order/success/${orderID}`)}
          >
            {orderID}
          </div>
        </div>
        <div>Ordered on {timeStamp}</div>
        <div>Order total - ${total}</div>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 w-full h-fit">
        {data.map((item) => {
          return <StripeItemCard key={item.id} {...item} small />;
        })}
        {data.map((item) => {
          return <StripeItemCard key={item.id} {...item} small />;
        })}
      </div>
    </div>
  );
};

export default StripeOrder;
