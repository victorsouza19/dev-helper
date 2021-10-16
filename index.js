const { urlencoded } = require("express");
const express = require("express");
const app = express();
const connection = require("./database/database");
const Questions = require("./database/Questions");
const Response = require("./database/Responses");

// database connection
connection
  .authenticate()
  .then(() => {
    console.log("Database connected!")
  })
  .catch((error) =>{
    console.log(error);
  })

// configurando o ejs como view engine
app.set('view engine', 'ejs');

// configurando o diretório onde os arquivos serão visíveis
app.use(express.static('public'));

// configurando o recebimento dos dados do formulário
app.use(urlencoded({extended: true}));
app.use(express.json());

//apontando as rotas
app.use('/', require("./routes/pages"));

// rodando o servidor
app.listen(8080, () => {
  console.log("Server running!");
})