const dados = {
  autor: {
    nome: "Igor Carvalho",
    curso: "Engenharia de Software",
    turma: "Manhã",
    sobre:
      "Estudante de Engenharia de Software. " +
      "Este projeto é uma plataforma de vídeos criada para a disciplina de " +
      "Desenvolvimento de Interfaces Web, com conteúdo montado dinamicamente a " +
      "partir de uma estrutura JSON e JavaScript.",
    avatar: "https://picsum.photos/seed/autor/120/120",
    redes: {
      facebook: "#",
      twitter: "#"
    }
  },

  videos: [
    {
      id: 1,
      titulo: "Explorando as Montanhas dos Alpes",
      canal: "Adventure TV",
      avatar: "https://picsum.photos/seed/canal1/48/48",
      descricao: "Uma viagem incrível pelas trilhas mais bonitas dos Alpes europeus.",
      conteudo:
        "Neste vídeo acompanhamos uma expedição de 5 dias pelas montanhas dos Alpes. " +
        "Mostramos as melhores trilhas, dicas de equipamento e paisagens de tirar o fôlego. " +
        "Ideal para quem ama natureza e aventura ao ar livre.",
      categoria: "Viagem",
      destaque: true,
      data: "2026-05-20",
      duracao: "12:45",
      views: 124000,
      likes: 8900,
      imagem: "https://picsum.photos/seed/video1/640/360",
      fotos: [
        { id: 1, titulo: "Vista do topo da montanha", imagem: "https://picsum.photos/seed/v1f1/400/240" },
        { id: 2, titulo: "Trilha entre as árvores", imagem: "https://picsum.photos/seed/v1f2/400/240" },
        { id: 3, titulo: "Acampamento ao pôr do sol", imagem: "https://picsum.photos/seed/v1f3/400/240" },
        { id: 4, titulo: "Lago cristalino", imagem: "https://picsum.photos/seed/v1f4/400/240" }
      ]
    },
    {
      id: 2,
      titulo: "Cozinhando em Casa: Massa Italiana",
      canal: "Chef Online",
      avatar: "https://picsum.photos/seed/canal2/48/48",
      descricao: "Aprenda a fazer uma autêntica massa italiana caseira do zero.",
      conteudo:
        "Receita completa de massa italiana feita à mão. Ensinamos o ponto certo da " +
        "massa, o molho tradicional e dicas para impressionar a família no jantar.",
      categoria: "Culinária",
      destaque: true,
      data: "2026-05-18",
      duracao: "08:30",
      views: 54000,
      likes: 4200,
      imagem: "https://picsum.photos/seed/video2/640/360",
      fotos: [
        { id: 1, titulo: "Ingredientes frescos", imagem: "https://picsum.photos/seed/v2f1/400/240" },
        { id: 2, titulo: "Massa sendo preparada", imagem: "https://picsum.photos/seed/v2f2/400/240" },
        { id: 3, titulo: "Prato finalizado", imagem: "https://picsum.photos/seed/v2f3/400/240" }
      ]
    },
    {
      id: 3,
      titulo: "Caminhada Noturna pela Cidade",
      canal: "Urban Walks",
      avatar: "https://picsum.photos/seed/canal3/48/48",
      descricao: "Passeio relaxante pelas ruas iluminadas do centro da cidade.",
      conteudo:
        "Um tour noturno pelas principais avenidas e pontos turísticos da cidade. " +
        "Som ambiente real, sem narração, perfeito para relaxar e estudar.",
      categoria: "Lifestyle",
      destaque: true,
      data: "2026-05-15",
      duracao: "25:10",
      views: 31000,
      likes: 2100,
      imagem: "https://picsum.photos/seed/video3/640/360",
      fotos: [
        { id: 1, titulo: "Avenida iluminada", imagem: "https://picsum.photos/seed/v3f1/400/240" },
        { id: 2, titulo: "Praça central à noite", imagem: "https://picsum.photos/seed/v3f2/400/240" },
        { id: 3, titulo: "Reflexos na rua molhada", imagem: "https://picsum.photos/seed/v3f3/400/240" },
        { id: 4, titulo: "Letreiros neon", imagem: "https://picsum.photos/seed/v3f4/400/240" }
      ]
    },
    {
      id: 4,
      titulo: "Aprenda CSS do Zero",
      canal: "Code Academy",
      avatar: "https://picsum.photos/seed/canal4/48/48",
      descricao: "Tutorial completo de CSS para iniciantes em desenvolvimento web.",
      conteudo:
        "Curso introdutório de CSS cobrindo seletores, box model, flexbox e grid. " +
        "Com exemplos práticos e exercícios para fixar o conteúdo.",
      categoria: "Tecnologia",
      destaque: false,
      data: "2026-05-10",
      duracao: "45:00",
      views: 89000,
      likes: 7600,
      imagem: "https://picsum.photos/seed/video4/640/360",
      fotos: [
        { id: 1, titulo: "Editor de código", imagem: "https://picsum.photos/seed/v4f1/400/240" },
        { id: 2, titulo: "Exemplo de flexbox", imagem: "https://picsum.photos/seed/v4f2/400/240" },
        { id: 3, titulo: "Resultado no navegador", imagem: "https://picsum.photos/seed/v4f3/400/240" }
      ]
    },
    {
      id: 5,
      titulo: "Rotina Matinal Produtiva",
      canal: "Daily Vlogs",
      avatar: "https://picsum.photos/seed/canal5/48/48",
      descricao: "Dicas para começar o dia com mais energia e foco.",
      conteudo:
        "Compartilho minha rotina matinal completa: exercícios, café da manhã " +
        "saudável e organização do dia. Pequenos hábitos que fazem diferença.",
      categoria: "Lifestyle",
      destaque: false,
      data: "2026-05-08",
      duracao: "10:20",
      views: 18000,
      likes: 1500,
      imagem: "https://picsum.photos/seed/video5/640/360",
      fotos: [
        { id: 1, titulo: "Café da manhã saudável", imagem: "https://picsum.photos/seed/v5f1/400/240" },
        { id: 2, titulo: "Alongamento matinal", imagem: "https://picsum.photos/seed/v5f2/400/240" }
      ]
    },
    {
      id: 6,
      titulo: "Tutorial de Violão para Iniciantes",
      canal: "Music Hub",
      avatar: "https://picsum.photos/seed/canal6/48/48",
      descricao: "Seus primeiros acordes no violão de forma simples e prática.",
      conteudo:
        "Aula passo a passo para quem nunca tocou violão. Ensinamos os acordes " +
        "básicos, a postura correta e uma música simples para você praticar.",
      categoria: "Música",
      destaque: false,
      data: "2026-05-05",
      duracao: "18:55",
      views: 42000,
      likes: 3800,
      imagem: "https://picsum.photos/seed/video6/640/360",
      fotos: [
        { id: 1, titulo: "Posição dos dedos", imagem: "https://picsum.photos/seed/v6f1/400/240" },
        { id: 2, titulo: "Violão em close", imagem: "https://picsum.photos/seed/v6f2/400/240" },
        { id: 3, titulo: "Praticando os acordes", imagem: "https://picsum.photos/seed/v6f3/400/240" }
      ]
    },
    {
      id: 7,
      titulo: "Pôr do Sol em Time-lapse",
      canal: "Nature Films",
      avatar: "https://picsum.photos/seed/canal7/48/48",
      descricao: "A beleza do entardecer capturada em câmera acelerada.",
      conteudo:
        "Um time-lapse hipnotizante do pôr do sol em diferentes locais. " +
        "Imagens em alta resolução com trilha sonora relaxante.",
      categoria: "Natureza",
      destaque: false,
      data: "2026-05-02",
      duracao: "04:30",
      views: 67000,
      likes: 5900,
      imagem: "https://picsum.photos/seed/video7/640/360",
      fotos: [
        { id: 1, titulo: "Céu alaranjado", imagem: "https://picsum.photos/seed/v7f1/400/240" },
        { id: 2, titulo: "Sol no horizonte", imagem: "https://picsum.photos/seed/v7f2/400/240" },
        { id: 3, titulo: "Estrelas surgindo", imagem: "https://picsum.photos/seed/v7f3/400/240" }
      ]
    },
    {
      id: 8,
      titulo: "Treino de 20 Minutos em Casa",
      canal: "Fit Life",
      avatar: "https://picsum.photos/seed/canal8/48/48",
      descricao: "Exercícios sem equipamento para fazer em qualquer lugar.",
      conteudo:
        "Treino completo de corpo inteiro em apenas 20 minutos, sem precisar de " +
        "academia ou equipamentos. Ideal para a rotina corrida do dia a dia.",
      categoria: "Esporte",
      destaque: false,
      data: "2026-04-28",
      duracao: "20:00",
      views: 95000,
      likes: 8100,
      imagem: "https://picsum.photos/seed/video8/640/360",
      fotos: [
        { id: 1, titulo: "Aquecimento", imagem: "https://picsum.photos/seed/v8f1/400/240" },
        { id: 2, titulo: "Exercício de força", imagem: "https://picsum.photos/seed/v8f2/400/240" },
        { id: 3, titulo: "Alongamento final", imagem: "https://picsum.photos/seed/v8f3/400/240" }
      ]
    }
  ]
};

