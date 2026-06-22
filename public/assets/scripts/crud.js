// Módulo de CRUD de itens (vídeos) baseado no código da disciplina de
// Desenvolvimento de Interfaces Web (autor original: Rommel Vieira Carneiro),
// adaptado para o projeto VideoTube.
//
// Usa a API REST do JSON Server. A constante API e displayMessage vêm do login.js.

const apiUrlVideos = API + "/videos";

// Lê todos os vídeos e passa o resultado para a função processaDados
function readVideo(processaDados) {
  fetch(apiUrlVideos)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      processaDados(data);
    })
    .catch(function (error) {
      console.error("Erro ao ler vídeos via API JSONServer:", error);
      displayMessage("Erro ao ler vídeos");
    });
}

// Insere um novo vídeo
function createVideo(video, refreshFunction) {
  fetch(apiUrlVideos, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(video)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      displayMessage("Vídeo inserido com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch(function (error) {
      console.error("Erro ao inserir vídeo via API JSONServer:", error);
      displayMessage("Erro ao inserir vídeo");
    });
}

// Altera um vídeo existente (PATCH preserva os campos não enviados, como as fotos)
function updateVideo(id, video, refreshFunction) {
  fetch(apiUrlVideos + "/" + id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(video)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      displayMessage("Vídeo alterado com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch(function (error) {
      console.error("Erro ao atualizar vídeo via API JSONServer:", error);
      displayMessage("Erro ao atualizar vídeo");
    });
}

// Remove um vídeo
function deleteVideo(id, refreshFunction) {
  fetch(apiUrlVideos + "/" + id, {
    method: "DELETE"
  })
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      displayMessage("Vídeo removido com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch(function (error) {
      console.error("Erro ao remover vídeo via API JSONServer:", error);
      displayMessage("Erro ao remover vídeo");
    });
}
