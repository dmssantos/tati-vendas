import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import {db} from "./firebase.js";


async function cadastrarClientes() {
  const cliente = {
    nome: document.getElementById("nome").value,
    contato: document.getElementById("contato").value,
    endereco: document.getElementById("endereco").value,
    descricao: document.getElementById("descricao").value,
  }
  //colocar cliente no database.
  try {
    await addDoc(collection(db, "clientes"), cliente);
    alert(`Cliente ${cliente.nome} cadastrado com sucesso!`);
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Não foi possível cadastrar! , Erro: ", e)
  }
  
  document.getElementById("nome").value = "";
  document.getElementById("contato").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("descricao").value = "";
}

const btn_cadastrar = document.getElementById("btn_cadastrar");

btn_cadastrar.addEventListener('click', (event) => {
  event.preventDefault();
  cadastrarClientes();
})