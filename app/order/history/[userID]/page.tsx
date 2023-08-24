import getOrdersByUserID from "@/app/firebase/getOrdersByUserID";
import { UserParams } from "@/app/types/types";
import axios from "axios";

const Page = async ({ params }: { params: UserParams }) => {
  const result = await axios.get(
    `http://localhost:3000/api/multiple-sessions/${params.userID}`
  );

  return <div></div>;
};

export default Page;
