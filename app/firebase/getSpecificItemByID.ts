import firebase_app from "./config";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default async function getSpecificItemByID(searchParams) {
  const { itemID } = searchParams;

  const db = getFirestore(firebase_app);
  const itemRef = doc(db, "items", itemID);

  return itemRef;
}
