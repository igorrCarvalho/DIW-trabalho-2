# DIW - Trabalho Prático 2 (VideoTube)

Aluno: Igor Costa Carvalho Campos Silva
Matrícula: 767375

Plataforma de vídeos (VideoTube) com front-end estático e back-end de API REST
provido pelo JSON Server. Os dados ficam em `db/db.json` e os arquivos do site em
`public/`.

## Como rodar

Pré-requisito: Node.js instalado.

1. Instale as dependências:

   ```
   npm install
   ```

2. Suba o servidor (API + site):

   ```
   npm start
   ```

3. Acesse no navegador:

   ```
   http://localhost:3000
   ```

O JSON Server serve a API (`/videos`, `/usuarios`, `/favoritos`) e os arquivos da
pasta `public` no mesmo endereço.

## Usuários para teste

| Login | Senha | Admin |
|-------|-------|-------|
| admin | 123   | sim   |
| user  | 123   | não   |

Apenas usuários administradores veem o menu **Cadastro** e acessam o CRUD de vídeos.
Para tornar outro usuário administrador, edite o campo `admin` para `true` no
arquivo `db/db.json`.

## Funcionalidades

- Home com carrossel de destaques, cards de vídeos e gráfico de vídeos por categoria
- Dados obtidos da API REST do JSON Server
- Pesquisa de vídeos por título ou descrição
- Login e cadastro de usuários (sessão mantida no `sessionStorage`)
- Marcação de favoritos (coração) nos cards e na página de detalhes
- Página de favoritos do usuário logado
- CRUD de vídeos para administradores
- Página de detalhes do vídeo com galeria de fotos
- Layout responsivo (desktop e mobile)

## Estrutura

```
db/
   db.json
public/
   index.html
   login.html
   cadastro_itens.html
   detalhes.html
   favoritos.html
   assets/
      css/styles.css
      scripts/app.js, login.js, crud.js, favoritos.js
package.json
```

## Créditos

O módulo de login (`login.js`) e o de CRUD (`crud.js`) são baseados no código
disponibilizado na disciplina (autor original: Rommel Vieira Carneiro), adaptados
para o projeto VideoTube.
