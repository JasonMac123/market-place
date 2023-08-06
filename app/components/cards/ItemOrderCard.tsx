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
        <Image src={image} alt="picture of product" width={200} height={200} />
        <div className="flex flex-col items-center">
          <h3>{itemName},</h3>
          <h3>{optionType.label}</h3>
          <div>
            <h3>{orderQuantity}</h3>
          </div>
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
