import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "./firebase.js";


async function cadastrarProdutos() {
  const produto = {
    produto: document.getElementById("produto").value,
    cor: document.getElementById("cor").value,
    tamanho: document.getElementById("tamanho").value,
    preco: document.getElementById("preco").value,
    quantidade: document.getElementById("quantidade").value,
    descricao: document.getElementById("descricao").value,
  }
  //colocar cliente no database.
  try {
    await addDoc(collection(db, "produtos"), produto);
    alert(`Produto ${produto.produto} cadastrado com sucesso!`);
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Não foi possível cadastrar! , Erro: ", e)
  }

  document.getElementById("produto").value = "";
  document.getElementById("cor").value = "";
  document.getElementById("tamanho").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("descricao").value = "";
}

const btn_cadastrar = document.getElementById("btn_cadastrar");

btn_cadastrar.addEventListener('click', (event) => {
  event.preventDefault();
  cadastrarProdutos();
})