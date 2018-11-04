var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    mobile:{type:String,required:true},
    college:{type:String,required:true},
    university:{type:String,required:true},
    state:{type:String,required:true},
    verify_email:{type:String,default:0}
});


module.exports=mongoose.model('UserSchema',UserSchema);