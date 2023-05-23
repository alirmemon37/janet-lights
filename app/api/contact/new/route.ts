import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ContactFormData } from "@/types/types";

export const POST = async (request: Request) => {
  const contactData: ContactFormData = await request.json();
  try {
    // add the new document to Users collection
    const docRef = await addDoc(collection(db, "Users"), contactData);
    return new Response(JSON.stringify({ id: docRef.id }), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add contact", { status: 500 });
  }
}