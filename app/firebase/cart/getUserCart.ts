import firebase_app from "../config";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  addDoc,
} from "firebase/firestore";

import { UserParams } from "../../types/types";

export default async function getUserCart(params: UserParams) {
  try {
    const { userID } = params;

    const db = getFirestore(firebase_app);
    const cartSnapShot = collection(db, "cart");

    const queryUserCart = await query(
      cartSnapShot,
      where("userid", "==", userID)
    );

    if (!queryUserCart) {
      const newCart = await addDoc(cartSnapShot, { userid: userID, items: [] });
      let items: any[] = [];
      return items;
    }

    const userCart = await getDocs(queryUserCart);

    let items: any[] = [];

    userCart.forEach((doc) => {
      const cart = { ...doc.data() };
      items = items.concat(cart.items);
    });

    return items;
  } catch (e: any) {
    throw new Error(e);
  }
}
