
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "./firebase.js";

const btn_consultar = document.getElementById("icon_consulta");

function listar(colecao, resultado) {
  let lista = document.getElementById("lista").innerHTML;
  lista = `
  ${lista}
  ${colecao === "produtos"? `
  <li>Nome: ${resultado.nome}</li>
  <li>Cor: ${resultado.cor}</li>
  <li>Tamanho: ${resultado.tamanho}</li>
  <li>Preço: ${resultado.preco}</li>
  <li>Quantidade: ${resultado.quantidade}</li>
  <li>Descrição: ${resultado.descricao}</li>
  ` : colecao === "clientes"? `
  <li>Nome: ${resultado.nome}</li>
  <li>Cor: ${resultado.contato}</li>
  <li>Tamanho: ${resultado.endereco}</li>
  <li>Descrição: ${resultado.descricao}</li>
  ` : `
  <li>Nome: ${resultado.nome}</li>
  <li>Cor: ${resultado.contato}</li>
  <li>Tamanho: ${resultado.endereco}</li>
  <li>Preço: ${resultado.preco}</li>
  <li>Descrição: ${resultado.descricao}</li>
  `}
  `;
  document.getElementById("lista").innerHTML = lista;
}

async function consultar(colecao, input_value) {
  const Referencia = collection(db, colecao);
  const consulta = query(Referencia, where("nome", "==", input_value));

  const querySnapshot = await getDocs(consulta);
  querySnapshot.forEach((doc) => {
    const resultado = doc.data();
    listar(colecao, resultado)
  });
}

btn_consultar.addEventListener('click', (event) => {
  event.preventDefault();
  const colecao = document.getElementById("select_consulta").value;
  const input_value = document.getElementById("input_consulta").value;

  consultar(colecao, input_value);
})