import getItems from "@/app/firebase/items";
import ItemCard from "./cards/ItemCard";

interface Item {
  [name: string]: string | number;
}

const StoreItems = async () => {
  const items = await getItems();
  return (
    <div>
      {items.map((item: Item) => {
        <ItemCard
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
        />;
      })}
    </div>
  );
};

export default StoreItems;
