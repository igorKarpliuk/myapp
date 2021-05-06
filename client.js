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
        .addClass("table table-bordered table-primary col-6")
        .appendTo(element)
        .addClass("ff");
        var obj= JSON.parse(JSON.stringify(mas));
        for(var i=0;i<obj.length;i++){
            $('<tr>').appendTo('table');
            for(var key in obj[i]){
                $('<td>').appendTo('tr:last').text(obj[i][key]).addClass("fd");
            }
            $('tr:last td:first').hide();
            $('<td>').appendTo('tr:last');
            $('<button>').text('Delete').addClass('btn btn-danger')
            .appendTo('td:last').click(function(){
                var id=$(this).parent().parent().find('td:first').text();
                console.log(id);
                deleteUser(id);
            });
            $('<td>').appendTo('tr:last');
            var c = 0;
            $('<button>').text('Update').addClass('btn btn-outline-primary update1')
            .appendTo('td:last').click(function(){
                console.log(id);
                c++;
                var id=$(this).parent().parent().find("td:first").text();
                var username=$(this).parent().parent().find("td:eq(1)").text();
                var password=$(this).parent().parent().find("td:eq(2)").text();
                var age=$(this).parent().parent().find("td:eq(3)").text();
                var job=$(this).parent().parent().find("td:eq(4)").text();
                $('.username').val(username);
                $('.password').val(password);
                $('.age').val(age);
                $('.job').val(job);
                $('.add').hide();
                if(c===1){
                $('<button>').text('Update').addClass('btn btn-success btn-lg btn-block update').appendTo('.myform').click(function(){
                    $('.update').hide();
                    $('.add').show();
                    const username=$('.username').val();
                    const password=$('.password').val();
                    const age=$('.age').val();
                    const job=$('.job').val();
                    $('.username').val("");
                    $('.password').val("");
                    $('.age').val("");
                    $('.job').val("");
                    updateUser(id,username,password,age,job);
                });
                }
            });
        }
    }
    function updateUser(id,username, password, age, job){
        if(!username||!password||!age||!job){ 
            alert('Input all values!');
            return;
        }
        var obj={
            id:id,
            username:username,
            password:password,
            age:age,
            job:job
        }
        $.post('/updateuser',obj,function(data){
            console.log(data);
            getUsers();
        })
    }
    function addUser(username,password,age,job){
        if(!username||!password||!age||!job){ 
            alert('Input all values!');
            return;
        }
        var obj={
            username:username,
            password:password,
            age:age,
            job:job
        }
        $.post('/adduser',obj,function(data){
            console.log(data);
            getUsers();
        })
    }
    function deleteUser(id){
        var obj={id:id};
        $.post('/deleteuser',obj,function(data){
        console.log(data);
        getUsers();
        })
        }
    $('.add').click(function(){
        const username=$('.username').val();
        const password=$('.password').val();
        const age=$('.age').val();
        const job=$('.job').val();
        $('.username').val("");
        $('.password').val("");
        $('.age').val("");
        $('.job').val("");
        addUser(username,password,age,job);
    })
    getUsers();
   })
