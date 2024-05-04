// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWPPdO7SRF1QPDPIE88zvxU-31vziNHR4",
  authDomain: "pokedex-f9b28.firebaseapp.com",
  projectId: "pokedex-f9b28",
  storageBucket: "pokedex-f9b28.appspot.com",
  messagingSenderId: "273293319980",
  appId: "1:273293319980:web:e3d4e30b92b977572b5689",
  measurementId: "G-2530C0V5CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }