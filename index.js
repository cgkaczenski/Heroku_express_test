var express = require('express');
var app = express();

var handlebars = require('express-handlebars');
var fortune = require('./lib/fortune.js');

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about', {fortune: fortune.getFortune()});
});

//404 catch-all handler (middleware) 
app.use(function(req,res) {
    res.status(404);
    res.render('404');
});

//500 error handler (middleware)
app.use(function(req,res) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started..'+ app.get('port'));
});