function formatarViews(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(".0", "") + " mi";
  if (n >= 1000) return Math.round(n / 1000) + " mil";
  return String(n);
}

function formatarData(dataIso) {
  const partes = dataIso.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function montarCarrossel() {
  const indicadores = document.getElementById("carousel-indicators");
  const interno = document.getElementById("carousel-inner");
  if (!interno) return;

  const destaques = dados.videos.filter(function (v) {
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

function montarCards() {
  const lista = document.getElementById("lista-videos");
  if (!lista) return;

  dados.videos.forEach(function (video) {
    lista.innerHTML +=
      '<div class="col-12 col-sm-6 col-lg-4 col-xl-3">' +
        '<a href="detalhes.html?id=' + video.id + '" class="card-link">' +
          '<div class="card video-card h-100">' +
            '<div class="thumb-wrapper">' +
              '<img src="' + video.imagem + '" class="card-img-top" alt="' + video.titulo + '">' +
              '<span class="thumb-duracao">' + video.duracao + '</span>' +
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
      '</div>';
  });
}

function montarAutor() {
  const sobre = document.getElementById("autor-sobre");
  if (!sobre) return;

  const a = dados.autor;
  sobre.textContent = a.sobre;

  document.getElementById("autor-avatar").src = a.avatar;
  document.getElementById("autor-nome").textContent = a.nome;
  document.getElementById("autor-curso").textContent = a.curso;
  document.getElementById("autor-turma").textContent = a.turma;
  document.getElementById("autor-facebook").href = a.redes.facebook;
  document.getElementById("autor-twitter").href = a.redes.twitter;
}

function obterIdDaUrl() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

function montarDetalhe() {
  const container = document.getElementById("detalhe-geral");
  if (!container) return;

  const id = obterIdDaUrl();
  const video = dados.videos.find(function (v) {
    return v.id === id;
  });

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
        '<span class="badge bg-danger mb-2">' + video.categoria + '</span>' +
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
  video.fotos.forEach(function (foto) {
    galeria.innerHTML +=
      '<div class="col-6 col-md-4 col-lg-3">' +
        '<figure class="foto-card">' +
          '<img src="' + foto.imagem + '" alt="' + foto.titulo + '">' +
          '<figcaption>' + foto.titulo + '</figcaption>' +
        '</figure>' +
      '</div>';
  });
}

document.addEventListener("DOMContentLoaded", function () {
  montarCarrossel();
  montarCards();
  montarAutor();
  montarDetalhe();
});
