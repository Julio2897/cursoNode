module.exports = function(app){	

	app.get('/noticias', function(req,res){
		
		//incorporando o modulo mysql a aplicacao
		var mysql = require('mysql');
		//estabelecendo a conexao
		var connection = mysql.createConnection({
			host: 'localhost', //endereco da conexao
			user: 'root',
			password: 'root',
			database: 'portal_noticias'
		});
		//executando uma chamada de acesso ao banco de dados
		connection.query('select * from noticias', function(error, result){
			res.render("noticias/noticias", {noticias : result});
		});
	});
};