const express = require('express');
const Question = require('../database/Questions');
const Response = require('../database/Responses');

const router = express.Router();


// criando rotas
router.get("/", (req,res) => {
  /* Buscando todas as linhas da tabela questions, e executando uma ação após a resposta | O objeto raw: true significa que a query tratá somente as linhas das colunas, e não parametros auxiliares. */
  Question.findAll({raw: true, order:[
    ['id','DESC'] // ordenando por id decrescente
  ]}).then(questions => {
    res.render("index", {
      questions: questions,
    });
  })
});

router.get("/question", (req,res) => {
  res.render("questions");
});

router.post("/question/save", (req,res) => {
  let username = req.body.username;
  let description = req.body.description;
  let title = req.body.title;
  
  Question.create({
    username: username,
    title: title,
    description: description,
    
  }).then(() => {
    res.redirect("/");
  });
});

router.get("/question/:id", (req,res) => {
  id = req.params.id;

  Question.findOne({
    where: {id: id}
  }).then(question => {
    if(question != undefined){ // pergunta encontrada
      Response.findAll({
        where: {questionId: question.id},
        order: [
          ['id', 'DESC']
        ]
      }).then(responses => {
        res.render('question', {
          question: question,
          responses: responses
        });
      });

    } else { // pergunta não encontrada
      res.redirect('/');
    };

  });
});

router.post("/response", (req,res) => {
  let {username, body, questionId } = req.body;

  Response.create({
    username: username,
    body: body,
    questionId: questionId
  }).then(() => {
    res.redirect(`/question/${questionId}`);
  });



});
module.exports = router;