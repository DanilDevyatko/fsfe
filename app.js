const http = require('http');

http.createServer(function(req, res){
	res.write('I"m on my way to become full-stack engineer');
	res.end();
}).listen(3000);

console.log('Server started');
