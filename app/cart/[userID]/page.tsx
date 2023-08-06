import ClientContainer from "@/app/components/containers/ClientContainer";
import ItemOrderContainer from "@/app/components/containers/ItemOrderContainer";
import getUserCart from "@/app/firebase/getUserCart";
import { UserParams } from "@/app/types/types";

const Page = async ({ params }: { params: UserParams }) => {
  let userCart = await getUserCart(params);

  return (
    <div>
      <ClientContainer>
        <ItemOrderContainer userID={params} userCart={userCart} />
      </ClientContainer>
    </div>
  );
};

export default Page;
