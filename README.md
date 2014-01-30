hydra-mock
==========

Hydra service mock for testing porpuses

# Executing
```javascript
node hydra-mock.js [<port>]
```

* Default port: 5000

# Add new apps:

Modify config.json
```javascript
{
	"app1" : ["<server1>", "<server2>"],
	"app2" : ["<server1>", "<server2>"]
}
```
