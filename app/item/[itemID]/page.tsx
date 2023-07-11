import DataError from "@/app/components/DataError";
import ItemFront from "@/app/components/itemdisplays/ItemFront";
import getSpecificItemByID from "@/app/firebase/getSpecificItemByID";

interface itemParams {
  itemID: string;
}

const ItemPage = async ({ params }: { params: itemParams }) => {
  const item = await getSpecificItemByID(params);

  if (!item) {
    return (
      <div>
        <DataError />
      </div>
    );
  }

  return (
    <div>
      <ItemFront
        name={item.name}
        description={item.description}
        region={item.region}
      />
    </div>
  );
};

export default ItemPage;
