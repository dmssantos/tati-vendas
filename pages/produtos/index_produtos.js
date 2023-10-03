import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "../../scripts/firebase.js";



function construtor_lista(produto) {
  let lista = document.getElementById("content").innerHTML
  lista +=
    `
  <ul>
      <li class=" lista_content nome">${produto.nome}</li>
      <li class=" lista_content cor">${produto.cor}</li>
      <li class=" lista_content tamanho">${produto.tamanho}</li>
      <li class=" lista_content preco">${produto.preco}</li>
      <li class=" lista_content quantidade">${produto.quantidade}</li>
      <li class=" lista_content descricao">${produto.descricao}</li>
    </ul>
  `
  document.getElementById("content").innerHTML = lista;
}

const produtosData = await getDocs(collection(db, "produtos"));
produtosData.forEach((produtoData) => {
  const produto = produtoData.data();
  construtor_lista(produto)
});


