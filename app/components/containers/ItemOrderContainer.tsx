"use client";
import { useCallback, useState } from "react";

import { Item, UserParams } from "@/app/types/types";

import removeItemFromCart from "@/app/firebase/removeItemFromCart";

import { toast } from "react-toastify";

import ClientContainer from "./ClientContainer";
import ItemOrderCard from "../cards/ItemOrderCard";
import Button from "../input/Button";
import axios from "axios";
import { data } from "autoprefixer";
import { getStripe } from "@/app/stripe/getStripe";
import { loadStripe } from "@stripe/stripe-js";
import createOrder from "@/app/firebase/createOrder";
import { useAuthState } from "react-firebase-hooks/auth";

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

  const orderCart = async () => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      const result = await axios.post("/api/checkout-session", { cart });

      if (!result) {
        toast.error("Unable to checkout");
      }
    } catch (e: any) {
      console.log(e);
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
    <div className="mx-auto my-4 p-4 w-3/4">
      <h1 className="text-4xl mb-8">Cart</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">Image</h2>
        <h2 className="text-3xl">Description</h2>
        <h2 className="text-3xl">Price</h2>
      </div>
      <hr className="border-black w-full mb-4" />
      {userCart.map((item) => {
        return (
          <ItemOrderCard {...item} removeItem={removeItem} key={item.itemID} />
        );
      })}
      <div className="flex flex-col jusitfy-end items-end mb-4">
        <div className="text-2xl">Your Subtotal : {totalAmount}</div>
        <div className="text-2xl">
          Your tax : {(totalAmount * 0.13).toFixed(2)}
        </div>
        <div className="text-2xl">
          Your Total including tax (GST + HST) :
          {(totalAmount + totalAmount * 0.13).toFixed(2)}
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex w-1/3">
          <Button label="Checkout" onClick={orderCart} />
        </div>
      </div>
    </div>
  );
};

export default ItemOrderContainer;
