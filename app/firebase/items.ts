import firebase_app from "./config";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export default async function getItems(searchParams) {
  const { category } = searchParams;
  const db = getFirestore(firebase_app);

  const items: any = [];
  const itemSnapShot = collection(db, "items");

  if (Object.keys(searchParams).length === 0 || category === "All items") {
    const allItems = await getDocs(itemSnapShot);
    allItems.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });

    return items;
  }

  const queryItems = await query(
    itemSnapShot,
    where("category", "==", "Clothing")
  );

  const queriedItems = await getDocs(queryItems);
  queriedItems.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });

  return items;
}
