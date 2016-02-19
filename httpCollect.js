var http = require('http');
var bl  = require('bl');
var string = "";

//without bl
// http.get(process.argv[2], function(res){
// 	res.setEncoding("utf8");
// 	res.on("data", function(data){
// 		// console.log(data);
// 		string += data;
// 	})
// 	res.on("end", function(){
// 		console.log(string.length);
// 		console.log(string);
// 	})
// })

//with bl, 
http.get(process.argv[2], function(res){
	res.pipe(bl(function(e,d){
		if (e){
			return console.log(e);
		}
		var string = d.toString();
		console.log(string.length);
		console.log(string);
	}))
})