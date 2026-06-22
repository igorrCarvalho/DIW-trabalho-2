// A constante API e o controle de sessão ficam em login.js (carregado antes)

// Dados do autor do projeto (Seção 4 da home)
const autor = {
  nome: "Igor Costa Carvalho Campos Silva",
  curso: "Engenharia de Software",
  turma: "Manhã",
  sobre:
    "Estudante de Engenharia de Software na PUC Minas. " +
    "Este projeto é uma plataforma de vídeos criada para a disciplina de " +
    "Desenvolvimento de Interfaces Web, com os dados persistidos em JSON e " +
    "expostos por uma API REST com o JSON Server.",
  avatar: "",
  redes: {
    facebook: "#",
    twitter: "#"
  }
};

// Guarda a lista de vídeos carregada da API para reutilizar (ex.: pesquisa)
let videos = [];

// Favoritos do usuário logado carregados da API
let favoritos = [];

function formatarViews(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(".0", "") + " mi";
  if (n >= 1000) return Math.round(n / 1000) + " mil";
  return String(n);
}

function formatarData(dataIso) {
  const partes = dataIso.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

// Busca todos os vídeos no JSON Server
function buscarVideos() {
  return fetch(API + "/videos").then(function (resposta) {
    return resposta.json();
  });
}

// Busca um vídeo pelo id no JSON Server
function buscarVideo(id) {
  return fetch(API + "/videos/" + id).then(function (resposta) {
    if (!resposta.ok) return null;
    return resposta.json();
  });
}

// Carrega os favoritos do usuário logado (vazio se for visitante)
function carregarFavoritos() {
  const usuario = usuarioLogado();
  if (!usuario) {
    favoritos = [];
    return Promise.resolve();
  }
  return fetch(API + "/favoritos?usuarioId=" + usuario.id)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (data) {
      favoritos = data;
    });
}

// Retorna o registro de favorito de um vídeo, se existir
function acharFavorito(videoId) {
  return favoritos.find(function (f) {
    return String(f.videoId) === String(videoId);
  });
}

// Devolve a classe do ícone de coração conforme o vídeo seja favorito ou não
function iconeFavorito(videoId) {
  return acharFavorito(videoId) ? "bi-heart-fill" : "bi-heart";
}

// Marca ou desmarca um vídeo como favorito do usuário logado
function alternarFavorito(videoId) {
  const usuario = usuarioLogado();
  if (!usuario) {
    alert("Faça login para marcar favoritos.");
    window.location.href = "login.html";
    return;
  }

  const favorito = acharFavorito(videoId);

  if (favorito) {
    fetch(API + "/favoritos/" + favorito.id, { method: "DELETE" }).then(function () {
      favoritos = favoritos.filter(function (f) {
        return f.id !== favorito.id;
      });
      atualizarIconesFavorito();
    });
  } else {
    const novo = { usuarioId: usuario.id, videoId: videoId };
    fetch(API + "/favoritos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novo)
    })
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (data) {
        favoritos.push(data);
        atualizarIconesFavorito();
      });
  }
}

// Atualiza o desenho de todos os corações da página (cheio/vazio)
function atualizarIconesFavorito() {
  const botoes = document.querySelectorAll(".btn-favorito");
  botoes.forEach(function (botao) {
    const icone = botao.querySelector("i");
    icone.className = "bi " + iconeFavorito(botao.dataset.id);
  });

  // Se a página de favoritos definir esse gancho, atualiza a lista exibida
  if (typeof aoMudarFavoritos === "function") {
    aoMudarFavoritos();
  }
}

// Liga o clique nos botões de favorito (delegação de evento)
function ativarFavoritos() {
  document.addEventListener("click", function (e) {
    const botao = e.target.closest(".btn-favorito");
    if (!botao) return;
    e.preventDefault();
    alternarFavorito(botao.dataset.id);
  });
}

