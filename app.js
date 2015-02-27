var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');


var languages = require('./models/translate.js')
console.log(languages);

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/translate',function(req,res){
	res.render('translate', {languages: languages});
});

app.get('/quiz',function(req,res){
	res.render('quiz');

});

app.get('/quiz',function(req,res){
	res.render('quiz');
});

var server = app.listen(6041, function() {
	console.log('Express server listening on port ' + server.address().port);
});
