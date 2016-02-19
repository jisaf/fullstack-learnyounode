var http = require('http');
var sum = function(arv){
	var total = 0;
	for (var i = 2; i < arv.length; i++) {
		total = total + Number(arv[i]);
	}
	return total;
}

console.log(sum(process.argv));
