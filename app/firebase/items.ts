import firebase_app from "./config";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export default async function getItems() {
  const items: any = [];
  const db = getFirestore(firebase_app);
  const itemSnapShot = await getDocs(collection(db, "items"));
  itemSnapShot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });

  return items;
}
