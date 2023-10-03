import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "../../scripts/firebase.js";



function construtor_lista(fornecedor) {
  let lista = document.getElementById("content").innerHTML
  lista +=
    `
  <ul>
      <li class=" lista_content nome">${fornecedor.nome}</li>
      <li class=" lista_content contato">${fornecedor.contato}</li>
      <li class=" lista_content endereco">${fornecedor.endereco}</li>
      <li class=" lista_content descricao">${fornecedor.descricao}</li>
    </ul>
  `
  document.getElementById("content").innerHTML = lista;
}

const foenecedoresData = await getDocs(collection(db, "fornecedores"));
foenecedoresData.forEach((fornecedorData) => {
  const fornecedor = fornecedorData.data();
  construtor_lista(fornecedor)
});


