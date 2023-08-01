"use client";
import { useState } from "react";

import { Item, UserParams } from "@/app/types/types";

import removeItemFromCart from "@/app/firebase/removeItemFromCart";

import { toast } from "react-toastify";

import ClientContainer from "./ClientContainer";
import ItemOrderCard from "../cards/ItemOrderCard";
import Button from "../input/Button";

interface ItemOrderContainerProps {
  userID: UserParams;
  userCart: Item[];
}

const ItemOrderContainer: React.FC<ItemOrderContainerProps> = ({
  userCart,
  userID,
}) => {
  const [cart, setCart] = useState(userCart);

  const removeItem = async (name: string, label: string) => {
    const result = await removeItemFromCart({
      userParams: userID,
      itemID: name,
      itemLabel: label,
    });

    if (result) {
      const newCart = userCart.filter(
        (item) => item.itemID !== name && item.optionType.label !== label
      );
      setCart(newCart);
      toast.success("Item removed successfully");
    } else {
      toast.error("Error, could not remove item from cart.");
    }
  };

  if (!userCart.length) {
    return (
      <div className="flex flex-col w-full items-center justify-center space-y-4 bg-white rounded-lg p-8">
        <h1 className="text-4xl">You have no items currently!</h1>
        <h2 className="text-3xl">Add some items</h2>
      </div>
    );
  }

  const totalAmount = cart.reduce((acc, value) => value.orderAmount + acc, 0);

  return (
    <ClientContainer>
      <div className="mx-auto my-4 p-4 w-3/4">
        <h1 className="text-4xl mb-8">Cart</h1>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl">Image</h2>
          <h2 className="text-3xl">Description</h2>
          <h2 className="text-3xl">Price</h2>
        </div>
        <hr className="border-black w-full mb-4" />
        {userCart.map((item) => {
          return <ItemOrderCard {...item} removeItem={removeItem} />;
        })}
        <div className="flex flex-col jusitfy-end items-end">
          <div>Your Subtotal : {totalAmount}</div>
          <div>Your tax : {(totalAmount * 0.13).toFixed(2)}</div>
          <div>
            Your Total including tax (GST + HST) :
            {(totalAmount + totalAmount * 0.13).toFixed(2)}
          </div>
        </div>
        <Button label="Checkout" onClick={() => {}} />
      </div>
    </ClientContainer>
  );
};

export default ItemOrderContainer;
