"use client";

import getItems from "@/app/firebase/items";
import ItemCard from "./cards/ItemCard";
import { useSearchParams } from "next/navigation";

interface Item {
  [name: string]: string | number;
}

const StoreItems = async () => {
  const searchParams = useSearchParams();
  const items = await getItems();
  return (
    <div>
      {items.map((item: Item) => {
        return (
          <ItemCard
            key={item.id}
            id={item.id}
            label={item.name}
            description={item.description}
            image={item.image}
            quantity={item.quantity}
            region={item.region}
            maker={item.maker}
            rating={item.rating}
            price={item.price}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default StoreItems;
