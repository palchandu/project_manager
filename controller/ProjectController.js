var Project=require('../models/ProjectModel');
var multer = require("multer");
var cloudinary = require("cloudinary");
var fs = require('fs');
var multer = require("multer");
var path = require('path');


cloudinary.config({ 
    cloud_name: 'dp43ktjfo', 
    api_key: '242535564169645', 
    api_secret: 'HohN_Hlz7FL36Y-5XB0WMHPg-M8' 
  });
exports.project_upload=function(req,res){
    var file_val=req.body.file;
    var data = file_val.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');

    fs.writeFile('upload/project_source.jpg', buf,function(error){
        if(error)
        {
            res.json({error:"uploaded file is not supported"});
        }
        else{
            cloudinary.uploader.upload('upload/project_source.jpg', function(result,error) 
            {
                if(error)
                {
                    res.status(500).json({err:error});
                }
                else
                {
                res.status(200).json({data:result});
                }
            });
        }
    });
}

exports.zipUpload=function(req,res,next){
    res.json({docs:req.files});
}
