import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0EjurCcAzcBIqWibessjGgWboR2YliJY",
  authDomain: "ecommerce-28421.firebaseapp.com",
  projectId: "ecommerce-28421",
  storageBucket: "ecommerce-28421.appspot.com",
  messagingSenderId: "896987028308",
  appId: "1:896987028308:web:92565ad0081c1d2e6b46c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;