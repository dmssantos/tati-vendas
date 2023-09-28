import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "./firebase.js";

async function cadastrarEncomendas() {
  const encomenda = {
    fornecedor: document.getElementById("fornecedor").value,
    produto: document.getElementById("produto").value,
    cor: document.getElementById("cor").value,
    tamanho: document.getElementById("tamanho").value,
    quantidade: document.getElementById("quantidade").value,
    preco: document.getElementById("preco").value,
  }
  //colocar encomenda no database.
  try {
    await addDoc(collection(db, "encomendas"), encomenda);
    alert(`encomenda realizada com sucesso!`);
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Não foi possível realizar a encomenda! , Erro: ", e)
  }

  document.getElementById("fornecedor").value = "";
  document.getElementById("produto").value = "";
  document.getElementById("cor").value = "";
  document.getElementById("tamanho").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("preco").value = "";
}

const btn_encomendar = document.getElementById("btn_encomendar");

btn_encomendar.addEventListener('click', (event) => {
  event.preventDefault();
  cadastrarEncomendas();
})