import StripeItems from "@/app/components/StripeItems";
import ClientContainer from "@/app/components/containers/ClientContainer";
import Button from "@/app/components/input/Button";

import { GrRefresh } from "react-icons/gr";

import axios from "axios";
import { useRouter } from "next/router";

interface sessionParams {
  sessionID: string;
}

const OrderPage = async ({ params }: { params: sessionParams }) => {
  const result = await axios.get(
    `http://localhost:3000/api/session/${params.sessionID}`
  );

  const router = useRouter();

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
            <Button
              label="Refresh!"
              Icon={GrRefresh}
              onClick={() => router.reload()}
            />
          </ClientContainer>
        </div>
        <div className="flex flex-col"></div>
      </div>
    );
  }
  return (
    <ClientContainer>
      <div className="w-9/12 mx-auto flex flex-col justify-center items-center">
        <div className="w-full border-[4px] border-green-300 p-8 space-y-4 rounded-lg">
          <h1 className="text-5xl underline">Thanks for your order!</h1>
          <h2 className="text-md">
            Your order number is{" "}
            <b className="text-lg hover:underline">{params.sessionID}</b>
          </h2>
        </div>
        <hr className="border-black w-3/4 my-8" />
        <div className="flex flex-col">
          <h2 className="text-3xl w-full">Your Items</h2>
          <StripeItems data={result.data.data} />
        </div>
      </div>
    </ClientContainer>
  );
};

export default OrderPage;
