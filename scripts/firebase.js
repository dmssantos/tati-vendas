import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIda9-J1s4N3hhvn0exy835tshD1fxSJo",
  authDomain: "tati-vendas-33e1d.firebaseapp.com",
  projectId: "tati-vendas-33e1d",
  storageBucket: "tati-vendas-33e1d.appspot.com",
  messagingSenderId: "968029976514",
  appId: "1:968029976514:web:7a4bf9cc0fef2d82f7c85b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);