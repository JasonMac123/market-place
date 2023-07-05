"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";

const StoreNavBar = () => {
  return (
    <div className="flex">
      <div className="flex">
        <div>Food</div>
        <div>Clothing</div>
        <div>Stationary</div>
        <div>Kitchenware</div>
      </div>
      <div className="flex">
        <AiOutlineShoppingCart size={20} />
        Number
      </div>
    </div>
  );
};

export default StoreNavBar;
