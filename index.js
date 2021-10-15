const express = require("express");
const app = express();

// configurando o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// criando rotas
app.get("/:nome/:lang", (req,res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = true;

  var perguntas = [
    {description: "O que é Node.JS?", number: 1},{description: "O que é Javascript?", number: 2},{description: "O que é EJS?", number: 3}
  ];
  res.render("index", {
    nome: nome, lang: lang, msg: exibirMsg, 
    produtos: perguntas
  });
});

// rodando o servidor
app.listen(8080, () => {
  console.log("Server running!");
})