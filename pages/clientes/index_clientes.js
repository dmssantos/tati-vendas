import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "../../scripts/firebase.js";



function construtor_lista(cliente) {
  console.log(cliente)
  let tabela = document.getElementById("tabela").innerHTML
  console.log(tabela)
}

const clientesData = await getDocs(collection(db, "clientes"));
clientesData.forEach((clienteData) => {
  const cliente = clienteData.data();
  construtor_lista(cliente)
});


