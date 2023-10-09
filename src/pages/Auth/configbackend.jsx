// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyALIYvAe9nUyxoccC2GWNAJ7ToTNV9Db7Q",
  authDomain: "e-commarce-project.firebaseapp.com",
  projectId: "e-commarce-project",
  storageBucket: "e-commarce-project.appspot.com",
  messagingSenderId: "47579083961",
  appId: "1:47579083961:web:0643189410c18a803e9768",
  measurementId: "G-GN8KJPQG0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 export const Auth=getAuth(app)
 export const storage = getStorage(app)
 export const db = getFirestore(app)
// const analytics = getAnalytics(app);