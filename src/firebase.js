// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR_t_PFFxvrUeuhzahBYf8AjmrBTLj1x8",
  authDomain: "ambicus-files.firebaseapp.com",
  projectId: "ambicus-files",
  storageBucket: "ambicus-files.appspot.com",
  messagingSenderId: "82458491534",
  appId: "1:82458491534:web:a848b300ca4f665369a7df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth()
export const db = getFirestore()