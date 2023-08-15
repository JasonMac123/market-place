"use client";

import Image from "next/image";

import { PriceObject } from "@/app/types/types";
import convertSIDToImage from "@/app/util/convertSIDToImage";

interface StripeItemCardProps {
  id: string;
  object: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  price: PriceObject;
  quantity: number;
}

const StripeItemCard: React.FC<StripeItemCardProps> = ({
  amount_total,
  description,
  quantity,
  price,
}) => {
  const image = convertSIDToImage(price.id);
  return (
    <div className="flex justify-between items-center border-[1px] p-8 rounded-lg">
      <div>
        <Image src={image} width={200} height={200} alt="Item Order Picture" />
      </div>
      <div className="flex flex-col p-4">
        <div>Price: {amount_total / 100}</div>
        <div>Name: {description}</div>
        <div>Quantity: {quantity}</div>
      </div>
    </div>
  );
};

export default StripeItemCard;
