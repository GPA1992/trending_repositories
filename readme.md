# Trending Repositories

## Descrição

O projeto Trending Repositories é uma aplicação fullstack responsável por coletar, armazenar e listar os repositórios que estão em destaque na página https://github.com/trending , utilizando a API https://api.github.com/.
A aplicação pode ser rodada localmente ou conteinerizada com o docker, o backend foi construído com nodejs, express e sequelize e tem a função de atualizar a cada hora a lista de repositórios que estão em destaque das linguagens: TypeSCript, JavaScript, Python, Java, PHP. O frontend foi construído com react.


<br>

# Instalação e comandos

<br>

## Dependencias

> -   Rode o comando `npm install` na raiz do projeto

<br>

## Docker

Para rodar com o docker, basta definir as variáveis de ambiente e as portas de acordo com a escolha do usuário dentro do docker-compose no diretório `src/app` e digitar o comando `docker-compose up -d --build` no terminal.

-   Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
-   Para parar o mysql digite: `systemctl stop mysql`

-   Serão iniciados os containers: `app_backend`, `app_frontend` e `db`  

-   A partir daqui os 3 containers estarão em funcionamento.

> Use o comando `docker exec -it <NOME_DO_CONTAINER> bash`.

-   Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

-   Dentro do container rode os comandos abaixo de acordo com a sua necessidade.

<br>

# Comandos

> ### npm start

-   Comando para rodar a API

> ### npm run db:init

-   Com esse comando a DB é criada e alimentada de acordo com as migrations e seeds que estão em src/database. Na seed contém o dado de um usuario 'root', que vai dar permissão para execução de todos os endpoint.

> ### npm run db:reset

-   Com esse comando a DB é dropada, reinicializada e alimentada de acordo com as migrations e seeds que estão em src/database. Na seed contém o dado de um usuario 'root', que vai dar permissão para execução de todos os endpoint.

> ### npm run dev

-   Com esse comando o servidor é iniciado com o nodemon, que é uma ferramenta que permite que seja feito alterações em tempo real, sem a necessidade de resetar a API para checar as mudanças.

<br>

# Bibliotecas.

## SwagerUI

Para facilitar o entendimento do funcionamento de todos os endpoints e a dinâmica entre eles, essa API conta com um painel do SwagerUI, que demonstra cada endpoint e expõe a sua funcionalidade.

<a href="https://swagger.io/">Swagger</a>

Endpoints:

-   POST: /user
-   POST: /login
-   POST: /cpf
-   GET: /cpf
-   GET: /cpf/{cpf}
-   DELETE: /cpf/{CPF}

Para ter acesso a descrição detalhada de cada um, após rodar o projeto acesse:
<br>

> ### localhost+`PORTA`+/documentation/.

 <br>

Por padrão o projeto esta rodando na porta 3000.

> ### http://localhost:3000/documentation/

## CPF Check

Para validar os CPF que são inseridos, foi usado a biblioteca CPF Check, que gera, valida e formata o CPF, nessa aplicação foi usada apenas a função de validação.

<a href="https://www.npmjs.com/package/cpf-check">cpf-check</a>

## JsonWebToken

Para fazer a validação de login dos usuários que têm autorização foi utilizado a biblioteca JWT, que retorna um token de acordo o login que é realizado.

<a href="https://www.npmjs.com/package/jsonwebtoken">JWT</a>

## BCRYPT

Para fazer a criptografia das senhas, foi usado a biblioteca node.bcrypt.js, que faz a codificação da senha de entrada e o modo reverso no middleware de verificação de login.

<a href="https://www.npmjs.com/package/bcrypt">bcrypt</a>
