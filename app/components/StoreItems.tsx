import getItems from "@/app/firebase/items";

const StoreItems = async () => {
  const items = getItems();
  return <div></div>;
};

export default StoreItems;
