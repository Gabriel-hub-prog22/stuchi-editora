# Stuchi Editora - Backend

Backend desenvolvido com NestJS, Prisma e PostgreSQL.

## Pré-requisitos
- Node.js (v18+)
- PostgreSQL (Instância local ou remota)

## Instalação

1. Entre na pasta `backend`:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Copie o arquivo de exemplo:
     ```bash
     cp .env.example .env
     ```
   - Edite o arquivo `.env` e preencha `DATABASE_URL` com sua string de conexão do PostgreSQL.

## Banco de Dados

1. Execute as migrações para criar as tabelas:
   ```bash
   npx prisma migrate dev --name init
   ```

2. Popule o banco com o usuário Admin inicial:
   ```bash
   npm run seed
   ```
   *Credenciais criadas: admin@stuchieditora.com / Admin@12345*

## Execução

1. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```
   O backend rodará em `http://localhost:3000`.

## Uso e Testes

- Utilize o arquivo `requests.http` (recomendado usar a extensão "REST Client" no VSCode) para testar as rotas.
- O Frontend deve apontar para `http://localhost:3000`.

## Deploy

- Build de produção: `npm run build`
- Rodar em produção: `npm run start:prod`
- Certifique-se de configurar as variáveis de ambiente no servidor de produção.
