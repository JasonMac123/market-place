import getUserCart from "@/app/firebase/getUserCart";

import ItemOrderCard from "@/app/components/cards/ItemOrderCard";

interface UserParams {
  userID: string;
}

const Page = async ({ params }: { params: UserParams }) => {
  const userCart = await getUserCart(params);

  return (
    <div className="mx-20 my-4 p-4">
      <h1>Cart</h1>
      {userCart.map((item) => {
        return <ItemOrderCard {...item} />;
      })}
    </div>
  );
};

export default Page;
