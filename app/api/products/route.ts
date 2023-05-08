import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export const GET = async () => {
  try {
    // get all the products from the firestore
    const productsCollectionRef = collection(db, "Products");
    const querySnapshot = await getDocs(productsCollectionRef);
    const products = querySnapshot.docs.map((doc) => doc.data());
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all products", { status: 500 });
  }
};
