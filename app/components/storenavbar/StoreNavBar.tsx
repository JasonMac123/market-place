"use client";

import { useSearchParams } from "next/navigation";
import { LuUtensilsCrossed } from "react-icons/lu";
import { FaTshirt, FaPenFancy } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";

import StoreCategory from "./StoreCategory";
import StoreCart from "./StoreCart";

const categories = [
  { label: "All-items" },
  { label: "Food", Icon: LuUtensilsCrossed },
  { label: "Clothing", Icon: FaTshirt },
  { label: "Stationary", Icon: FaPenFancy },
  { label: "Kitchen", Icon: MdKitchen },
];

const StoreNavBar = () => {
  const params = useSearchParams();
  const category = params?.get("category");

  return (
    <div className="flex flex-wrap w-full lg:w-4/5 mx-auto items-center justify-center lg:justify-between bg-alice lg:bg-celestial px-12 py-4 gap-4 rounded-lg my-12">
      {categories.map((item) => {
        return (
          <StoreCategory
            key={item.label}
            label={item.label}
            selected={category === item.label}
            Icon={item.Icon}
          />
        );
      })}
      <StoreCart />
    </div>
  );
};

export default StoreNavBar;
