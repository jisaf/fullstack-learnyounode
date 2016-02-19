var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);
	//response.write("HELLO WORLD");
	response.end();
}).listen(8080, console.log("HELLO WORLD"));