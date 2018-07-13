//Recupera a funcao retornada
var dbConnection = require('../../config/dbConnection.js');

module.exports = function(app){
	
	//Executa a funcao que realiza a conexao
	var connection = dbConnection();

	app.get('/noticias', function(req,res){

		//executando uma chamada de acesso ao banco de dados
		connection.query('select * from noticias', function(error, result){
			res.render("noticias/noticias", {noticias : result});
		});
	});
};