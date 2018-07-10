//Aplicação utilizando framework Express e ejs para gerenciamento de views com NODEJS
//importando o express
var express = require('express');
var app = express();

app.set('view engine', 'ejs'); 

app.get('/', function(req,res){
	//utilizando as chamadas com ejs
	res.render('home/index');
});

app.get('/formulario_inclusao_noticia', function(req,res){

	res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req,res){

	res.render("noticias/noticias");
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});

