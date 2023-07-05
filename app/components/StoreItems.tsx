import firebase_app from "../firebase/config";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const StoreItems = async () => {
  const items: any = [];
  const db = getFirestore(firebase_app);
  const itemSnapShot = await getDocs(collection(db, "items"));
  itemSnapShot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });

  return <div></div>;
};

export default StoreItems;
