import firebase_app from "./config";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  setDoc,
} from "firebase/firestore";

interface Params {
  orderAmount: number;
  optionType: string;
  itemID: string;
  userid: string;
}

export default async function addToCart(params: Params) {
  try {
    const { orderAmount, optionType, itemID, userid } = params;

    const db = getFirestore(firebase_app);
    const cartSnapShot = collection(db, "cart");

    const queryUserCart = await query(
      cartSnapShot,
      where("userid", "==", userid)
    );

    if (!queryUserCart) {
      await addDoc(cartSnapShot, {
        userid: userid,
        items: {
          orderAmount: orderAmount,
          optionType: optionType,
          itemID: itemID,
        },
      });
    } else {
      const docRef = doc(db, "cart", queryUserCart.id);

      setDoc(
        docRef,
        {
          items: {
            orderAmount: orderAmount,
            optionType: optionType,
            itemID: itemID,
          },
        },
        { merge: true }
      );
    }
  } catch (e) {
    return e;
  }
}
