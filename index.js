"use strict"; 

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.use(jsonParser);
app.use('/api', require('./controllers/api'));


app.set('port', (process.env.PORT || 9000))

app.get('/', (req, res) => {
	res.send('Hello there!');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});


