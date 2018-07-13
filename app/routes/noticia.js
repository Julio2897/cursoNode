//Recupera a funcao retornada
module.exports = function(app){

	app.get('/noticia', function(req,res){

		//Executa a funcao que realiza a conexao
		var connection = app.config.dbConnection(); //agora vai executar somente quando a rota for requisitada
		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.getNoticia(connection, function(error, result){
			res.render("noticias/noticia", {noticia : result});
		});
	});
};