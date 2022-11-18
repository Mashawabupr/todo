import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import "firebase/storage"; // <-
const firebaseConfig = {
  apiKey: "AIzaSyBKXA6gXEcrhtUTd3dlTIWVxGMsqQegMHk",
  authDomain: "todo-69230.firebaseapp.com",
  databaseURL: "https://todo-69230-default-rtdb.firebaseio.com",
  projectId: "todo-69230",
  storageBucket: "todo-69230.appspot.com",
  messagingSenderId: "1088954139570",
  appId: "1:1088954139570:web:a73986997aaa0970955aab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let storage = getStorage(app);
