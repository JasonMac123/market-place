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
      <div>Price: {amount_total / 100}</div>
      <div>{description}</div>
      <div>{quantity}</div>
    </div>
  );
};

export default StripeItemCard;
