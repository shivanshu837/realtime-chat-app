import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQf8hP0rTeXzWOtiBpU9aevQ8YOCaMGAs",
  authDomain: "chatapp-30f99.firebaseapp.com",
  projectId: "chatapp-30f99",
  storageBucket: "chatapp-30f99.appspot.com",
  messagingSenderId: "283802255085",
  appId: "1:283802255085:web:d43a16644693e1670a16e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
