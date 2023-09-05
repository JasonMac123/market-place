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

  const total = data.reduce((acc, item) => item.amount_total / 100 + acc, 0);

  return (
    <div className="w-full mx-auto border-[1px] border-black rounded-xl p-4 lg:p-8">
      <div className="w-full bg-neutral-300 flex flex-col 2xl:h-28 justify-between space-y-4 lg:space-y-0 lg:items-center p-4 rounded-xl overflow-hidden">
        <div className="w-full flex space-x-4">
          <div className="flex lg:flex-row flex-col w-full space-x-4 text-sm">
            Order Number -
            <div
              className="hover:underline hover:cursor-pointer hover:text-celestial lg:ml-2 ml-0 break-all"
              onClick={() => router.push(`/order/success/${orderID}`)}
            >
              {orderID}
            </div>
          </div>
          <div>
            <h2 className="lg:whitespace-nowrap text-sm">
              Ordered on {timeStamp}
            </h2>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-right text-sm">Order total - $ {total}</h2>
        </div>
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
