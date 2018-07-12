module.exports = function(app){

	app.get('/', function(req,res){
		//utilizando as chamadas com ejs
		res.render('home/index');
	});
};