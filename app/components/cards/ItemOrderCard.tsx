"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FcCancel } from "react-icons/fc";

interface ItemOrderCardProps {
  itemID: string;
  optionType: Option;
  orderAmount: number;
  image: string;
  itemName: string;
  amount: number;
  removeItem: (name: string, optionType: string) => void;
}

interface Option {
  label: string;
  value: string;
}

const ItemOrderCard: React.FC<ItemOrderCardProps> = ({
  itemID,
  optionType,
  orderAmount,
  image,
  amount,
  itemName,
  removeItem,
}) => {
  const router = useRouter();

  return (
    <>
      <div
        className="flex my-4 p-4 mx-auto"
        onClick={() => {
          router.push(`/item/${itemID}`);
        }}
      >
        <Image src={image} alt="picture of product" width={200} height={200} />
        <div>
          <h3>{itemName}</h3>
          <h3>{optionType.label}</h3>
          <h3>{amount}</h3>
        </div>
        <div>
          <h3 className="text-2xl">{orderAmount}</h3>
        </div>
        <FcCancel
          size={20}
          onClick={() => removeItem(itemID, optionType.label)}
        />
      </div>
      <hr className="border-black w-4/5" />
    </>
  );
};

export default ItemOrderCard;
