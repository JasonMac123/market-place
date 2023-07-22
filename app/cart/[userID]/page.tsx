import getUserCart from "@/app/firebase/getUserCart";

interface UserParams {
  userID: string;
}

const Page = async ({ params }: { params: UserParams }) => {
  const userCart = await getUserCart(params);

  return <div></div>;
};

export default Page;
