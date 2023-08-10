import axios from "axios";
import { useRouter } from "next/router";

const OrderPage = async () => {
  const {
    query: { sessionID },
  } = useRouter();

  const data = await axios.get(`/api/session/${sessionID}`);

  return (
    <div className="w-9/11 mx-auto flex justify-center items-center">
      <div className="border-[1px] border-green-300">
        <h1>Thanks for your order!</h1>
        <h2>Your order number is {sessionID}</h2>
      </div>
    </div>
  );
};

export default OrderPage;
