var http = require('http');
var filter = require("./modularFilter.js");
var dir = process.argv[2];
var ext = process.argv[3];

// http.createServer(function(request, response){
// 	response.writeHead(200);
// 	response.end();
// }).listen(8080, 
filter(dir, ext, function(err, data){
	// if (err) throw err;
	if (err){
		console.log(err);
		return;
	}
	console.log(data.join("\n"));
})
// )