// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkh62FEv174qTthGTqDbWV3GXf8DC_uFo",
  authDomain: "coffee-store-4ba7a.firebaseapp.com",
  projectId: "coffee-store-4ba7a",
  storageBucket: "coffee-store-4ba7a.appspot.com",
  messagingSenderId: "371747317453",
  appId: "1:371747317453:web:4e7012c47df66bd5c66b84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;