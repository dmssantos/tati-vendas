import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "../../scripts/firebase.js";



function construtor_lista(venda) {
  let lista = document.getElementById("content").innerHTML
  lista +=
    `
  <ul>
      <li class=" lista_content cliente">${venda.cliente}</li>
      <li class=" lista_content produto">${venda.produto}</li>
      <li class=" lista_content cor">${venda.cor}</li>
      <li class=" lista_content tamanho">${venda.tamanho}</li>
      <li class=" lista_content preco">${venda.preco}</li>
      <li class=" lista_content quantidade">${venda.quantidade}</li>
      <li class=" lista_content status">${venda.status}</li>
    </ul>
  `
  document.getElementById("content").innerHTML = lista;
}

const vendasData = await getDocs(collection(db, "vendas"));
vendasData.forEach((vendaData) => {
  const venda = vendaData.data();
  construtor_lista(venda)
});


