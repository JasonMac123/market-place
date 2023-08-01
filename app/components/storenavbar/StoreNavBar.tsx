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
  { label: "Kitchen-Ware", Icon: MdKitchen },
];

const StoreNavBar = () => {
  const params = useSearchParams();
  const category = params?.get("category");

  return (
    <div className="flex w-4/5 h-20 mx-auto items-center justify-between bg-celestial px-12 rounded-lg my-12">
      <div className="flex gap-4 w-1/2 h-full items-center">
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
      </div>
      <StoreCart />
    </div>
  );
};

export default StoreNavBar;
