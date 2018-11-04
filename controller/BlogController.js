var BlogPost=require('../models/blog');
var blogController={};
blogController.addBlog=function(req,res){
    var blogs=new BlogPost(req.body);
    blogs.save(function(err,data){
        if(err)
        {
            //return next(err);
            res.status(400).json({status:"400",message:err});
        }
        else{
            //res.json(data);
            res.status(200).json({status:"200",message:"Blog created successfully!",res:data});
        }
    })
}

blogController.addComment=function(req,res){
    BlogPost.findOneAndUpdate({_id:req.body._id},{$push:{ comments:{
        title:req.body.title,
        body:req.body.comment
    }}},function(err,result){
        if(err)
        {
            //return next(err);
            res.status(400).json({status:"400",message:err});
        }
        else{
            //res.json(data);
            res.status(200).json({status:"200",message:"Comment created successfully!",res:result});
        }
    }) 
}

blogController.findBlogComment=function(re,res){
    BlogPost.find().exec(function(err,result){
        if(err)
        {
            res.status(400).json({status:400,message:err});
        }
        else
        {
            res.status(200).json({status:"200",message:"List of blog and comments",data:result});
        }
    })
}

module.exports=blogController;