// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7DluSDGuPCDs4294YqKdE-prG72nweAw",
  authDomain: "netflixgpt-d0e85.firebaseapp.com",
  projectId: "netflixgpt-d0e85",
  storageBucket: "netflixgpt-d0e85.appspot.com",
  messagingSenderId: "149969078276",
  appId: "1:149969078276:web:4ba08180c8b919235a4d51",
  measurementId: "G-RHN6TZ0LTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth();