var http = require('http');
console.log('Hello');
var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'})
    res.end('<h1>HELLO KITTY WORLD</h1>');
});

var port = Number(process.env.PORT || 5000);
console.log('Listening on port',port);
server.listen(port);
