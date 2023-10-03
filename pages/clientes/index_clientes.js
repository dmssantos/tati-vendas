import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "../../scripts/firebase.js";



function construtor_lista(cliente) {
  let lista = document.getElementById("content").innerHTML
  lista +=
    `
  <ul>
      <li class=" lista_content nome">${cliente.nome}</li>
      <li class=" lista_content contato">${cliente.contato}</li>
      <li class=" lista_content endereco">${cliente.endereco}</li>
      <li class=" lista_content descricao">${cliente.descricao}</li>
    </ul>
  `
  document.getElementById("content").innerHTML = lista;
}

const clientesData = await getDocs(collection(db, "clientes"));
clientesData.forEach((clienteData) => {
  const cliente = clienteData.data();
  construtor_lista(cliente)
});


