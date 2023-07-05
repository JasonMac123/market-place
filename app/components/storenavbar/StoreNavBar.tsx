"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";

const StoreNavBar = () => {
  const router = useRouter();

  return (
    <div className="flex">
      <div className="flex">
        <div>Food</div>
        <div>Clothing</div>
        <div>Stationary</div>
        <div>Kitchenware</div>
      </div>
      <div className="flex" onClick={() => router.push("/cart")}>
        <AiOutlineShoppingCart size={20} />
        Number
      </div>
    </div>
  );
};

export default StoreNavBar;
