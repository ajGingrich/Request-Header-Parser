/*var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Get in Heroku')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});*/

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.send('Get some Heroku!')
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});