import getItems from "@/app/firebase/items";
import ItemCard from "./cards/ItemCard";
import { useEffect, useState } from "react";

interface Item {
  category: string;
  description: string;
  image: string;
  label: string;
  maker: string;
  name: string;
  price: number;
  quantity: number;
  region: string;
  id: string;
  rating: number;
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
            image={item.image}
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
