"use client";

import { uuid } from "uuidv4";
import { StripeItem } from "@/app/types/types";
import StripeOrder from "../stripe/StripeOrder";

interface OrderHistoryContainerProps {
  data: StripeItem[][];
}

const OrderHistoryContainer: React.FC<OrderHistoryContainerProps> = ({
  data,
}) => {
  return (
    <div className="flex flex-col space-y-4">
      {data.map((order) => {
        return <StripeOrder key={uuid()} data={order} />;
      })}
    </div>
  );
};

export default OrderHistoryContainer;
