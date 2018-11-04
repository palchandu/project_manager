var express=require('express');
var app=express();
var path = require('path');
var url=require('url');
app.use(express.static(path.join(__dirname, 'public')));
/*----------------------------------------Add all required npm -----------------------------*/
var bodyParser = require('body-parser');                                                 
/*mongoose and connect */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/projectonline')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

/*Use all required npm */
app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));
app.use(bodyParser.json({limit: '50mb',extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

/************************************** Routes implementations ****************************/
var userRoutes=require('./routes/users');
var blogRouter=require('./routes/blog_routes');
var projectRouter=require('./routes/projects');
app.use('/user',userRoutes);
app.use('/blog',blogRouter);
app.use('/project',projectRouter);


const port =9860;
app.listen(port, function(){ 
console.log(`Example app listening on port ${port}!`);

});
module.exports = app;