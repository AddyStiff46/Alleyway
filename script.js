// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLGIH7mAC0Xv1GCseCdaLyeW6qeyJ3vA0",
  authDomain: "alleyway-9ff10.firebaseapp.com",
  projectId: "alleyway-9ff10",
  storageBucket: "alleyway-9ff10.appspot.com",
  messagingSenderId: "962754551317",
  appId: "1:962754551317:web:6028720de3f396902bb81c",
  measurementId: "G-YS8Y25Q9MM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);