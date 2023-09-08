import firebase_app from "../config";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import { ItemQuery } from "../../types/types";

export default async function getSpecificItemByID(searchParams: ItemQuery) {
  try {
    const { itemID } = searchParams;

    const db = getFirestore(firebase_app);
    const itemSnap = await getDoc(doc(db, "items", itemID));

    const itemData = itemSnap.data();

    return itemData;
  } catch (e: any) {
    throw new Error(e);
  }
}
