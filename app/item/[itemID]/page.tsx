import DataError from "@/app/components/DataError";
import ItemFront from "@/app/components/itemdisplays/ItemFront";
import getSpecificItemByID from "@/app/firebase/getSpecificItemByID";

import Image from "next/image";

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
    <div className="flex w-3/4 mx-auto py-12">
      <Image src={item.image} alt="picture of item" width={600} height={1000} />
      <div>
        <ItemFront
          name={item.name}
          description={item.description}
          region={item.region}
        />
      </div>
    </div>
  );
};

export default ItemPage;
