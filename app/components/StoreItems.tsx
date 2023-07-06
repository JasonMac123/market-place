import getItems from "@/app/firebase/items";
import ItemCard from "./cards/ItemCard";

interface Item {
  [name: string]: string;
}

const StoreItems = async () => {
  const items = await getItems();
  return (
    <div>
      {items.map((item: Item) => {
        <ItemCard id={item.id} label={item.name} />;
      })}
    </div>
  );
};

export default StoreItems;
