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
  orderQuantity: number;
  optionType: OptionSelect;
  itemID: string;
  userID: string;
  orderAmount: number;
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
      orderQuantity,
      optionType,
      itemID,
      userID,
      orderAmount,
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
            orderQuantity: orderQuantity,
            optionType: optionType.value,
            itemID: itemID,
            image: image,
            itemName: itemName,
            orderAmount: orderAmount,
          },
        ],
      });
      return "Successfully added item to cart!";
    }

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
        orderedItem?.optionType.value === optionType.value
      ) {
        if (orderAmount + orderedItem.orderQuantity <= maxQuantity.optionType) {
          orderedItem.orderQunaity += orderQuantity;
          orderedItem.orderAmount += orderAmount;

          await setDoc(docRef, cart, { merge: true });
          return "Successfully added item to cart!";
        }

        return "Cannot add anymore items due insufficient stock";
      }
    }

    cart.items.push({
      orderQuantity: orderQuantity,
      orderAmount: orderAmount,
      optionType: optionType,
      itemID: itemID,
      image: image,
      itemName: itemName,
    });

    await setDoc(docRef, cart, { merge: true });
    return "Successfully added item to cart!";
  } catch (e: any) {
    throw new Error(e);
  }
}
