import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCToIbloVBFRoJLuJXp2u4uzPHrvmdKcHQ",
  authDomain: "adminevento-miriany.firebaseapp.com",
  projectId: "adminevento-miriany",
  storageBucket: "adminevento-miriany.appspot.com",
  messagingSenderId: "707937641958",
  appId: "1:707937641958:web:690f3c65161acb3b0d6227"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
