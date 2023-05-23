import Product from "@/types/types";
import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";

export const POST = async (request: Request) => {
  const productData: Product = await request.json();
  try {
    // add the new document to Products collection
    const docRef = await addDoc(collection(db, "Products"), productData);
    return new Response(JSON.stringify({ id: docRef.id }), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add product", { status: 500 });
  }
};
