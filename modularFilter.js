var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(request, response){
	response.writeHead(200);
	response.end();
}).listen(8080, function(){
	var files = [];
	fs.readdir(process.argv[2], function(err, list){
		if (err) throw err;
		var fileArr = list;
//		console.log(list);
//		console.log(process.argv[3]);
		for (var i = 0; i < fileArr.length; i++) {
//			console.log(path.extname(fileArr[i]));
			if (path.extname(fileArr[i]) === "."+process.argv[3]){
				files.push(fileArr[i]);
//				console.log(fileArr[i]);
			}
		}
	console.log(files.join("\n"));

	});
})