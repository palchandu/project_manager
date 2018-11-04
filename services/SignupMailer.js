var path = require('path');
var nodeMailer = require("nodemailer");
var EmailTemplate = require('email-templates').EmailTemplate;
var transporter = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user:'chandra.getwebsoftware@gmail.com',
        pass:'prakash@1991'
    }
});
    exports.sendWelcomeMail = function (email, username, name, tokenUrl) {
        let mailOptions = {
            from: '"Chandra" <chandu2013pal@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Test mail', // Subject line
            text: username, // plain text body
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Example of Bootstrap 3 Jumbotron</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            <style type="text/css">
                .jumbotron{
                    margin-top: 15px;
                }
            </style>
            </head>
            <body>
            <div class="container">
                <div class="row">verify_user
                    <div class="col-xs-12">
                        <div class="jumbotron">
                            <h1>Welcome `+name+`</h1>
                            <p>Hi,this is the welcome mail from getwebsoftware</p>
                            <p><a href="http://localhost:9838/user/verify_user/`+email+`" target="_blank" class="btn btn-primary btn-lg">Verify</a></p>
                        </div>
                    </div>
                </div>
            </div>
            </body>
            </html>` // html body
        };
       //send mail
       transporter.sendMail(mailOptions,function(error,info){
           if(error)
           {
              console.log("error",error);
           }
           console.log("message send",info);
       })
        
    };

