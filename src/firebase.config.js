import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnzjuBVzzrvExDkCsFWI4QaWR0aQgVRhQ",
  authDomain: "house-marketplace-app-7bcce.firebaseapp.com",
  projectId: "house-marketplace-app-7bcce",
  storageBucket: "house-marketplace-app-7bcce.appspot.com",
  messagingSenderId: "174839230185",
  appId: "1:174839230185:web:260429349fa33f7a708a78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
