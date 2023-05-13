import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const productDocRef = doc(db, "Products", id);
    const productDoc = await getDoc(productDocRef);

    if (!productDoc.exists()) {
      return new Response("Product not found", { status: 404 });
    }

    const product = productDoc.data();
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch product data", { status: 500 });
  }
};
