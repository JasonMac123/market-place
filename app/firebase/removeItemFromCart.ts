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

interface Params {
  userID: UserParams;
  itemID: string;
  itemLabel: string;
}

interface UserParams {
  id: string;
}

export default async function removeItemFromCart(params: Params) {
  try {
    const { userID, itemID, itemLabel } = params;
    const { id } = userID;

    const db = getFirestore(firebase_app);
    const cartSnapShot = collection(db, "cart");

    const queryUserCart = await query(cartSnapShot, where("userid", "==", id));

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
