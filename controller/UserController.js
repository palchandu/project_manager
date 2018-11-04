var jwt=require('jsonwebtoken');
var bcrypt=require('bcryptjs');
var url=require('url');
var config=require('../config/config');
var Users=require('../models/UserModel');
var mail = require('../services/SignupMailer');
var sms=require('../services/MessageSend');
var userController={};
userController.register=function(req,res){
Users.findOne({email:req.body.email}).exec().then(function(result){
    if(result!=null)
    {
    if(req.body.email==result.email)
    {
        res.status(201).json({message:"Email already exists",data:result});
    }
    else
    {
    bcrypt.hash(req.body.password,10,function(err,hash){
        if(err)
        {
            return res.status(500).json({error:err});
        }else{
            var name=req.body.name;
            var email=req.body.email;
            var password=hash;
            var mobile=req.body.mobile;
            var college=req.body.college;
            var university=req.body.university;
            var state=req.body.state;
            userArray=new Users({
                name:name,
                email:email,
                password:password,
                mobile:mobile,
                college:college,
                university:university,
                state:state
            });
            var otp="thank yuo for register.your otp is 123456";
            userArray.save().then(function(result){
                res.status(200).json({
                    success: 'New user has been created',
                    data:result
                 });
            appUrl="abc";
            //send mail
            mail.sendWelcomeMail(email, name,name,appUrl);
            //send sms
            //sms.sendMessage(mobile,otp);
            }).catch(function(error){
                res.status(500).json({
                    status:500,
                    error: err
                 });
            })
        }
    })
}
}
else{
    bcrypt.hash(req.body.password,10,function(err,hash){
        if(err)
        {
            return res.status(500).json({error:err});
        }else{
            var name=req.body.name;
            var email=req.body.email;
            var password=hash;
            var mobile=req.body.mobile;
            var college=req.body.college;
            var university=req.body.university;
            var state=req.body.state;
            userArray=new Users({
                name:name,
                email:email,
                password:password,
                mobile:mobile,
                college:college,
                university:university,
                state:state
            });
            //var otp="thank yuo for register.your otp is 123456";
            userArray.save().then(function(result){
                res.status(200).json({
                    success: 'New user has been created',
                    data:result
                 });
            appUrl="abc";
            //send mail
            mail.sendWelcomeMail(email, name,name,appUrl);
            //send sms
            //sms.sendMessage(mobile,otp);
            }).catch(function(error){
                res.status(500).json({
                    status:500,
                    error: error
                 });
            })
        }
    })
}
}).catch(function(error){
    res.status(400).json({status:400,error:error});
})

}

userController.verifyEmail=function(req,res){
    var emailId=req.params.email;
    Users.findOneAndUpdate({email:emailId},{verify_email:'1'}).exec().then(function(result){
        res.status(200).json({"status":200,"message":"Email verified successfully"});
    }).catch(function(err){
        res.status(500).json({message:err});
    })
    
}

userController.login=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    Users.findOne({email:email}).exec().then(function(user){
        bcrypt.compare(password,user.password,function(err,result){
            if(err) {
                return res.status(401).json({
                   failed: 'Unauthorized Access'
                });
             }
             if(result) {
                 var token=jwt.sign({email:user.email},config.secret,{expiresIn:86400});
                return res.status(200).json({
                   success: 'Successfully logged in',
                   user_data:user,
                   token_key:token
                });
             }
        })
    }).catch(function(error){
        res.status(500).json({err:error});
    })
}

userController.verifty_token=function(req,res){
    var token = req.headers['x-access-token'];
    if (!token){ 
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }
    else{
        jwt.verify(token,config.secret,function(err,decoded){
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
            res.status(200).send(decoded);
        })
    }

}

module.exports=userController;