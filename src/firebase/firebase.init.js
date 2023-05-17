// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8qnuQUlf41XwE4JqvPq9RX3dXsHDUND4",
  authDomain: "simple-firebase-auth-fe82a.firebaseapp.com",
  projectId: "simple-firebase-auth-fe82a",
  storageBucket: "simple-firebase-auth-fe82a.appspot.com",
  messagingSenderId: "222369316583",
  appId: "1:222369316583:web:1c5aab7ec0086565076c42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;