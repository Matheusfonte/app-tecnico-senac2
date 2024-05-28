// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Ac8BCwVDXcoujC4eGbywJVxMOfhxRLA",
  authDomain: "app-base-e4d00.firebaseapp.com",
  databaseURL: "https://app-base-e4d00-default-rtdb.firebaseio.com",
  projectId: "app-base-e4d00",
  storageBucket: "app-base-e4d00.appspot.com",
  messagingSenderId: "381662349055",
  appId: "1:381662349055:web:00cad0454caae8bd022eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);