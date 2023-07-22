"use client";

import firebase_app from "@/app/firebase/config";
import getUserCart from "@/app/firebase/getUserCart";
import { getAuth } from "@firebase/auth";
import { Carter_One } from "next/font/google";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineShoppingCart } from "react-icons/ai";

const StoreCart = async () => {
  const router = useRouter();

  const auth = getAuth(firebase_app);
  const [user, loading] = useAuthState(auth);

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

  return (
    <div
      className="flex items-center text-alice gap-4 hover:bg-cerulean h-3/4 px-4 rounded-lg"
      onClick={() => router.push("/cart")}
    >
      {cart.items.length()}
      <AiOutlineShoppingCart size={20} />
    </div>
  );
};

export default StoreCart;
