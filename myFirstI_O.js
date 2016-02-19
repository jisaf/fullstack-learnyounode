var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	response.writeHead(200);
	response.end();
}).listen(8080, function(){
	var buffer = fs.readFileSync(process.argv[2]);
	var bufferArr = buffer.toString().split("\n");
	console.log(bufferArr.length-1);
});