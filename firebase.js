// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1pb-iza0HLAWn0H8AgWIgRVauiQQOA-A",
  authDomain: "inventory-management-5fc41.firebaseapp.com",
  projectId: "inventory-management-5fc41",
  storageBucket: "inventory-management-5fc41.appspot.com",
  messagingSenderId: "1088069733536",
  appId: "1:1088069733536:web:6621d996ff88fa7a248dc5",
  measurementId: "G-MY1GD6EQHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}