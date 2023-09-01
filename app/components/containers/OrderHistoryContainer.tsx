"use client";

import { v4 } from "uuid";
import { OrderObject } from "@/app/types/types";
import StripeOrder from "../stripe/StripeOrder";

interface OrderHistoryContainerProps {
  data: OrderObject[];
}

const OrderHistoryContainer: React.FC<OrderHistoryContainerProps> = ({
  data,
}) => {
  return (
    <div className="flex flex-col space-y-4 mx-auto bg-white w-[90%] rounded-xl p-8">
      {data.map((order) => {
        return (
          <StripeOrder
            key={v4()}
            data={order.data}
            timeStamp={order.orderTimestamp}
            orderID={order.orderID}
          />
        );
      })}
    </div>
  );
};

export default OrderHistoryContainer;
