$(document).on('ready', function(){
        $("#submit").on('click', function(e){
            e.preventDefault();
            var words = $('#words').val()
            $.post('/theTranslation', {words: words}, function(dataFromServer){
                console.log(dataFromServer);
            });
        });
});