function montarCarrossel(lista) {
  const indicadores = document.getElementById("carousel-indicators");
  const interno = document.getElementById("carousel-inner");
  if (!interno) return;

  indicadores.innerHTML = "";
  interno.innerHTML = "";

  const destaques = lista.filter(function (v) {
    return v.destaque;
  });

  destaques.forEach(function (video, i) {
    const ativo = i === 0 ? "active" : "";

    indicadores.innerHTML +=
      '<button type="button" data-bs-target="#carouselDestaques" data-bs-slide-to="' +
      i +
      '" class="' +
      ativo +
      '" aria-label="Slide ' +
      (i + 1) +
      '"></button>';

    interno.innerHTML +=
      '<div class="carousel-item ' + ativo + '">' +
        '<a href="detalhes.html?id=' + video.id + '" class="carousel-link">' +
          '<img src="' + video.imagem + '" class="d-block w-100 carousel-img" alt="' + video.titulo + '">' +
          '<div class="carousel-caption text-start">' +
            '<span class="badge bg-danger mb-2">' + video.categoria + '</span>' +
            '<h3>' + video.titulo + '</h3>' +
            '<p class="d-none d-md-block">' + video.descricao + '</p>' +
            '<small>' + video.canal + ' · ' + formatarViews(video.views) + ' visualizações</small>' +
          '</div>' +
        '</a>' +
      '</div>';
  });
}

// Monta o HTML de um card de vídeo (reutilizado na home e nos favoritos)
function htmlCardVideo(video) {
  return (
    '<div class="col-12 col-sm-6 col-lg-4 col-xl-3">' +
      '<a href="detalhes.html?id=' + video.id + '" class="card-link">' +
        '<div class="card video-card h-100">' +
          '<div class="thumb-wrapper">' +
            '<img src="' + video.imagem + '" class="card-img-top" alt="' + video.titulo + '">' +
            '<span class="thumb-duracao">' + video.duracao + '</span>' +
            '<button type="button" class="btn-favorito" data-id="' + video.id + '" aria-label="Favoritar">' +
              '<i class="bi ' + iconeFavorito(video.id) + '"></i>' +
            '</button>' +
          '</div>' +
          '<div class="card-body">' +
            '<div class="card-head">' +
              '<img src="' + video.avatar + '" class="card-avatar" alt="' + video.canal + '">' +
              '<div>' +
                '<h3 class="card-title">' + video.titulo + '</h3>' +
                '<p class="card-canal">' + video.canal + '</p>' +
                '<p class="card-meta">' + formatarViews(video.views) + ' visualizações · ' + formatarData(video.data) + '</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</a>' +
    '</div>'
  );
}

function montarCards(lista) {
  const grade = document.getElementById("lista-videos");
  if (!grade) return;

  grade.innerHTML = "";

  if (lista.length === 0) {
    grade.innerHTML = '<p class="erro">Nenhum vídeo encontrado.</p>';
    return;
  }

  lista.forEach(function (video) {
    grade.innerHTML += htmlCardVideo(video);
  });
}

function montarAutor() {
  const sobre = document.getElementById("autor-sobre");
  if (!sobre) return;

  sobre.textContent = autor.sobre;
  document.getElementById("autor-avatar").src = autor.avatar;
  document.getElementById("autor-nome").textContent = autor.nome;
  document.getElementById("autor-curso").textContent = autor.curso;
  document.getElementById("autor-turma").textContent = autor.turma;
  document.getElementById("autor-facebook").href = autor.redes.facebook;
  document.getElementById("autor-twitter").href = autor.redes.twitter;
}

function obterIdDaUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function montarDetalhe() {
  const container = document.getElementById("detalhe-geral");
  if (!container) return;

  const id = obterIdDaUrl();

  Promise.all([buscarVideo(id), carregarFavoritos()]).then(function (resultados) {
    const video = resultados[0];
    if (!video) {
      container.innerHTML =
        '<p class="erro">Vídeo não encontrado. ' +
        '<a href="index.html">Voltar para a página inicial</a></p>';
      return;
    }

    document.title = video.titulo + " - VideoTube";

    container.innerHTML =
      '<div class="detalhe-grid">' +
        '<div class="detalhe-img">' +
          '<img src="' + video.imagem + '" alt="' + video.titulo + '">' +
        '</div>' +
        '<div class="detalhe-info">' +
          '<div class="detalhe-topo">' +
            '<span class="badge bg-danger mb-2">' + video.categoria + '</span>' +
            '<button type="button" class="btn-favorito btn-favorito--detalhe" data-id="' + video.id + '" aria-label="Favoritar">' +
              '<i class="bi ' + iconeFavorito(video.id) + '"></i>' +
            '</button>' +
          '</div>' +
          '<h1 class="detalhe-titulo">' + video.titulo + '</h1>' +
          '<div class="detalhe-canal">' +
            '<img src="' + video.avatar + '" alt="' + video.canal + '">' +
            '<span>' + video.canal + '</span>' +
          '</div>' +
          '<p class="detalhe-descricao">' + video.conteudo + '</p>' +
          '<ul class="detalhe-stats">' +
            '<li><strong>' + formatarViews(video.views) + '</strong><span>Visualizações</span></li>' +
            '<li><strong>' + formatarViews(video.likes) + '</strong><span>Curtidas</span></li>' +
            '<li><strong>' + video.duracao + '</strong><span>Duração</span></li>' +
            '<li><strong>' + formatarData(video.data) + '</strong><span>Publicado em</span></li>' +
          '</ul>' +
        '</div>' +
      '</div>';

    const galeria = document.getElementById("detalhe-fotos");
    galeria.innerHTML = "";
    (video.fotos || []).forEach(function (foto) {
      galeria.innerHTML +=
        '<div class="col-6 col-md-4 col-lg-3">' +
          '<figure class="foto-card">' +
            '<img src="' + foto.imagem + '" alt="' + foto.titulo + '">' +
            '<figcaption>' + foto.titulo + '</figcaption>' +
          '</figure>' +
        '</div>';
    });
  });
}

// Monta um gráfico de barras com a quantidade de vídeos por categoria
function montarGrafico(lista) {
  const canvas = document.getElementById("grafico-categorias");
  if (!canvas) return;

  const contagem = {};
  lista.forEach(function (v) {
    contagem[v.categoria] = (contagem[v.categoria] || 0) + 1;
  });

  const categorias = Object.keys(contagem);
  const valores = categorias.map(function (c) {
    return contagem[c];
  });

  new Chart(canvas, {
    type: "bar",
    data: {
      labels: categorias,
      datasets: [
        {
          label: "Quantidade de vídeos",
          data: valores,
          backgroundColor: "#3ea6ff"
        }
      ]
    },
    options: {
      plugins: {
        legend: { labels: { color: "#ccc" } }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1, color: "#ccc" },
          grid: { color: "#333" }
        },
        x: {
          ticks: { color: "#ccc" },
          grid: { color: "#333" }
        }
      }
    }
  });
}

// Filtra os vídeos pelo texto digitado (título ou descrição)
function filtrarVideos(termo) {
  const texto = termo.trim().toLowerCase();
  const filtrados = videos.filter(function (v) {
    return (
      v.titulo.toLowerCase().includes(texto) ||
      v.descricao.toLowerCase().includes(texto)
    );
  });
  montarCards(filtrados);
}

// Liga o campo de pesquisa ao filtro dos cards
function ativarPesquisa() {
  const busca = document.getElementById("busca-input");
  if (!busca) return;

  busca.addEventListener("input", function () {
    filtrarVideos(busca.value);
  });
}

// Inicializa a home (carrossel + cards) buscando os dados da API
function iniciarHome() {
  if (!document.getElementById("lista-videos")) return;

  Promise.all([buscarVideos(), carregarFavoritos()]).then(function (resultados) {
    videos = resultados[0];
    montarCarrossel(videos);
    montarCards(videos);
    montarGrafico(videos);
    ativarPesquisa();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  montarAutor();
  iniciarHome();
  montarDetalhe();
  ativarFavoritos();
});
