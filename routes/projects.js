var express=require('express');
var router=express.Router();
var projectController=require('../controller/ProjectController');
var multer = require("multer");
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/projects')
    },
    filename: (req, file, cb) => {

      cb(null, Date.now()+file.originalname)
    }
});
var upload = multer({storage: storage});


router.post('/project_upload',projectController.project_upload);
router.post('/zip_upload',upload.fields([{
    name:'projectFile',maxCount:1
},
{
    name:'projectDocs',maxCount:1
}]),projectController.zipUpload);

module.exports=router;