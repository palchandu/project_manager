var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var Comments=new Schema({
    title:String,
    body:String,
    date:{type:Date,default:Date.now()}
});

var BlogPost=new Schema({
    title:String,
    body:String,
    date:{type:Date,default:Date.now()},
    comments:[Comments]
});

module.exports=mongoose.model('BlogPost',BlogPost);