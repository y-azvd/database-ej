<h1 align="center">
  <img src='/.github/db.png' width='100px'>
  Banco de Dados Empresa Júnior 
</h1>

<h5 align="center">
  Trabalho da disciplina Banco de Dados. Banco de dados para uma empresa júnior.
</h5>

#### Quem fez? | Autores:
[Edmundo Ribeiro](https://github.com/Edmundo-Ribeiro) | [Guilherme Castro](https://github.com/GuilhermeCstr) | [Ricardo Ito](https://github.com/Hidekon) | [Yudi Yamane](https://github.com/yudi-azvd)


### Para começar
0. baixe [Node.js](https://nodejs.org/en/)

1. baixe o repositório e execute `npm install` no terminal no diretório raíz do projeto.

2. crie um arquivo `.env` com o seguinte conteúdo: 
```
PSQL_USERNAME=meu_username
PSQL_PASSWORD=minha_senha
```
O que vem depois dos sinais de devem ser o username e a senha definidos no momento 
em que foi instalado o PostgreSQL. Além disso, certifique-se que o servidor postgres 
está rodando.

3. abra o terminal na pasta raíz e execute:
```
npm run populate-db
```
e depois
```
npm run watch
```

4. acesse o endereço <http://localhost:3000/clients> pelo navegador de sua preferência. 

5. mais rotas podem ser testadas e acessadas utlilizando o [Isomnia](https://insomnia.rest/).