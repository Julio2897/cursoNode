//Recupera a funcao retornada
//var dbConnection = require('../../config/dbConnection.js');

module.exports = function(app){

	app.get('/noticias', function(req,res){

		//Executa a funcao que realiza a conexao
		var connection = app.config.dbConnection(); //agora vai executar somente quando a rota for requisitada

		//executando uma chamada de acesso ao banco de dados
		connection.query('select * from noticias', function(error, result){
			res.render("noticias/noticias", {noticias : result});
		});
	});
};