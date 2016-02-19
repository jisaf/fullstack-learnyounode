var fs = require('fs');
var path = require('path');


module.exports = function filter (dir, ext, func){
	var files = [];
	fs.readdir(dir, function(err, data){
		if (err) return func(err);
		var fileArr = data;
		for (var i = 0; i < fileArr.length; i++) {
			if (path.extname(fileArr[i]) === "."+ext){
				files.push(fileArr[i]);
			}
		}
	return func(null, files);

	});
}