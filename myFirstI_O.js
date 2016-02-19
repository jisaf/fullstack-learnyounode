var http = require('http');
var fs = require('fs');

	var buffer = fs.readFileSync(process.argv[2]);
	var bufferArr = buffer.toString().split("\n");
	console.log(bufferArr.length-1);
