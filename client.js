$(document).ready(function(){
    function getUsers(){
        $.get('/getusers',function(data){
            createTable('#table',data)
        })
    }
    function createTable(element,mas){
        $(element).empty();
        console.log(mas);
        $('<table>')
        .appendTo(element)
        .addClass("ff")
        var obj= JSON.parse(mas);
        for(var i=0;i<obj.length;i++){
            $('<tr>').appendTo('table')
            for(var key in obj[i]){
                $('<td>').appendTo('tr:last').text(obj[i][key]).addClass("fd");
            }
        }
    }    
    getUsers();
   })
