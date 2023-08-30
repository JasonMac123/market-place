import { getAuth } from "@firebase/auth";
import firebase_app from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

import { useRouter } from "next/navigation";

import { AiOutlineShoppingCart } from "react-icons/ai";

const StoreCart = () => {
  const router = useRouter();

  const auth = getAuth(firebase_app);
  const [user] = useAuthState(auth);

  const redirectUser = () => {
    if (!user) {
      return router.push("/cart");
    }
    return router.push(`/cart/${user.uid}`);
  };

  return (
    <div
      className="flex items-center w-[45%] justify-center text-alice gap-4 hover:bg-cerulean lg:bg-none bg-celestial h-3/4 px-4 py-4 rounded-lg hover:cursor-pointer"
      onClick={redirectUser}
    >
      Cart
      <AiOutlineShoppingCart size={20} />
    </div>
  );
};

export default StoreCart;
