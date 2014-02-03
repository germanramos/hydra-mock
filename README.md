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

# REST Api

## GET

Obtain server list for the app.

```
GET /app/<app_name>
Return: 200 => ["server1", "server2",...]
		404 => Not found
```

## PUT

Set the server list for an app. Replaces the content if it already exists. Returns the list of servers.

```
PUT /app/<app_name>
Body: ["server1", "server2",...]
Return: 200 => ["server1", "server2",...]
		400 => Body not an array or empty array.
```

## POST

Append servers to the current server list for an app. Creates the app if doesn't exists. Returns the list of servers.

```
POST /app/<app_name>
Body: ["server1", "server2",...]
Return: 200 => ["server1", "server2",...]
		400 => Body not an array or empty array.
```

## DELETE

Delete servers from the list. If no server array is sent in the body, deletes the app. Return the remaining servers or empty array.

```
DELETE /app/<app_name>
Body: ["server1", "server2",...] (optional)
Return: 200 => ["server1", "server2",...]
```
