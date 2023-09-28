import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "./firebase.js";

async function cadastrarVendas() {
  const venda = {
    nome: document.getElementById("nome").value,
    produto: document.getElementById("produto").value,
    cor: document.getElementById("cor").value,
    tamanho: document.getElementById("tamanho").value,
    quantidade: document.getElementById("quantidade").value,
    preco: document.getElementById("preco").value,
  }
  //colocar venda no database.
  try {
    await addDoc(collection(db, "vendas"), venda);
    alert(`venda realizada com sucesso!`);
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Não foi possível realizar a venda! , Erro: ", e)
  }

  document.getElementById("nome").value = "";
  document.getElementById("produto").value = "";
  document.getElementById("cor").value = "";
  document.getElementById("tamanho").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("preco").value = "";
}

const btn_vender = document.getElementById("btn_vender");

btn_vender.addEventListener('click', (event) => {
  event.preventDefault();
  cadastrarVendas();
})