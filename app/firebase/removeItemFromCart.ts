import firebase_app from "./config";

import { collection, getFirestore } from "firebase/firestore";

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

    return true;
  } catch (e: any) {
    throw new Error(e);
  }
}
