var express = require('express');
var swig = require('swig');
var app = express();

app.engine('html',swig.renderFile);
app.set('view engine','html');
//app.set('views','./views');
app.set('views','./public');

app.get('/',function(req,res){
   res.render('index');
});

app.use(express.static('./public'));
app.listen(3000, function(){
    console.log('Example app listening on port 3000');
});