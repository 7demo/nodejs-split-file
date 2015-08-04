var fs = require('fs');
var readstream = fs.createReadStream('test.js');
var through = require('through');

var size = 0;
var dest = null;
var file = 0;

readstream.setEncoding('utf-8');

readstream.on('data', function (chunk) {
	size += chunk.length / 1000;
	console.log(size);
	if (size > 100) {
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


//http://stackoverflow.com/questions/21761886/node-js-splitting-a-readable-stream-pipe-to-multiple-sequential-writable-stream
