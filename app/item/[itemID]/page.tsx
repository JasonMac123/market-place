import DataError from "@/app/components/DataError";
import ItemFront from "@/app/components/itemdisplays/ItemFront";
import ItemInputs from "@/app/components/itemdisplays/ItemInputs";

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
    <div className="flex w-3/4 mx-auto py-12 gap-8">
      <Image src={item.image} alt="picture of item" width={600} height={1000} />
      <div className="flex flex-col gap-4 bg-white border-[1px] rounded-lg">
        <ItemFront
          name={item.name}
          description={item.description}
          region={item.region}
          rating={item.rating}
          maker={item.maker}
        />
        <ItemInputs
          quantity={item.quantity}
          price={item.price}
          options={item.options}
          id={params.itemID}
        />
      </div>
    </div>
  );
};

export default ItemPage;
