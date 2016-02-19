var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	response.writeHead(200);
	response.end()
}).listen(8080, function(){
	var content = fs.readFile(process.argv[2], "utf8", function(err, data){
	if(err) throw err;
	console.log(data.split("\n").length-1);
	})
})