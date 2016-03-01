var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080;

app.use('/js', express.static('assets/js'));
app.use('/css', express.static('assets/css'));
app.use('/images', express.static('assets/mymedia'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.get('/clickgame', function(req, res){
  res.sendFile(process.cwd() + '/views/clickgame.html')
});

app.get('/rps', function(req, res){
  res.sendFile(process.cwd() + '/views/rps-game.html');
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});