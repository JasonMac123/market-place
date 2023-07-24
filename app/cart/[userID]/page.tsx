import getUserCart from "@/app/firebase/getUserCart";

import ItemOrderCard from "@/app/components/cards/ItemOrderCard";

interface UserParams {
  userID: string;
}

const Page = async ({ params }: { params: UserParams }) => {
  const userCart = await getUserCart(params);

  const totalAmount = userCart.reduce((acc, value) => value.amount + acc, 0);

  return (
    <div className="mx-20 my-4 p-4">
      <h1>Cart</h1>
      <div className="flex">
        <h2>Image</h2>
        <h2>Description</h2>
        <h2>Price</h2>
      </div>
      {userCart.map((item) => {
        return <ItemOrderCard {...item} />;
      })}
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
