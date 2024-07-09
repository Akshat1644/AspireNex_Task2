/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-47edc.firebaseapp.com",
  projectId: "taskmanager-47edc",
  storageBucket: "taskmanager-47edc.appspot.com",
  messagingSenderId: "402930636652",
  appId: "1:402930636652:web:96c01e31c21dab433dc549"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);