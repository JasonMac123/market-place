"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";

const StoreNavBar = () => {
  const router = useRouter();

  return (
    <div className="flex w-3/4 h-20 mx-auto items-center justify-between bg-celestial px-12 rounded-lg">
      <div className="flex gap-4 w-1/2 h-full items-center">
        <div
          className=" text-alice text-lg hover:bg-cerulean h-3/4 flex items-center px-4"
          onClick={() => router.push("/?category=food")}
        >
          Food
        </div>
        <div
          className=" text-alice text-lg hover:bg-cerulean h-3/4 flex items-center px-4"
          onClick={() => router.push("/?category=clothing")}
        >
          Clothing
        </div>
        <div
          className=" text-alice text-lg hover:bg-cerulean h-3/4 flex items-center px-4"
          onClick={() => router.push("/?category=stationary")}
        >
          Stationary
        </div>
        <div
          className=" text-alice text-lg hover:bg-cerulean h-3/4 flex items-center px-4"
          onClick={() => router.push("/?category=kitchen")}
        >
          Kitchenware
        </div>
      </div>
      <div
        className="flex items-center text-alice gap-4 hover:bg-cerulean h-3/4 px-4"
        onClick={() => router.push("/cart")}
      >
        Number
        <AiOutlineShoppingCart size={20} />
      </div>
    </div>
  );
};

export default StoreNavBar;
