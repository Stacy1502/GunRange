const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const LISTEN_PORT = 8080;
const ABS_STATIC_PATH = __dirname + '/public';

// Set up our routes
app.get('/', function(request, response)
{
    response.sendFile('game.html', {root:ABS_STATIC_PATH});
});

server.listen(LISTEN_PORT);
app.use(express.static(ABS_STATIC_PATH));
console.log("Listening on port:" + LISTEN_PORT);