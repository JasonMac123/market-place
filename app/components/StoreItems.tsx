import getItems from "@/app/firebase/items";

const StoreItems = async () => {
  const items = await getItems();
  return <div></div>;
};

export default StoreItems;
