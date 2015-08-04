var fs = require('fs');
var readstream = fs.createReadStream('source.js');
var through = require('through');

var size = 0;
var dest = null;
var file = 0;

readstream.setEncoding('utf-8');

readstream.on('data', function (chunk) {
	size += chunk.length / 1000;
	if (size > 500) {
		dest.pause();
		dest = null;
		size = 0;
		file ++;
	}
	if (!dest) {
		dest = through();
		dest.pipe(fs.createWriteStream('aim/aim' + file +'.js'));
	}
	dest.queue(chunk);
}).on('end', function () {
	// dest.emit('end');
})
