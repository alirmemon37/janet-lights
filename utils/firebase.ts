// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "janet-lights",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const uploadFileToFirebaseAndGetUrl = async (file: File | null) => {
  if (!file) {
    return { uploadedToUrl: "", path: "" };
  }

  const newFile = new File([file], file?.name.replace(/\s/g, "_"), {
    type: file?.type,
  });
  let type = newFile.type.split("/")[0];
  if (!type) {
    type = "other";
  }
  const path = `${newFile.name}`;
  const storageRef = ref(storage, path);

  const uploadedToUrl = await uploadBytes(storageRef, newFile).then(
    async (snapshot) => {
      //return newFile url
      const url = await getDownloadURL(snapshot.ref).then((url) => {
        return url;
      });
      return url;
    }
  );
  return { uploadedToUrl, path };
};