
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCNs6txrUX4Dc3201vlqnzQvNq8JmAFLDk",
  authDomain: "descartables-del-mar.firebaseapp.com",
  projectId: "descartables-del-mar",
  storageBucket: "descartables-del-mar.appspot.com",
  messagingSenderId: "461884775255",
  appId: "1:461884775255:web:eaf0eaf7fa8c18a264bc12",
  measurementId: "G-EL0ZKT42PT"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
