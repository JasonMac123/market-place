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
  optionType: OptionSelect;
  itemID: string;
  userID: string;
  amount: number;
}

interface OptionSelect {
  value: string;
  label: string;
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
          optionType: optionType.value,
          itemID: itemID,
          totalAmount: amount,
        },
      });
    } else {
      console.log("hello");
      let cart: any = {};
      const userCart = await getDocs(queryUserCart);

      userCart.forEach((doc) => {
        cart = { ...doc.data(), id: doc.id };
      });

      const docRef = doc(db, "cart", cart.id);

      for (const orderedItem of cart.items) {
        if (
          orderedItem?.itemID === itemID &&
          orderedItem?.optionType.value === optionType.value
        ) {
          orderedItem.orderAmount += orderAmount;

          await setDoc(docRef, cart, { merge: true });
          return true;
        }
      }
      cart.items.push({
        orderAmount: orderAmount,
        optionType: optionType,
        itemID: itemID,
      });

      await setDoc(docRef, cart, { merge: true });
    }
    return true;
  } catch (e: any) {
    throw new Error(e);
  }
}
