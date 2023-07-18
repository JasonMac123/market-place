import DataError from "@/app/components/DataError";
import ClientContainer from "@/app/components/containers/ClientContainer";
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
        <ClientContainer>
          <DataError />
        </ClientContainer>
      </div>
    );
  }

  return (
    <div className="flex w-3/4 mx-auto py-12 gap-8">
      <ClientContainer>
        <Image
          src={
            "https://cb.scene7.com/is/image/Crate/TondoChopsticksSSS22/$web_pdp_main_carousel_med$/211116170028/tondo-chopsticks.jpg"
          }
          alt="picture of item"
          width={600}
          height={1000}
        />
        <div className="flex flex-col bg-white border-[1px] rounded-lg">
          <ItemFront
            name={item.name}
            description={item.description}
            region={item.region}
            maker={item.maker}
          />
          <ItemInputs
            quantity={item.quantity}
            price={item.price}
            options={item.options}
            id={params.itemID}
          />
        </div>
      </ClientContainer>
    </div>
  );
};

export default ItemPage;
