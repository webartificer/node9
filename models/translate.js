

var BeGlobal = require('node-beglobal');

//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'AI3tZbOTNt5LWrDb16jFoA%3D%3D'
});

beglobal.translations.translate(
  {text: 'hello', from: 'eng', to: 'fra'},
  function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
  }
);

var languages = [];


beglobal.languages.all(
  function(err, results) {
    if (err) {
      return console.log(err);
    }
    languages = results.map(function(item){
        return item.from.name;

    });
    // console.log(languages);
    // console.log(results);
    // returning a list of language pairs
    /*
      [
        {
            "from": {
                "id": "505037985fe01ac20407b7fb",
                "code": "eng",
                "name": "English",
                "fullName": "English",
                "rightToLeft": false
            },
            "to": {
                "id": "505037985fe01ac20407b81f",
                "code": "spa",
                "name": "Spanish",
                "fullName": "Spanish; Castilian",
                "rightToLeft": false
            }
        },
        ...
      ]
    */

    module.exports = {
        languages: languages
    };
  }
);

console.log(languages);
