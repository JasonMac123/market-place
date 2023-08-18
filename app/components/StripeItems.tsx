"use client";

import { StripeItem } from "../types/types";

import StripeItemCard from "./cards/StripeItemCard";

interface StripeItemsProps {
  data: StripeItem[];
}

const StripeItems: React.FC<StripeItemsProps> = ({ data }) => {
  const totalPrice =
    data.reduce((acc, item) => item.amount_subtotal + acc, 0) / 100;
  const totalTax = data.reduce((acc, item) => item.amount_tax + acc, 0) / 100;

  return (
    <>
      <hr className="border-black w-3/4 my-8" />
      {data.map((item) => {
        return <StripeItemCard key={item.id} {...item} />;
      })}
      <div className="flex flex-col w-full justify-center items-center bg-white">
        <h3 className="text-3xl text-center">Pricing summary</h3>
        <h4 className="text-lg">Subtotal: {totalPrice}</h4>
        <h4 className="text-lg">Tax: {totalTax}</h4>
        <h4 className="text-lg">Total Price: {totalPrice + totalTax}</h4>
        <h6>note: tax is calculated as 0.00 due to stripe calculations </h6>
      </div>
    </>
  );
};

export default StripeItems;
