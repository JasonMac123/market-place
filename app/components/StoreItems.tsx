import getItems from "@/app/firebase/getItems";
import ItemCard from "./cards/ItemCard";
import NoItems from "./NoItems";

interface Item {
  options: [];
  category: string;
  description: string;
  image: string;
  label: string;
  maker: string;
  name: string;
  price: number;
  quantity: ItemQuantity;
  region: string;
  id: string;
  shortDescription: string;
}

interface ItemQuantity {
  [key: string]: number;
}

interface StoreItemsProps {
  searchParams: Query;
}

interface Query {
  category: string;
}

const StoreItems: React.FC<StoreItemsProps> = async ({ searchParams }) => {
  const items = await getItems(searchParams);

  if (items.length === 0) {
    return (
      <div>
        <NoItems />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-16 w-3/4 mx-auto h-full">
      {items.map((item: Item) => {
        return <ItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default StoreItems;
