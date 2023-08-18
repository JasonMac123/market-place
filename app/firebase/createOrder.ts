import firebase_app from "./config";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { NextResponse } from "next/server";
import { Item } from "../types/types";

interface Params {
  sessionID: string;
  userID: string;
}

export default async function createOrder(params: Params) {
  try {
    const { sessionID, userID } = params;

    const db = getFirestore(firebase_app);
    const cartSnapShot = collection(db, "cart");
    const orderSnapShot = collection(db, "orders");

    let order = await addDoc(orderSnapShot, {
      order: sessionID,
      userID: userID,
      status: "incomplete",
    });

    const queryUserCart = await query(
      cartSnapShot,
      where("userid", "==", userID)
    );

    let cartID = "";
    const userCartInfo = await getDocs(queryUserCart);
    userCartInfo.forEach((doc) => {
      cartID = doc.id;
    });
    deleteDoc(doc(db, "cart", cartID));

    return NextResponse.json(order);
  } catch (e: any) {
    throw new Error(e);
  }
}
