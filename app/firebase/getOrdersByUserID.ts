import firebase_app from "./config";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

import { UserParams } from "../types/types";
import { NextResponse } from "next/server";

export default async function getOrdersByUserID(params: UserParams) {
  try {
    const { userID } = params;
    const items: any = [];

    const db = getFirestore(firebase_app);
    const orderSnapShot = collection(db, "orders");

    const queryOrders = await query(
      orderSnapShot,
      where("userid", "==", userID)
    );

    const userOrders = await getDocs(queryOrders);
    userOrders.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });

    return NextResponse.json(items);
  } catch (e: any) {
    throw new Error(e);
  }
}
