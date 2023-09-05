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
      </div>
      {data.map((item) => {
        return <StripeItemCard key={item.id} {...item} small />;
      })}
      <div className="w-full flex bg-green-400 lg:glex-row flex-col 2xl:h-20 justify-end space-x-2 lg:space-y-0 lg:items-center p-4 rounded-xl overflow-hidden"></div>
    </div>
  );
};

export default StripeOrder;
