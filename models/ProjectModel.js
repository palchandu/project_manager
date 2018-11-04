var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ProjectSchema=new Schema({
    project_name:{type:String,required:true},
    project_cat:{type:String,required:true},
    project_doc:{type:String,required:true},
    project_file:{type:String,required:true},
    project_descr:{type:String,required:true},
    project_cost:{type:Number,required:true},
    project_download:{type:Number},
    project_lang:{type:String,required:true},
    project_frontend:{type:String},
    project_db:{type:String,required:true},
    createdAt:{type:Date,required:true,default:Date.now()}
});

module.exports=mongoose.model('Project',ProjectSchema);