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
    <div className={`${small ? "w-full lg:w-3/4 xl:w-1/2" : "w-3/4"}`}>
      <div className="w-full lg:flex-row flex-col flex items-center lg:px-4 lg:py-2 mt-2 lg:mt-0 rounded-md">
        <div className="w-full h-full p-0 lg:w-1/3 lg:h-1/3 relative border-[1px] rounded-lg overflow-hidden max-w-md max-h-[28rem]">
          <Image
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto min-w-[200px] min-h-[200px]"
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
      {small && <hr className="border-black w-full my-8" />}
    </div>
  );
};

export default StripeItemCard;
