var express=require('express');
var routes=express.Router();
var blogController=require('../controller/BlogController');
routes.get('/',function(req,res){
res.json({msg:"Blog Routes Working"});
});

/*Create Blog */
routes.post('/addBlog',blogController.addBlog);
/*Create comments */
routes.post('/addComment',blogController.addComment);
/*Find all blog and comments */
routes.get('/conversation',blogController.findBlogComment);
module.exports=routes;