import getItems from "../firebase/item/getItems";

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
    <div className="flex flex-col justify-center md:flex-row flex-wrap gap-4 lg:gap-8 w-4/5 mx-auto h-fit bg-white px-2 py-8 lg:px-4 xl:p-8 rounded-md">
      {items.map((item: Item) => {
        return <ItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default StoreItems;
