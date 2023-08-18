"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FcCancel } from "react-icons/fc";

import { OptionSelect } from "@/app/types/types";

interface ItemOrderCardProps {
  itemID: string;
  optionType: OptionSelect;
  orderAmount: number;
  image: string;
  itemName: string;
  orderQuantity: number;
  removeItem: (name: string, optionType: string) => void;
}

const ItemOrderCard: React.FC<ItemOrderCardProps> = ({
  itemID,
  optionType,
  orderAmount,
  image,
  orderQuantity,
  itemName,
  removeItem,
}) => {
  const router = useRouter();

  return (
    <>
      <div
        className="flex my-4 p-4 mx-auto justify-between"
        onClick={() => {
          router.push(`/item/${itemID}`);
        }}
      >
        <Image
          src="https://cb.scene7.com/is/image/Crate/TondoChopsticksSSS22/$web_pdp_main_carousel_med$/211116170028/tondo-chopsticks.jpg"
          alt="picture of product"
          width={200}
          height={200}
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-lg">Name: {itemName},</h3>
          <h3 className="text-lg">Item Option: {optionType.label}</h3>
          <h3 className="text-lg">Quantity: {orderQuantity}</h3>
        </div>
        <div className="flex gap-4 items-center">
          <h3 className="text-2xl">${orderAmount}</h3>
          <FcCancel
            size={40}
            className="hover:cursor-pointer"
            onClick={() => removeItem(itemID, optionType.label)}
          />
        </div>
      </div>
      <hr className="border-black w-full m-4" />
    </>
  );
};

export default ItemOrderCard;
