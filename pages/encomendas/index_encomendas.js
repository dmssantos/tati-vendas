import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "../../scripts/firebase.js";



function construtor_lista(encomenda) {
  let lista = document.getElementById("content").innerHTML
  lista +=
    `
  <ul>
      <li class=" lista_content fornecedor">${encomenda.fornecedor}</li>
      <li class=" lista_content produto">${encomenda.produto}</li>
      <li class=" lista_content cor">${encomenda.cor}</li>
      <li class=" lista_content tamanho">${encomenda.tamanho}</li>
      <li class=" lista_content preco">${encomenda.preco}</li>
      <li class=" lista_content quantidade">${encomenda.quantidade}</li>
      <li class=" lista_content status">${encomenda.status}</li>
    </ul>
  `
  document.getElementById("content").innerHTML = lista;
}

const encomendasData = await getDocs(collection(db, "encomendas"));
encomendasData.forEach((encomendaData) => {
  const encomenda = encomendaData.data();
  construtor_lista(encomenda)
});


