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
  small?: Boolean;
}

const StripeItemCard: React.FC<StripeItemCardProps> = ({
  amount_total,
  description,
  quantity,
  price,
  small,
}) => {
  const image = convertSIDToImage(price.id);

  return (
    <div className={`${small ? "w-full" : "w-3/4"}`}>
      <div className="w-full flex justify px-16 py-2 rounded-md">
        <div className="w-1/3 h-1/3 relative border-[1px] rounded-lg overflow-hidden">
          <Image
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto min-h-[100px] min-w-[100px]"
            alt="Item Order Picture"
          />
        </div>
        <div className="flex flex-col justify-between p-8 space-y-4 rounded-md">
          <div className="text-4xl">{description}</div>
          <div className="flex justify-between items-center space-x-8">
            <div className="border-r-[1px] border-black pr-8">
              Price: {amount_total / 100}
            </div>
            <div>Quantity: {quantity}</div>
          </div>
        </div>
      </div>
      {small && <hr className="border-black w-3/4 my-8 mx-auto" />}
    </div>
  );
};

export default StripeItemCard;
