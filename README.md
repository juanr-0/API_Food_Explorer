 <<div align="center">
  ![image](https://github.com/juanr-0/Food_Explorer_front/assets/110058876/3a171fc3-e6c4-4c4c-9d95-5352f53e0d25)
</div>

## Sobre o Projeto

Este é o projeto do frontend do desafio final Food Explorer da plataforma Rocketseat. O projeto consiste em duas partes: frontend e backend.

## Detalhes

O projeto Food Explorer engloba uma aplicação web que tem como objetivo o cadastro de produtos em um banco de dados, possibilitando a edição desses produtos. Outra característica do projeto é a capacidade de criar uma conta e a autenticação é feita a partir de cookies e o JWT token. Dentro dos tipos de usuários existem o admin e o customer, cada um com acesso a informações e permissões diferentes.

Obs.: As funcionalidades do carrinho e favoritos ainda estão sendo implementadas.

## Layout

A página inicial pode ser vista nas imagens abaixo:

![image](https://github.com/juanr-0/Food_Explorer_front/assets/110058876/39f957d7-57d6-4914-96a9-ee4ae1137cf8)

![image](https://github.com/juanr-0/Food_Explorer_front/assets/110058876/8579f2a9-b02a-4be6-807b-bac6251063e8)


## Tecnologias

Nesse projeto foram utilizadas as seguintes tecnologias:

- [ReactJs](https://reactjs.org)
- [@phosphor-icons/react](https://phosphoricons.com)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [Vite](https://vitejs.dev/)
- [Knex](https://knexjs.org/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Nodemon](https://nodemon.io/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [SQLite](https://www.sqlite.org/index.html)
- [BCryptjs](https://www.npmjs.com/package/bcryptjs)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [pm2](https://pm2.keymetrics.io)
- [multer](https://www.npmjs.com/package/multer)
- [cors](https://www.npmjs.com/package/cors)
- [axios](https://www.npmjs.com/package/axios)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router Dom](https://react-icons.github.io/react-icons/)


## Como utilizar
Você pode baixar o arquivo compactado ou clonar o projeto para o diretório desejado.

```bash
$ git clone https://github.com/juanr-0/API_Food_Explorer.git
```
___

#### Executando o BackEnd
```bash
# No backend insira uma porta e um secret no arquivo .env vazio
  AUTH_SECRET=
  PORT=

# Abre diretamente a pasta no vsCode ou navegue até o diretório do BackEnd utilizando o comando no terminal
$ cd API_Food_Explorer

# Utilize o instalador de pacotes para instalar as dependências necessárias
$ npm install

# Para iniciar o servidor do backend utilize:
$ npm run dev
```
___

#### Executando o frontend
```bash

# Abre diretamente a pasta no vsCode ou navegue até o diretório do frontend utilizando o comando no terminal
$ git clone https://github.com/juanr-0/Food_Explorer_front.git

$ cd Food_Explorer_front

# Utilize o instalador de pacotes para instalar as dependências necessárias
$ npm install

# Para iniciar o servidor do frontend utilize:
$ npm run dev

# O endereço padrão utilizado está abaixo mas o próprio terminal ira fornecer o resto das informações

  http://localhost:5173/
```

#### OBS.: Para visualizar o modelo de Admin utilize a seguinte conta

```bash
  e-mail: juan@gmail.com
  senha: 123
```
___

O deploy do BackEnd foi feito no Render.
O deploy do BackEnd foi feito no Netlify.

___
<br>
 Depois de executar todas as etapas aguarde um pouco para que o backend inicie e utilize a aplicação.
<br>

[O site encontra-se hospedado aqui](https://quiet-zuccutto-0eff04.netlify.app)
