import firebase_app from "./config";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import { UserParams } from "../types/types";
import { NextResponse } from "next/server";

export default async function getOrdersByUserID(params: UserParams) {
  try {
    const { userID } = params;

    console.log(userID);
    const items: any = [];

    const db = getFirestore(firebase_app);
    const orderSnapShot = collection(db, "orders");

    const queryOrders = await query(
      orderSnapShot,
      where("userID", "==", userID),
      orderBy("createdAt")
    );

    const userOrders = await getDocs(queryOrders);
    userOrders.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });

    return items;
  } catch (e: any) {
    throw new Error(e);
  }
}
