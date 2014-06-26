var express = require('express'),
	app = express(),
	mock = require('./lib/hydra-mock');

app.use(express.logger());
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

app.get('/app/:app', mock.get);
app.put('/app/:app', mock.validContent, mock.put);
app.post('/app/:app', mock.validContent, mock.post);
app.delete('/app/:app', mock.del);

var port = process.argv[2] || 5000;
app.listen(port);
console.log('Listening in port ' + port);