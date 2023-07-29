import firebase_app from "./config";
import {
  collection,
  getFirestore,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

import { UserParams } from "../types/types";

interface Params {
  userParams: UserParams;
  itemID: string;
  itemLabel: string;
}

export default async function removeItemFromCart(params: Params) {
  try {
    const { userParams, itemID, itemLabel } = params;
    const { userID } = userParams;

    const db = getFirestore(firebase_app);
    const cartSnapShot = collection(db, "cart");

    const queryUserCart = await query(
      cartSnapShot,
      where("userid", "==", userID)
    );

    let cart: any = {};
    let cartID = "";

    const userCart = await getDocs(queryUserCart);
    userCart.forEach((doc) => {
      cart = { ...doc.data() };
      cartID = doc.id;
    });

    const newOrderedItemList = cart.items.filter(
      (item: any) =>
        item.itemID !== itemID && item.optionType.label !== itemLabel
    );

    cart.items = newOrderedItemList;

    const docRef = doc(db, "cart", cartID);
    await setDoc(docRef, cart);

    return true;
  } catch (e: any) {
    throw new Error(e);
  }
}
