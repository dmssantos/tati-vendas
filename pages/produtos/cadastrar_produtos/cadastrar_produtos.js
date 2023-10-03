import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "../../../scripts/firebase.js";


async function cadastrarProdutos() {
  const produto = {
    nome: document.getElementById("nome").value,
    cor: document.getElementById("cor").value,
    tamanho: document.getElementById("tamanho").value,
    preco: document.getElementById("preco").value,
    quantidade: document.getElementById("quantidade").value,
    descricao: document.getElementById("descricao").value,
  }
  //colocar cliente no database.
  try {
    await addDoc(collection(db, "produtos"), produto);
    alert(`Nome ${produto.nome} cadastrado com sucesso!`);
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Não foi possível cadastrar! , Erro: ", e)
  }

  document.getElementById("nome").value = "";
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