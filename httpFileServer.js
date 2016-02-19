var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	var text = fs.createReadStream(process.argv[3]);
	text.pipe(response);

}).listen(process.argv[2])