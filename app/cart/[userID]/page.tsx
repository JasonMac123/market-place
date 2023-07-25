import getUserCart from "@/app/firebase/getUserCart";

import ItemOrderCard from "@/app/components/cards/ItemOrderCard";
import ClientContainer from "@/app/components/containers/ClientContainer";
import Button from "@/app/components/input/Button";

interface UserParams {
  userID: string;
}

const Page = async ({ params }: { params: UserParams }) => {
  const userCart = await getUserCart(params);

  const totalAmount = userCart.reduce(
    (acc, value) => value.orderAmount + acc,
    0
  );

  return (
    <div className="mx-auto my-4 p-4 w-3/4">
      <h1>Cart</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">Image</h2>
        <h2 className="text-3xl">Description</h2>
        <h2 className="text-3xl">Price</h2>
      </div>
      <hr className="border-black w-4/5" />
      <ClientContainer>
        {userCart.map((item) => {
          return <ItemOrderCard {...item} />;
        })}
      </ClientContainer>
      <div className="flex jusitfy-end">
        <div>Your Subtotal: {totalAmount}</div>
        <div>Your tax: {totalAmount * 0.13}</div>
        <div>
          Your Total including tax (GST + HST):
          {totalAmount + totalAmount * 0.13}
        </div>
      </div>
      <Button label="Checkout" onClick={() => {}} />
    </div>
  );
};

export default Page;
