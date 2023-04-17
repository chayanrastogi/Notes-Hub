// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnxFKma4ZoGFFaqnTos-4qlqsg6lLQlCM",
  authDomain: "notes-hub-aa5ff.firebaseapp.com",
  projectId: "notes-hub-aa5ff",
  storageBucket: "notes-hub-aa5ff.appspot.com",
  messagingSenderId: "773128712171",
  appId: "1:773128712171:web:be3238c0883de45447f3ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);