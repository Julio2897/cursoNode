//Aplicação utilizando framework Express com NODEJS
//importando o express
var express = require('express');
var app = express();

app.set('view engine', 'ejs'); 

app.get('/', function(req,res){

	res.send("<html><body>Portal de Noticias</body></html>")
});

app.get('/tecnologia', function(req,res){

	res.send("<html><body>Noticias de Tecnologia</body></html>")
})

app.get('/moda', function(req,res){

	res.send("<html><body>Noticias de Moda</body></html>")
})

app.get('/beleza', function(req,res){

	res.send("<html><body>Noticias de Beleza</body></html>")
})

app.listen(3000, function(){

	console.log('Servidor funcionando com Express');

});