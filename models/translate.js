
var apikey = require('../config.js')
var BeGlobal = require('node-beglobal');

//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: apikey
});

beglobal.translations.translate(
  {text: 'hello', from: 'eng', to: 'fra'},
  function(err, results) {
    if (err) {
      return console.log(err);
    }

    //console.log(results);
  }
);
