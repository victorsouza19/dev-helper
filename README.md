<h1> Fala dev, seja bem vindo ao {dev}.helper ! :wave: </h1>
<p align="right">
  <a href="https://www.linkedin.com/in/victorsouza19/" target="_blank" alt="Linkedin">
   <img src="https://img.shields.io/badge/-Linkedin-1C1C1C?style=for-the-badge&logo=Linkedin&logoColor=00FFFF&link=https://www.linkedin.com/in/victorsouza19/"/>
  </a>
</p>

<h4> Este é um repositório focado em aprofundar os estudos em Node.JS, e nele desenvolvemos uma plataforma de perguntas e respostas(estilo Yahoo e ask.fm) responsiva incluindo  algumas funcionalidades a mais, como o dark mode, onde o usuário pode optar por qual tema deseja. Este projeto foi criado com base no protótipo da Formação NodeJS, proporcionada pelo Victor Lima, do canal Guia do Programador. </h4>


  
  ### Tecnologias usadas:
 <div align="center">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">  
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-plain.svg">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-plain.svg">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg">
</div><br>

<h2> Projeto </h2>
 <br>

> Light Mode(default)
> 
![image](https://user-images.githubusercontent.com/71740612/137602807-20dc8bc8-55fe-47d2-bfb3-4bf24f55e03e.png)

<br>

> Dark Mode
> 
![image](https://user-images.githubusercontent.com/71740612/137602923-86a5baab-56de-4bcd-8a01-c6d974732fcb.png)

<br><br>

> Telas mobile
> 
<div style="display= "flex"; justify-content: "space-between"; ">
<img src="https://user-images.githubusercontent.com/71740612/137603018-855d62e0-165a-4e7b-88a5-5e1f6c14f58d.png" alt="devhelper-photo"> 
<img src="https://user-images.githubusercontent.com/71740612/137603022-8ffee10d-d47d-4590-b178-d11b4fdbfa62.png" alt="devhelper-photo"> 
</div>

##

<div align="left">
  Basicamente, o foco do projeto foi no back-end, buscando entender melhor os conceitos do Node.JS, na aplicação algumas implementações diferentes foram feitas, além do protótipo original desenvolvido na Formação NodeJS, e trabalhando com as bibliotecas do Express, foi possível adquirir muito conhecimento. Para a conexão com o banco de dados utilizamos o ORM Sequelize, que possibilita que os devs que não possuem muito conhecimento da sintaxe SQL possam trabalhar com Banco de dados sem problemas, visto que o Sequelize utiliza a linguagem javascript para se comunicar. Além disso, houveram algumas outras implementações, que tornaram o projeto exclusivo, e uma versão melhorada do protótipo original, cujas foram:
<br><br>
  
 - **Dark mode:** Via Javascript, é possível o usuário escolher o tema que deseja(light ou dark), após a escolha, através do localStorage é armazenado a sua preferência, para que ao recarregar ou ir para outras páginas, sua escolha se mantenha salva. 
 - **Express Router:** No protótipo original, todas as rotas estavam organizadas no arquivo js raiz(index.js), o que torna o código poluido de certa forma. Através do Express Router, foi configurado no diretório router, uma parte exclusivamente para tratar as rotas do projeto.
 - **Verificação de campos de formulário:** No protótipo original, não existia a validação dos campos de formulário, logo o usuário conseguia enviar sua pergunta sem nenhum campo preenchido, isso foi resolvido com o atributo <code>required</code> dentro dos inputs.
 - **Estilização personalizada:** Buscando obter um projeto exclusivo, foi feita uma estilização das páginas de forma personalizada, com cores diferentes do projeto original.
 - **Inserir username do GitHub na pergunta e resposta:** Para tornar as perguntas e respostas mais amigáveis, foi inserido o campo de username do github(não opcional), logo, se o usuário preencher o campo com um username válido, sua foto é carregada, caso contrário é carregado uma imagem default.
</div>

<h2> Quer contribuir? :raised_hands: </h2>
 <br>
 
 Este é um respositório público, logo você está livre para ter uma cópia do projeto,  e se achar algum problema ou tiver alguma contribuição, pode fazer um **fork** do projeto, e sinta-se a vontade para fazer um **pull request**.
 
 Para rodar a aplicação, você precisará:
 - Ajustar o arquivo <code>database.js</code> de acordo com o seu banco de dados.
 - Importar as bibliotecas e dependências com <code>npm install</code> na pasta do projeto.
 - É recomendado ter o nodemon instalado na sua máquina, caso não tenha, pode instalar globalmente com  <code>npm install -g nodemon</code> e rodar o arquivo index.js para iniciar o servidor express com o comando <code>nodemon index.js</code> na pasta raiz do projeto. (Caso não tenha basta executar  <code>node index.js</code>, mas caso você faça alterações terá que reiniciar o servidor novamente).

<br><br><br>
<div align="center">
  <p>Feito com :blue_heart: e :coffee: por <strong>Victor Souza</strong></p>
</div>














