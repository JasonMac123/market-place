import DataError from "@/app/components/DataError";
import ClientContainer from "@/app/components/containers/ClientContainer";
import ItemFront from "@/app/components/itemdisplays/ItemFront";
import ItemInputs from "@/app/components/itemdisplays/ItemInputs";
import ItemReturn from "@/app/components/itemdisplays/ItemReturn";

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
    <ClientContainer>
      <div className="relative flex lg:flex-row flex-col w-4/5 mx-auto py-12 gap-8 bg-white p-8 rounded-lg">
        <div className="flex flex-col xl:flex-row space-y-4 xl:space-x-4 ">
          <ItemReturn />
          <div className="flex items-center justify-center w-[70%] mx-auto lg:w-auto h-1/3 lg:h-auto xl:max-w-lg xl:max-h-[32rem]">
            <Image
              src={
                "https://cb.scene7.com/is/image/Crate/TondoChopsticksSSS22/$web_pdp_main_carousel_med$/211116170028/tondo-chopsticks.jpg"
              }
              alt="picture of item"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 w-full bg-white md:border-[1px] rounded-lg space-y-8 pb-8">
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
            imageSrc={item.image}
            itemName={item.name}
          />
        </div>
      </div>
    </ClientContainer>
  );
};

export default ItemPage;
