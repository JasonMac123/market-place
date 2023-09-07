"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase_app from "@/app/firebase/config";

import { Item, UserParams, CartParams } from "@/app/types/types";

import Button from "../input/Button";
import ItemOrderCard from "../cards/ItemOrderCard";

import removeItemFromCart from "@/app/firebase/removeItemFromCart";

interface ItemOrderContainerProps {
  userID: UserParams;
  userCart: Item[];
  searchParams: CartParams;
}

const ItemOrderContainer: React.FC<ItemOrderContainerProps> = ({
  userCart,
  userID,
  searchParams,
}) => {
  const router = useRouter();
  const [cart, setCart] = useState(userCart);

  const { errorMessage } = searchParams;

  const auth = getAuth(firebase_app);

  const [user] = useAuthState(auth);

  if (!user || user.uid !== userID.userID) {
    toast.error("You do not have permissions to access this page");
    router.push("/");
    return;
  }

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
      const result = await axios.post("/api/checkout-session", {
        cart,
        userID,
      });

      if (!result) {
        toast.error("Unable to checkout");
      }

      router.push(result.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  if (!userCart.length) {
    return (
      <div className="flex flex-col w-4/5 h-[30rem] mx-auto items-center justify-center space-y-4 bg-white rounded-lg p-8">
        <h1 className="text-4xl">You have no items currently!</h1>
        <h2 className="text-3xl">Add some items</h2>
      </div>
    );
  }

  const totalAmount = cart.reduce((acc, value) => value.orderAmount + acc, 0);

  return (
    <div className="bg-white w-4/5 mx-auto rounded-lg p-16">
      {errorMessage && (
        <div className="border-[1px] rouned-lg border-red-600">
          There was an error in checking out. Payment step is incomplete, please
          try again.
        </div>
      )}
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
            <ItemOrderCard
              {...item}
              removeItem={removeItem}
              key={item.itemID}
            />
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
    </div>
  );
};

export default ItemOrderContainer;
