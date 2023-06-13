import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOGVZLf4SbyfdqHMXkF9zgCZK5lYOy5Aw",
  authDomain: "moviewood-faf19.firebaseapp.com",
  projectId: "moviewood-faf19",
  storageBucket: "moviewood-faf19.appspot.com",
  messagingSenderId: "310810082674",
  appId: "1:310810082674:web:edf5b7a94fef0ba480f1eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;