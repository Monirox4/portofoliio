
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBYBW2Xw4C_YiSieSialwJsW_6qQE00QQ",
  authDomain: "portofolio-23b18.firebaseapp.com",
  projectId: "portofolio-23b18",
  storageBucket: "portofolio-23b18.appspot.com",
  messagingSenderId: "427084090087",
  appId: "1:427084090087:web:e1d59cfd6469d41f0b3042",
  measurementId: "G-Z445E6Q3P5"
};


const app = initializeApp(firebaseConfig);

export  const db = getFirestore(app);