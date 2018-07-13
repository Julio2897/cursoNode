//Recupera a funcao retornada
module.exports = function(app){

	app.get('/noticias', function(req,res){

		//Executa a funcao que realiza a conexao
		var connection = app.config.dbConnection(); //agora vai executar somente quando a rota for requisitada
		var noticiasDao = new app.app.models.NoticiasDAO;

		//executando uma chamada de acesso ao banco de dados
		noticiasDao.getNoticias(connection, function(error, result){
			res.render("noticias/noticias", {noticias : result});
		});
	});
};