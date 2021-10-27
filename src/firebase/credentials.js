import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAR5GhWHpvfL6RPr-oagVs_TpHYmsD2hc0",
  authDomain: "chat-firebase-49a62.firebaseapp.com",
  projectId: "chat-firebase-49a62",
  storageBucket: "chat-firebase-49a62.appspot.com",
  messagingSenderId: "1000957209552",
  appId: "1:1000957209552:web:0551533d493821a696e7d5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp