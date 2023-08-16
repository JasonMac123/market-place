import ClientContainer from "@/app/components/containers/ClientContainer";
import ItemOrderContainer from "@/app/components/containers/ItemOrderContainer";
import getUserCart from "@/app/firebase/getUserCart";

import { UserParams, CartParams } from "@/app/types/types";

const Page = async ({
  params,
  searchParams,
}: {
  params: UserParams;
  searchParams: CartParams;
}) => {
  let userCart = await getUserCart(params);

  return (
    <div>
      <ClientContainer>
        <ItemOrderContainer
          userID={params}
          userCart={userCart}
          searchParams={searchParams}
        />
      </ClientContainer>
    </div>
  );
};

export default Page;
