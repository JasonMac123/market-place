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
      {data.map((item) => {
        return <StripeItemCard key={item.id} {...item} />;
      })}
      <div className="flex flex-col w-full justify-center items-center">
        <h3>Pricing summary</h3>
        <div></div>
        <h4>Subtotal: {totalPrice}</h4>
        <h4>Tax: {totalTax}</h4>
        <h4>Total Price: {totalPrice + totalTax}</h4>
      </div>
    </>
  );
};

export default StripeItems;
