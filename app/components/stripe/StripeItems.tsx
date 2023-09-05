"use client";

import { StripeItem } from "../../types/types";

import StripeItemCard from "../cards/StripeItemCard";

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
      <hr className="border-black w-3/4 my-8" />
      <div className="flex flex-col w-full px-4">
        <h3 className="text-3xl text-center mb-4">Pricing summary</h3>
        <div className="flex space-x-2 justify-end md:mr-4 lg-mr-8 xl:mr-16 2xl:mr-24">
          <div className="flex flex-col items-end">
            <h4 className="text-lg">Subtotal:</h4>
            <h4 className="text-lg">Tax:</h4>
            <h4 className="text-lg">Total Price:</h4>
          </div>
          <div className="flex flex-col items-end">
            <h4 className="text-lg">${totalPrice}</h4>
            <h4 className="text-lg">${totalTax}</h4>
            <hr className="border-black w-full" />
            <h4 className="text-lg">${totalPrice + totalTax}</h4>
          </div>
        </div>
        <h6 className="text-right md:mr-4 lg-mr-8 xl:mr-16 2xl:mr-24 mb-8">
          Note: tax is calculated as 0.00 due to stripe calculations{" "}
        </h6>
      </div>
    </>
  );
};

export default StripeItems;
