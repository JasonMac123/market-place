import ItemFront from "@/app/components/itemdisplays/ItemFront";
import getSpecificItemByID from "@/app/firebase/getSpecificItemByID";

interface itemParams {
  itemID: string;
}

const ItemPage = async ({ params }: { params: itemParams }) => {
  const item = await getSpecificItemByID(params);
  return (
    <div>
      <ItemFront />
    </div>
  );
};

export default ItemPage;
