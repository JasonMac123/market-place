"use client";

import Button from "./input/Button";

import { useRouter } from "next/navigation";
import { AiOutlineArrowRight } from "react-icons/ai";

const NoItems = () => {
  const router = useRouter();

  return (
    <div className="h-[40vh] w-11/12 bg-white rounded-lg flex flex-col gap-2 justify-center items-center mx-auto">
      <h3>No Items found</h3>
      <div className="w-1/3 min-w-[300px] max-w-[400px] mx-auto">
        <Button
          label="Go Back to HomePage"
          Icon={AiOutlineArrowRight}
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
};

export default NoItems;
