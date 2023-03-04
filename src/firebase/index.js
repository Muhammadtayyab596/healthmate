// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB3wNWQme6UMidy7LLX7WxHjjN9LWR24s4",
  authDomain: "healthmate-dd837.firebaseapp.com",
  projectId: "healthmate-dd837",
  storageBucket: "healthmate-dd837.appspot.com",
  messagingSenderId: "903542239101",
  appId: "1:903542239101:web:81012c99eae34668c5a614",
  measurementId: "G-Q851L5BVWS"
};

// Initialize Firebase

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
// const storage = getStorage()


export {auth , db};