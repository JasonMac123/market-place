import { AiOutlineConsoleSql } from "react-icons/ai";
import firebase_app from "./config";
import { doc, getDoc, getFirestore } from "firebase/firestore";

interface ItemQuery {
  itemID: string;
}

export default async function getSpecificItemByID(searchParams: ItemQuery) {
  try {
    const { itemID } = searchParams;

    const db = getFirestore(firebase_app);
    const itemSnap = await getDoc(doc(db, "items", itemID));

    const itemData = itemSnap.data();

    return itemData;
  } catch (e) {
    return e;
  }
}
