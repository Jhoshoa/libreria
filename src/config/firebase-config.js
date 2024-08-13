// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2mLD4YJyh28Q7UdzbY-FuzPSk2H5HDLc",
  authDomain: "donmariolibrary.firebaseapp.com",
  projectId: "donmariolibrary",
  storageBucket: "donmariolibrary.appspot.com",
  messagingSenderId: "816363985474",
  appId: "1:816363985474:web:77a20cbde81cb6170a6bdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);