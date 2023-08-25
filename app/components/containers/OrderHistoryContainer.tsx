"use client";

import { uuid } from "uuidv4";
import { OrderObject, StripeItem } from "@/app/types/types";
import StripeOrder from "../stripe/StripeOrder";

interface OrderHistoryContainerProps {
  data: OrderObject[];
}

const OrderHistoryContainer: React.FC<OrderHistoryContainerProps> = ({
  data,
}) => {
  return (
    <div className="flex flex-col space-y-4 mx-auto">
      {data.map((order) => {
        return (
          <StripeOrder
            key={uuid()}
            data={order.data}
            timeStamp={order.orderTimestamp}
          />
        );
      })}
    </div>
  );
};

export default OrderHistoryContainer;
