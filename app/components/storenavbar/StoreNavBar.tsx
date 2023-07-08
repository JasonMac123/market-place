"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";
import { LuUtensilsCrossed } from "react-icons/lu";
import { FaTshirt, FaPenFancy } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import StoreCategory from "./StoreCategory";

const categories = [
  { label: "All-items" },
  { label: "Food", Icon: LuUtensilsCrossed },
  { label: "Clothing", Icon: FaTshirt },
  { label: "Stationary", Icon: FaPenFancy },
  { label: "Kitchen-Ware", Icon: MdKitchen },
];

const StoreNavBar = () => {
  const router = useRouter();
  const params = useSearchParams();
  const category = params?.get("category");

  return (
    <div className="flex w-3/4 h-20 mx-auto items-center justify-between bg-celestial px-12 rounded-lg">
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
