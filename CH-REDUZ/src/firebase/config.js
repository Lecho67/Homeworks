// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getauth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBevS-SrSXTRB-UdYLhatok5HmsO8N327Q",
  authDomain: "papu-76ce8.firebaseapp.com",
  projectId: "papu-76ce8",
  storageBucket: "papu-76ce8.appspot.com",
  messagingSenderId: "913088556636",
  appId: "1:913088556636:web:ae0b1cec5137cd970ec099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{app,auth}