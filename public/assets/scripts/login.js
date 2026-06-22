// Endereço base da API do JSON Server
const API = "http://localhost:3000";

// Retorna o usuário logado guardado na sessionStorage (ou null)
function usuarioLogado() {
  const dado = sessionStorage.getItem("usuario");
  return dado ? JSON.parse(dado) : null;
}

// Guarda o usuário logado na sessionStorage
function salvarSessao(usuario) {
  sessionStorage.setItem("usuario", JSON.stringify(usuario));
}

// Encerra a sessão e volta para a home
function logout() {
  sessionStorage.removeItem("usuario");
  window.location.href = "index.html";
}

// Mostra ou esconde os itens do menu conforme o usuário logado
function atualizarMenu() {
  const usuario = usuarioLogado();
  const cadastro = document.getElementById("menu-cadastro");
  const favoritos = document.getElementById("menu-favoritos");
  const login = document.getElementById("menu-login");
  const sair = document.getElementById("menu-logout");
  const nome = document.getElementById("menu-usuario");

  // Estado padrão: visitante (não logado)
  if (cadastro) cadastro.style.display = "none";
  if (favoritos) favoritos.style.display = "none";
  if (sair) sair.style.display = "none";
  if (nome) nome.textContent = "";
  if (login) login.style.display = "";

  if (usuario) {
    if (login) login.style.display = "none";
    if (favoritos) favoritos.style.display = "";
    if (sair) sair.style.display = "";
    if (nome) nome.textContent = "Olá, " + usuario.nome;
    // A opção de cadastro de itens só aparece para administradores
    if (cadastro) cadastro.style.display = usuario.admin ? "" : "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  atualizarMenu();

  const sair = document.getElementById("menu-logout");
  if (sair) {
    sair.addEventListener("click", function (e) {
      e.preventDefault();
      logout();
    });
  }
});
