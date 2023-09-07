"use client";
import { useRouter } from "next/router";
import { v4 } from "uuid";

import firebase_app from "@/app/firebase/config";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { toast } from "react-toastify";

import { OrderObject } from "@/app/types/types";
import StripeOrder from "../stripe/StripeOrder";

interface OrderHistoryContainerProps {
  data: OrderObject[];
  userID: string;
}

const OrderHistoryContainer: React.FC<OrderHistoryContainerProps> = ({
  data,
  userID,
}) => {
  const router = useRouter();

  const auth = getAuth(firebase_app);
  const [user] = useAuthState(auth);

  if (!user || user.uid !== userID) {
    toast.error("You do not have permissions to access this page");
    router.push("/");
    return;
  }

  return (
    <div className="flex flex-col space-y-4 mx-auto">
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
