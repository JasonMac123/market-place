import getUserCart from "@/app/firebase/getUserCart";

import ItemOrderCard from "@/app/components/cards/ItemOrderCard";
import ClientContainer from "@/app/components/containers/ClientContainer";

interface UserParams {
  userID: string;
}

const Page = async ({ params }: { params: UserParams }) => {
  const userCart = await getUserCart(params);

  const totalAmount = userCart.reduce((acc, value) => value.amount + acc, 0);

  return (
    <div className="mx-auto my-4 p-4 w-3/4">
      <h1>Cart</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">Image</h2>
        <h2 className="text-3xl">Description</h2>
        <h2 className="text-3xl">Price</h2>
      </div>
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
    </div>
  );
};

export default Page;
