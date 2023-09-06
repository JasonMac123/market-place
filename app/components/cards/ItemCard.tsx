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
    <div className="md:w-[80%] lg:w-[45%] xl:w-1/3 2xl:w-1/4 w-[90%] h-[80vh] lg:h-[70vh] space-y-4">
      <div className="w-full h-full flex flex-col justify-between items-center bg-neutral-200 hover:bg-neutral-300 cursor-pointer rounded-lg">
        <div
          className="w-full h-full flex flex-col p-4 items-center"
          onClick={() => {
            router.push(`/item/${id}`);
          }}
        >
          <Image
            src={
              "https://cb.scene7.com/is/image/Crate/TondoChopsticksSSS22/$web_pdp_main_carousel_med$/211116170028/tondo-chopsticks.jpg"
            }
            alt="picture of item"
            width={400}
            height={400}
            className="xl:mt-4"
          />
          <h3 className="text-lg mt-4 text-left w-full ml-2">{label}</h3>
          <h4 className="text-mg text-left w-full ml-2 mt-4">
            {shortDescription}
          </h4>
        </div>
        <div className="flex w-full justify-end mr-4 mb-4">
          <h4 className="text-3xl text-green-600">$</h4>
          <h4 className="text-3xl text-green-600">{price}</h4>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
