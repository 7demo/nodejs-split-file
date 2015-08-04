var fs = require('fs');
var uglify = require('uglify-js');
var readstream = fs.createReadStream('source.js');
var i = 0;
var status = fs.statSync('source.js');
var size = Math.ceil(status.size / 1000 / 1000);
var len = 0;
var cacheData = 0;

readstream.setEncoding('utf-8');

var aimpath = 'aim/aim' + i + '.js';
var writestream = fs.createWriteStream(aimpath);

readstream.on('data', function (chunk) {

	len += chunk.length;
	console.log(len);
	if (len / 1000 > 500) {
		readstream.pause();
		len = 0;
		i ++;
		aimpath = 'aim/aim' + i + '.js';
		writestream = fs.createWriteStream(aimpath);
		console.log('#####', writestream.write(chunk), writestream.write(chunk) === false)
		readstream.resume();
		// if (writestream.write(chunk) === false) {
		// 	readstream.pause();
		// 	console.log(232323232323);
		// }
		
	} 
	else {
		console.log('777777777', writestream.write(chunk))
		if (writestream.write(chunk) === false) {
			readstream.pause();
		}
	}
	// if (writestream.write(chunk) === false) {
	// 		console.log('-------------------')
	// 		readstream.pause();
	// 	}
	
	
	// var result = uglify.minify(chunk, {fromString : true})
	
});

readstream.on('end', function () {
	console.log('end');
	writestream.end();
});

writestream.on('drain', function () {
	console.log('+++++++++++++')
	readstream.resume();
});


