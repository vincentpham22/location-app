import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARuW0H3EQP-q77sju4BH4dbyIcPDrZlaw",
  authDomain: "nextco-app.firebaseapp.com",
  projectId: "nextco-app",
  storageBucket: "nextco-app.firebasestorage.app",
  messagingSenderId: "564817501038",
  appId: "1:564817501038:web:a815fc5ee5194118b7ff7f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);