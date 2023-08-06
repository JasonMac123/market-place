import { getAuth } from "@firebase/auth";
import firebase_app from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

import { useRouter } from "next/navigation";

import { AiOutlineShoppingCart } from "react-icons/ai";

const StoreCart = () => {
  const router = useRouter();

  const auth = getAuth(firebase_app);
  const [user] = useAuthState(auth);

  if (!user) {
    return (
      <div
        className="flex items-center text-alice gap-4 hover:bg-cerulean h-3/4 px-4 rounded-lg hover:cursor-pointer"
        onClick={() => router.push("/cart")}
      >
        Cart
        <AiOutlineShoppingCart size={20} />
      </div>
    );
  }

  return (
    <div
      className="flex items-center text-alice gap-4 hover:bg-cerulean h-3/4 px-4 rounded-lg hover:cursor-pointer"
      onClick={() => router.push(`/cart/${user.uid}`)}
    >
      Cart
      <AiOutlineShoppingCart size={20} />
    </div>
  );
};

export default StoreCart;
