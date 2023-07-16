import firebase_app from "./config";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";

interface Params {
  orderAmount: number;
  optionType: string;
  itemID: string;
  userID: string;
}

export default async function addToCart(params: Params) {
  try {
    const { orderAmount, optionType, itemID, userID } = params;

    const db = getFirestore(firebase_app);
    const cartSnapShot = collection(db, "cart");

    const queryUserCart = await query(
      cartSnapShot,
      where("userid", "==", userID)
    );

    if (!queryUserCart) {
      await addDoc(cartSnapShot, {
        userid: userID,
        items: {
          orderAmount: orderAmount,
          optionType: optionType,
          itemID: itemID,
        },
      });
    } else {
      let cart = "";
      const userCart = await getDocs(queryUserCart);

      userCart.forEach((doc) => {
        cart = doc.id;
      });

      const docRef = doc(db, "cart", cart);

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
    return true;
  } catch (e) {
    return e;
  }
}
