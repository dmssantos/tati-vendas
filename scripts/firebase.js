import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDcSSvi2IaxLsnaoI5dKCnLCwPCvNf-J4",
  authDomain: "tati-vendas.firebaseapp.com",
  projectId: "tati-vendas",
  storageBucket: "tati-vendas.appspot.com",
  messagingSenderId: "946460996908",
  appId: "1:946460996908:web:27d9f805f6a2501e5e2889"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);