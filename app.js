
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

var userInfo = {};


//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    userInfo.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    userInfo.language = JSON.stringify(req.headers["accept-language"]).split(",")[0].slice(1);
    userInfo.os = JSON.stringify(req.headers["user-agent"]).match(/\(([^)]+)\)/)[1];

    //res.render('index')
    res.send(userInfo);
});

//var title = "Who am I?";
//var header = "Request Header Microservice";

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});