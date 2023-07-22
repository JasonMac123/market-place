"use client";

import { getAuth } from "@firebase/auth";
import firebase_app from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import getUserCart from "@/app/firebase/getUserCart";

import { useRouter } from "next/navigation";

import { AiOutlineShoppingCart } from "react-icons/ai";

const StoreCart = async () => {
  const router = useRouter();

  const auth = getAuth(firebase_app);
  const [user] = useAuthState(auth);

  if (!user) {
    return (
      <div
        className="flex items-center text-alice gap-4 hover:bg-cerulean h-3/4 px-4 rounded-lg"
        onClick={() => router.push("/cart")}
      >
        0
        <AiOutlineShoppingCart size={20} />
      </div>
    );
  }

  const cart = await getUserCart({ userID: user.uid });
  const countedCart = cart.reduce((acc, value) => value.orderAmount + acc, 0);

  return (
    <div
      className="flex items-center text-alice gap-4 hover:bg-cerulean h-3/4 px-4 rounded-lg"
      onClick={() => router.push("/cart")}
    >
      {countedCart}
      <AiOutlineShoppingCart size={20} />
    </div>
  );
};

export default StoreCart;
