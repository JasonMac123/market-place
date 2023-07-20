import firebase_app from "./config";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

interface Params {
  userID: string;
}

export default async function getUserCart (params: Params) {
  try {
    const { userID } = params

    const db = getFirestore(firebase_app)
    const cartSnapShot = collection(db, 'cart')

    const queryUserCart = await query(
        cartSnapShot,
        where("userid", "==", userID)
      );

    if (!queryUserCart) {
        return "Empty"
    }
    let cart = {}
    const userCart = await getDocs(queryUserCart);

    userCart.forEach((doc) => {
      cart = {...doc.data(), id: doc.id}
    });

    return cart;
  } catch (e: any) {
    throw new Error(e)
  }
}