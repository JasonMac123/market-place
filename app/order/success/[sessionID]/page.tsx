import StripeItems from "@/app/components/stripe/StripeItems";
import ClientContainer from "@/app/components/containers/ClientContainer";
import Button from "@/app/components/input/Button";

import axios from "axios";
import { GrRefresh } from "react-icons/gr";
import createOrder from "@/app/firebase/createOrder";

import { SessionParams, UserParams } from "@/app/types/types";

const OrderPage = async ({
  params,
  searchParams,
}: {
  params: SessionParams;
  searchParams: UserParams;
}) => {
  const result = await axios.get(
    `http://localhost:3000/api/session/${params.sessionID}`
  );

  await createOrder({
    userID: searchParams.userID,
    sessionID: params.sessionID,
  });

  if (!result.data) {
    return (
      <div className="w-9/12 mx-auto flex flex-col justify-center items-center">
        <div className="border-[1px] border-red-300 p-8 space-y-4 rounded-lg">
          <h1>Thanks for your order!</h1>
          <h2>
            There was an error fetching your order details. Try refreshing the
            page!
          </h2>
          <ClientContainer>
            <Button label="Refresh!" Icon={GrRefresh} />
          </ClientContainer>
        </div>
        <div className="flex flex-col"></div>
      </div>
    );
  }
  return (
    <ClientContainer>
      <div className="w-[90%] xl:w-9/12 mx-auto flex flex-col justify-center items-center bg-white p-2 lg:px-16 lg:py-20 rounded-xl">
        <div className="w-full border-[4px] border-green-500 p-8 space-y-2 rounded-lg">
          <h1 className="text-2xl text-green-900">Payment successful</h1>
          <h1 className="text-4xl underline">Thanks for your order!</h1>
          <h2>
            We appreciate your order, we're currently processing it. So hang
            tight and we'll send you confirmation very soon!
          </h2>
          <div className="pt-4">
            <h2 className="text-md font-bold">Order number</h2>
            <h3 className="text-lg hover:underline text-cerulean break-words">
              {params.sessionID}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full items-center mt-16">
          <h2 className="text-3xl w-3/4 text-left">Your Items</h2>
          <StripeItems data={result.data.data} />
        </div>
      </div>
    </ClientContainer>
  );
};

export default OrderPage;
