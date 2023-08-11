import axios from "axios";

interface sessionParams {
  sessionID: string;
}

const OrderPage = async ({ params }: { params: sessionParams }) => {
  const result = await axios.get(
    `http://localhost:3000/api/session/${params.sessionID}`
  );

  if (!result.data) {
    return (
      <div className="w-9/11 mx-auto flex justify-center items-center">
        <div className="border-[1px] border-green-300">
          <h1>Thanks for your order!</h1>
          <h2>Your order number is {params.sessionID}</h2>
        </div>
        <div className="flex flex-col"></div>
      </div>
    );
  }
  return (
    <div className="w-9/11 mx-auto flex justify-center items-center">
      <div className="border-[1px] border-green-300">
        <h1>Thanks for your order!</h1>
        <h2>Your order number is {params.sessionID}</h2>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
};

export default OrderPage;
