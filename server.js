var http = require('http');
console.log("Starting server...");
var server= http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>HELLLO</h1>');
});

server.listen(8000,'localhost');