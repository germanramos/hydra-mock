var express = require('express');
var app = express();
var config = require('./config.json');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser());

app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin',"*");
	next();
});
app.use(app.router);
app.use(express.errorHandler({
	dumpExceptions : true,
	showStack : true
}));

app.get('/app/:app', function(req, res){
	var app = req.params.app;
	if(config[app]) {
		res.send(200, config[app]);
	} else {
		res.send(404);
	}
});

var port = process.argv[2] || 5000;
app.listen(port);
console.log('Listening in port ' + port);