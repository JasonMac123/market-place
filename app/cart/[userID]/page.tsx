import ItemOrderContainer from "@/app/components/containers/ItemOrderContainer";
import getUserCart from "@/app/firebase/getUserCart";
import { UserParams } from "@/app/types/types";

const Page = async ({ params }: { params: UserParams }) => {
  let userCart = await getUserCart(params);

  return (
    <div>
      <ItemOrderContainer userID={params} userCart={userCart} />
    </div>
  );
};

export default Page;
