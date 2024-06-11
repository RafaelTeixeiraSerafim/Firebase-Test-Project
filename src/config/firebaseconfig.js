import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMJIFVJs4CwTIR2Jdw34smJOpiKIix7Dw",
  authDomain: "task-bd70b.firebaseapp.com",
  projectId: "task-bd70b",
  storageBucket: "task-bd70b.appspot.com",
  messagingSenderId: "7941043475",
  appId: "1:7941043475:web:a87632ed69b0debb4fd6e6"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;