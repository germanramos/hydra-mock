var fs = require('fs'),
	configFile = '../config.json',
	config = require(configFile);

/*fs.watch('./config.json', function(evt, filename){
	config = require(configFile);
});*/

var Mock = {
	get : function(req, res){
		var app = req.params.app;
		if(config[app]) {
			res.send(200, config[app]);
		} else {
			res.send(404);
		}
	},
	put : function(req, res) {
		var app = req.params.app;
		var servers = req.body;

		config[app] = servers;

		res.send(200, config[app]);
	},
	post : function(req, res) {
		var app = req.params.app;
		var servers = req.body;

		if(config[app]) {
			for(var index in servers){
				config[app].push(servers[index]);
			}
		}

		res.send(200, config[app]);
	},
	del : function(req, res){
		var app = req.params.app;
		var servers = req.body;

		if (Array.isArray(servers)){
			for(var index in servers) {
				var server = servers[index];
				var serverIndex = config[app].indexOf(server);
				
				if (serverIndex > -1) {
					config[app].splice(serverIndex, 1);
				}

				if(config[app].length === 0) {
					delete config[app];
				}
			}
		} else {
			delete config[app];
		}

		res.send(200, config[app] || []);
	},
	validContent : function (req, res, next) {
		if(!Array.isArray(req.body)) {
			res.send(400,'Not an array');
		}

		if(req.body.length === 0) {
			res.send(400,'Empty Array');
		}
		next();
	}
};

module.exports = Mock;