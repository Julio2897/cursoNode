//incorporando o modulo mysql a aplicacao
var mysql = require('mysql');

module.exports = function(){
	//estabelecendo a conexao
	return mysql.createConnection({
		host: 'localhost', //endereco da conexao
		user: 'root',
		password: 'root',
		database: 'portal_noticias'
	});
}