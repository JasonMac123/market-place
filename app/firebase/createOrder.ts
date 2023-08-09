import { NextResponse } from "next/server";
import { Item } from "../types/types";
import firebase_app from "./config";

import { getFirestore, collection, addDoc } from "firebase/firestore";

interface Params {
  cart: Item[];
  orderNumber: string;
}

export default async function createOrder(params: Params) {
  try {
    const { cart, orderNumber } = params;

    const db = getFirestore(firebase_app);
    const orderSnapShot = collection(db, "orders");

    let order = await addDoc(orderSnapShot, { order: orderNumber, cart: cart });

    return NextResponse.json(order);
  } catch (e: any) {
    throw new Error(e);
  }
}
