"use client";

import { useRouter } from "next/navigation";
import { BsArrowReturnLeft } from "react-icons/bs";

const ItemReturn = () => {
  const router = useRouter();

  return (
    <div
      className="relative group bg-celestial rounded-xl text-white w-20 h-20 lg:flex items-center justify-center hover:cursor-pointer hover:bg-cerulean hidden"
      onClick={() => {
        router.push("/");
      }}
    >
      <BsArrowReturnLeft size={40} />
      <div className="absolute border-[1px] w-auto top-[5.5rem] bg-white text-black rounded-lg origin-top-left scale-0 transition-all duration-100 p-4 text-xl group-hover:scale-100">
        Return
      </div>
    </div>
  );
};

export default ItemReturn;
