import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNFVBmcTUT2y2JvVXB7_uoENULXQRxWW4",
  authDomain: "codetest-chat.firebaseapp.com",
  databaseURL: "https://codetest-chat-default-rtdb.firebaseio.com",
  projectId: "codetest-chat",
  storageBucket: "codetest-chat.appspot.com",
  messagingSenderId: "238118233921",
  appId: "1:238118233921:web:875f7b3e0ef333971423c0",
  measurementId: "G-XS7WYTJT34",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authService = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export default firebase;
