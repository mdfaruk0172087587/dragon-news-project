// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9PkgTBTryI7-O6MAGrIUVU9e3BoiltuE",
  authDomain: "dragon-news-project-37fa7.firebaseapp.com",
  projectId: "dragon-news-project-37fa7",
  storageBucket: "dragon-news-project-37fa7.firebasestorage.app",
  messagingSenderId: "1003489865536",
  appId: "1:1003489865536:web:c8c76991780432b1b314a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)