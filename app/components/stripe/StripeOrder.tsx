"use client";

import { StripeItem } from "@/app/types/types";
import { Timestamp } from "firebase/firestore";

import StripeItemCard from "../cards/StripeItemCard";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <div className="w-3/4 mx-auto">
      <div className="w-full h-20 bg-cerulean flex justify-between">
        <div>
          Order Number -{" "}
          <div
            className="hover:underline hover:text-celestial"
            onClick={() => router.push(`/order/success/${orderID}`)}
          >
            {orderID}
          </div>
        </div>
        <div>Ordered on {timeStamp.toDate().toDateString()}</div>
      </div>
      {data.map((item) => {
        return <StripeItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default StripeOrder;
