const btnLogin = document.getElementById("btn_login");

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const inputLogin = document.getElementById("login_name").value;
  const inputPassword = document.getElementById("password").value;

  if (inputLogin !== "tatiane") {
    alert("login Inválido!");
  } else if (inputPassword !== "1920") {
    alert("Senha Inválida")
  } else {
    //enviar para outra tela.
    window.location.href = 'menu.html'
  }
})

