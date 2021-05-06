const express=require('express');
const app=express();
const fs=require('fs');
const User = require('./models/user');
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req,res){
 res.sendFile(__dirname+'/index.html');
})
app.listen(process.env.PORT||8080);
console.log('Run server!');

app.get('/getusers',function(req,res){
    User.find(function(err,data){
    console.log(data);
    res.send(data);
    })
})
app.post('/adduser',function(req,res){
    const data = req.body;
    console.log(data);
    const user = new User(data);
    user.save(function(err,data){
    if(err){
        console.log(err.message);
        return;
    }
    console.log(data);
    res.send(data);
    })
})
app.post('/deleteuser',function(req,res){
    console.log(req.body);
    User.remove({_id:req.body.id},function(err,data){
    res.send(data);
    })
})
app.post('/updateuser',function(req,res){
    const data = req.body;
    console.log(data);
    User.updateOne({_id:data.id},{username:data.username, password:data.password, age:data.age, job:data.job},function(err,data){
        if(err)
        {
            console.log(err.message);
            return;
        }
        res.send(data);
    })
})