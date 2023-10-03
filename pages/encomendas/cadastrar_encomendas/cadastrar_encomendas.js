import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "../../../scripts/firebase.js";


async function cadastrarEncomendas() {
  const encomenda = {
    fornecedor: document.getElementById("fornecedor").value,
    produto: document.getElementById("produto").value,
    cor: document.getElementById("cor").value,
    tamanho: document.getElementById("tamanho").value,
    preco: document.getElementById("preco").value,
    quantidade: document.getElementById("quantidade").value,
    status: document.getElementById("status").value,
  }
  //colocar encomenda no database.
  try {
    await addDoc(collection(db, "encomendas"), encomenda);
    alert(`Encomenda ${encomenda.produto} cadastrado com sucesso!`);
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Não foi possível cadastrar! , Erro: ", e)
  }

  document.getElementById("fornecedor").value = "";
  document.getElementById("produto").value = "";
  document.getElementById("cor").value = "";
  document.getElementById("tamanho").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("status").value = "";
}

const btn_cadastrar = document.getElementById("btn_cadastrar");

btn_cadastrar.addEventListener('click', (event) => {
  event.preventDefault();
  cadastrarEncomendas();
})