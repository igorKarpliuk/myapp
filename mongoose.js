const mongoose=require('mongoose');
const connStr = "mongodb+srv://Admin:Admin1608@clusterhz.cpp55.mongodb.net/mydb";
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
} 
mongoose.Promise = global.Promise;
mongoose.connect(connStr, options).then(()=>{
    console.log("mongodb connect...")
});
module.exports=mongoose;