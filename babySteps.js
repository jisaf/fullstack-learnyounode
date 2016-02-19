var http = require('http');
var sum = function(arv){
	var total = 0;
	for (var i = 2; i < arv.length; i++) {
		total = total + Number(arv[i]);
	}
	return total;
}

http.createServer(function(request, response){
	response.writeHead(200);
	response.end();

}).listen(8080, console.log(sum(process.argv)));
// }).listen(8080, function(){var result = 0;
// 	for (var i = 2; i < process.argv.length; i++) {
// 		result += Number(process.argv[i])
// 	}
// 	console.log(result);
// });