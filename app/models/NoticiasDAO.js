//Classe Noticias
function NoticiasDAO(){

}

NoticiasDAO.prototype.getNoticias = function(connection, callback){
	connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(connection,callback){
	connection.query('select * from noticias where id_noticias = 1');
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, connection, callback){
	connection.query('insert into noticias set ?', noticia, callback);
}

module.exports = function(){
	return NoticiasDAO;
}