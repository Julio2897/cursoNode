//Recupera a funcao retornada
module.exports = function(app){

	app.get('/noticia', function(req,res){

		//Executa a funcao que realiza a conexao
		var connection = app.config.dbConnection(); //agora vai executar somente quando a rota for requisitada

		//executando uma chamada de acesso ao banco de dados
		connection.query('select * from noticias where id_noticias = 1', function(error, result){
			res.render("noticias/noticia", {noticia : result});
		});
	});
};