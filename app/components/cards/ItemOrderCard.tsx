"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ItemOrderCardProps {
  itemID: string;
  optionType: Option;
  orderAmount: number;
  image: string;
  itemName: string;
  amount: number;
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
}) => {
  const router = useRouter();

  return (
    <div
      className="flex"
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
        <h3>{orderAmount}</h3>
      </div>
    </div>
  );
};

export default ItemOrderCard;
