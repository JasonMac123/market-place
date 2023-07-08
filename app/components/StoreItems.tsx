import getItems from "@/app/firebase/items";
import ItemCard from "./cards/ItemCard";
import { useEffect, useState } from "react";

interface Item {
  [name: string]: string | number;
}

interface StoreItemsProps {
  searchParams: Query;
}

interface Query {
  category: string;
}

const StoreItems: React.FC<StoreItemsProps> = async ({ searchParams }) => {
  const items = await getItems(searchParams);

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
