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
  amount: number;
}

export default async function addToCart(params: Params) {
  try {
    const { orderAmount, optionType, itemID, userID, amount } = params;

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
          totalAmount: amount,
        },
      });
    } else {
      let items: any = {};
      const userCart = await getDocs(queryUserCart);

      userCart.forEach((doc) => {
        items = { ...doc.data(), id: doc.id };
      });

      const docRef = doc(db, "cart", items.id);

      for (const orderedItem of items.items) {
        if (
          orderedItem.itemID === itemID &&
          orderedItem.optionType === optionType
        ) {
          orderedItem.orderAmount += orderAmount;

          await setDoc(docRef, items, { merge: true });
          return true;
        }
      }

      await setDoc(
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
