import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

// Initialize Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
