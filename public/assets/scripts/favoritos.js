// Página de favoritos: mostra os vídeos marcados como favoritos pelo usuário
// logado. Reutiliza funções definidas em app.js (carregarFavoritos,
// buscarVideo, htmlCardVideo) e em login.js (usuarioLogado).

// Monta a grade com os vídeos favoritos do usuário
function montarFavoritos() {
  const grade = document.getElementById("lista-favoritos");
  if (!grade) return;

  carregarFavoritos().then(function () {
    if (favoritos.length === 0) {
      grade.innerHTML =
        '<p class="erro">Você ainda não marcou nenhum vídeo como favorito.</p>';
      return;
    }

    // Busca cada vídeo favoritado pelo seu id
    const buscas = favoritos.map(function (f) {
      return buscarVideo(f.videoId);
    });

    Promise.all(buscas).then(function (lista) {
      grade.innerHTML = "";
      lista.forEach(function (video) {
        if (video) {
          grade.innerHTML += htmlCardVideo(video);
        }
      });
    });
  });
}

// Gancho chamado pelo app.js quando os favoritos mudam (ao desmarcar um item)
function aoMudarFavoritos() {
  montarFavoritos();
}

document.addEventListener("DOMContentLoaded", function () {
  // A página de favoritos exige usuário logado
  if (!usuarioLogado()) {
    alert("Faça login para ver seus favoritos.");
    window.location.href = "login.html";
    return;
  }
  montarFavoritos();
});
