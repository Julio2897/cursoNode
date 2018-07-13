//incorporando o modulo mysql a aplicacao
var mysql = require('mysql');

var connMySql = function(){
	console.log('Conexao com o banco estabelecida');
	//estabelecendo a conexao
	return mysql.createConnection({
		host: 'localhost', //endereco da conexao
		user: 'root',
		password: 'root',
		database: 'portal_noticias'
	});
}
//Evita que no autoload a funcao seja executada
module.exports = function(){
	return connMySql;
}