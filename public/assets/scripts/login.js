// Módulo de login e cadastro de usuários baseado no código da disciplina de
// Desenvolvimento de Interfaces Web (autor original: Rommel Vieira Carneiro),
// adaptado para o projeto VideoTube (campo "admin" e menu de navegação).
//
// Os usuários ficam no JSON Server e o usuário logado é mantido na sessionStorage.

// Endereço base da API do JSON Server (usado também pelo app.js e crud.js)
const API = "http://localhost:3000";
const apiUrlUsuarios = API + "/usuarios";

// Lista de usuários carregada da API e usuário atualmente logado
var db_usuarios = [];
var usuarioCorrente = {};

// Gera um id único (UUID) para novos usuários
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() {
  var d = new Date().getTime();
  var d2 = (performance && performance.now && performance.now() * 1000) || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

// Exibe uma mensagem na área de avisos (#msg), se existir na página
function displayMessage(mensagem) {
  const msg = document.getElementById("msg");
  if (msg) {
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + "</div>";
  }
}

// Inicializa o usuário corrente (da sessão) e a lista de usuários (da API)
function initLoginApp() {
  const usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");
  if (usuarioCorrenteJSON) {
    usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
  }

  fetch(apiUrlUsuarios)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      db_usuarios = data;
    })
    .catch(function (error) {
      console.error("Erro ao ler usuários via API JSONServer:", error);
      displayMessage("Erro ao ler usuários");
    });
}

// Verifica login e senha; se corretos, salva o usuário corrente na sessionStorage
function loginUser(login, senha) {
  for (var i = 0; i < db_usuarios.length; i++) {
    var usuario = db_usuarios[i];

    if (login == usuario.login && senha == usuario.senha) {
      usuarioCorrente = {
        id: usuario.id,
        login: usuario.login,
        nome: usuario.nome,
        email: usuario.email,
        admin: usuario.admin
      };
      sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
      return true;
    }
  }
  return false;
}

// Encerra a sessão e volta para a home
function logoutUser() {
  usuarioCorrente = {};
  sessionStorage.removeItem("usuarioCorrente");
  window.location.href = "index.html";
}

// Cadastra um novo usuário comum (admin = false) na API
function addUser(nome, login, senha, email) {
  let usuario = {
    id: generateUUID(),
    login: login,
    senha: senha,
    nome: nome,
    email: email,
    admin: false
  };

  return fetch(apiUrlUsuarios, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      db_usuarios.push(usuario);
      return data;
    });
}

// Retorna o usuário logado (ou null se for visitante)
function usuarioLogado() {
  return usuarioCorrente && usuarioCorrente.id ? usuarioCorrente : null;
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
      logoutUser();
    });
  }
});

// Inicializa as estruturas utilizadas pelo módulo de login
initLoginApp();
