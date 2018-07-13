//Aplicação utilizando framework Express e ejs para gerenciamento de views com NODEJS
//importando o express
var express = require('express');
var consign = require('consign'); //O consign é uma ferramenta que realiza a importacao de modulos automaticamente para a aplicacao
var bodyParser = require('body-parser');


var app = express();
app.set('view engine', 'ejs'); 
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

//inclusao interna do diretorio routes no projeto
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);

module.exports = app;