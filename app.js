var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apikey = require('./config.js')
var BeGlobal = require('node-beglobal');

var languages = require('./models/translate.js');
// console.log("languages:",languages);

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

app.post('/theTranslation', function(req,res){
		console.log('THIS IS A CONSOLE DOT LOG REQ BODY::::',req.body);
		var beglobal = new BeGlobal.BeglobalAPI({
		  api_token: apikey
		});

		beglobal.translations.translate(
		  {text: req.body.words, from: 'eng', to: 'spa'},
		  function(err, results) {
		    if (err) {
		      return console.log(err);
		    }

		    console.log(results);
		  }
		);
		res.send('success');
});

var server = app.listen(6041, function() {
	console.log('Express server listening on port ' + server.address().port);
});
