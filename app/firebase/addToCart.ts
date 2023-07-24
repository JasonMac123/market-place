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

interface ItemQuantity {
  [key: string]: number;
}

interface Params {
  orderAmount: number;
  optionType: OptionSelect;
  itemID: string;
  userID: string;
  amount: number;
  image: string;
  itemName: string;
  maxQuantity: ItemQuantity;
}

interface OptionSelect {
  value: string;
  label: string;
}

export default async function addToCart(params: Params) {
  try {
    const {
      orderAmount,
      optionType,
      itemID,
      userID,
      amount,
      image,
      itemName,
      maxQuantity,
    } = params;

    const db = getFirestore(firebase_app);
    const cartSnapShot = collection(db, "cart");

    const queryUserCart = await query(
      cartSnapShot,
      where("userid", "==", userID)
    );

    if (!queryUserCart) {
      await addDoc(cartSnapShot, {
        userid: userID,
        items: [
          {
            orderAmount: orderAmount,
            optionType: optionType.value,
            itemID: itemID,
            image: image,
            itemName: itemName,
            amount: amount,
          },
        ],
      });
    } else {
      console.log("hello");
      let cart: any = {};
      let cartID = "";
      const userCart = await getDocs(queryUserCart);

      userCart.forEach((doc) => {
        cart = { ...doc.data() };
        cartID = doc.id;
      });

      const docRef = doc(db, "cart", cartID);

      for (const orderedItem of cart.items) {
        if (
          orderedItem?.itemID === itemID &&
          orderedItem?.optionType.value === optionType.value &&
          orderAmount + orderedItem.orderAmount > maxQuantity.optionType
        ) {
          orderedItem.orderAmount += orderAmount;
          orderedItem.amount += amount;

          await setDoc(docRef, cart, { merge: true });
          return true;
        }
      }
      cart.items.push({
        orderAmount: orderAmount,
        optionType: optionType,
        itemID: itemID,
        image: image,
        itemName: itemName,
      });

      await setDoc(docRef, cart, { merge: true });
    }
    return true;
  } catch (e: any) {
    throw new Error(e);
  }
}
