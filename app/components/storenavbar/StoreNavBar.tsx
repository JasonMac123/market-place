"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";

const StoreNavBar = () => {
  const router = useRouter();

  return (
    <div className="flex w-3/4 h-20 mx-auto items-center justify-between bg-celestial px-12 rounded-lg">
      <div className="flex gap-4 w-1/2 h-full items-center">
        <div
          className="hover:underline"
          onClick={() => router.push("/?category=food")}
        >
          Food
        </div>
        <div
          className="hover:underline"
          onClick={() => router.push("/?category=clothing")}
        >
          Clothing
        </div>
        <div
          className="hover:underline"
          onClick={() => router.push("/?category=stationary")}
        >
          Stationary
        </div>
        <div
          className="hover:underline"
          onClick={() => router.push("/?category=kitchen")}
        >
          Kitchenware
        </div>
      </div>
      <div
        className="flex space-x-4 items-center"
        onClick={() => router.push("/cart")}
      >
        <AiOutlineShoppingCart size={20} />
        Number
      </div>
    </div>
  );
};

export default StoreNavBar;
