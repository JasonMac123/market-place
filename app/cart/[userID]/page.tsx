import getUserCart from "@/app/firebase/getUserCart";

interface UserParams {
  userID: string;
}

const Page = async ({ params }: { params: UserParams }) => {
  const userCart = await getUserCart(params);

  return (
    <div>
      {userCart.map((item) => {
        return <ItemOrderCard {...item} />;
      })}
    </div>
  );
};

export default Page;
