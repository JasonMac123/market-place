"use client";

import Button from "./Input/Button";
import { useRouter } from "next/navigation";
import { AiOutlineArrowRight } from "react-icons/ai";

const NoItems = () => {
  const router = useRouter();

  return (
    <div className="h-[80vh] flex flex-col gap-2 justify-center items-center ml-20">
      <h3>No Items found</h3>
      <Button
        label="Go Back to HomePage"
        Icon={AiOutlineArrowRight}
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default NoItems;
