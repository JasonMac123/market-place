"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ItemCardProps {
  id: string;
  label: string;
  image: string;
  region: string;
  maker: string;
  price: number;
  name: string;
  shortDescription: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  label,
  image,
  price,
  shortDescription,
}) => {
  const router = useRouter();

  return (
    <div className="sm:w-[80%] md:w-[30%] lg:w-[45%] xl:w-[30%] 2xl:w-[23%] w-[90%] h-fit">
      <div className="w-full h-max flex flex-col justify-between items-start bg-neutral-200 hover:bg-neutral-300 cursor-pointer rounded-lg">
        <div
          className="w-full h-full flex flex-col p-4 items-start"
          onClick={() => {
            router.push(`/item/${id}`);
          }}
        >
          <div className="w-full h-full p-0 relative border-[1px] max-w-md max-h-[28rem]">
            <Image
              src={
                "https://cb.scene7.com/is/image/Crate/TondoChopsticksSSS22/$web_pdp_main_carousel_med$/211116170028/tondo-chopsticks.jpg"
              }
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full min-w-[150px] min-h-[150x]"
              alt="Item Order Picture"
            />
          </div>
          <h3 className="text-lg mt-4 text-left w-full ml-2">{label}</h3>
          <h4 className="text-sm text-left w-full ml-2 mt-4">
            {shortDescription}
          </h4>
        </div>
        <div className="flex w-full justify-end items-center mb-4">
          <h4 className="text-3xl text-green-600">$</h4>
          <h4 className="text-3xl text-green-600 mr-4">{price}</h4>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
