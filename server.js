var express=require("express");
var path =require('path');
var bodyParser=require('body-parser');
var index =require('./route/index');
var tasks =require('./route/tasks');
var app=express();
var port = 3000;
//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//Static Folder
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client1')));
//body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on port '+port);
});