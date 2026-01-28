// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBolI024fgiGt3Y6j2BKMnhSbZzDi8UOcg",
  authDomain: "game-hub-9fc91.firebaseapp.com",
  projectId: "game-hub-9fc91",
  storageBucket: "game-hub-9fc91.firebasestorage.app",
  messagingSenderId: "595322457952",
  appId: "1:595322457952:web:13380a45af2e08c979d805",
  measurementId: "G-QS0631J4G6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);