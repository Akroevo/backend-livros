# Backend - API de Livros

API REST para CRUD de livros com Node.js, Express e MongoDB.

## Instalação

```bash
git clone https://github.com/SEU_USUARIO/backend-livros.git
cd backend-livros
npm install
```

## Configuração

Crie um arquivo `.env` na raiz:

```
PORT=3000
MONGO_URI=sua_string_de_conexao_mongodb
```

## Execução

```bash
npm run dev
```

## Rotas

| Método | Rota            | Descrição             |
|--------|-----------------|-----------------------|
| GET    | /api/livros     | Lista todos os livros |
| GET    | /api/livros/:id | Busca livro por ID    |
| POST   | /api/livros     | Cadastra novo livro   |
| PUT    | /api/livros/:id | Atualiza um livro     |
| DELETE | /api/livros/:id | Remove um livro       |
