import axios from "axios";

import { UserParams } from "@/app/types/types";

import ClientContainer from "@/app/components/containers/ClientContainer";
import OrderHistoryContainer from "@/app/components/containers/OrderHistoryContainer";

const Page = async ({ params }: { params: UserParams }) => {
  const result = await axios.get(
    `http://localhost:3000/api/multiple-sessions/${params.userID}`
  );

  return (
    <div>
      <ClientContainer>
        <OrderHistoryContainer data={result.data} />
      </ClientContainer>
    </div>
  );
};

export default Page;
