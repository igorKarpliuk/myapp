const mongoose=require('../mongoose');
const schemaUser=new mongoose.Schema({
 username:{
    type:String,
    unique:true,
    required:true,
    minlength:5,
    maxlength:10
    },
 password:{
    type:String,
    required:true,
    minlength: 3
    },
 age:{
    type:Number,
    required:true,
    min:18,
    max:70
    },
 job:{
    type:String,
    required:true
    }
 }, {versionKey:false})
const User=mongoose.model("User",schemaUser);
module.exports=User;
