var express=require('express');
var router=express.Router();
var userController=require('../controller/UserController');
router.post('/user_register',userController.register);
router.get('/verify_user/:email',userController.verifyEmail);
router.post('/user_login',userController.login);
router.post('/user_token_verify',userController.verifty_token);
module.exports=router;