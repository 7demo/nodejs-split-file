var fs = require('fs');
var splitstream = require('split-stream').SplitStream2;
var ss = splitstream.create();
var uglify = require('uglify-js');
var i = 0;
var cacheData = 0;
var aimpath = 'aim/aim' + i + '.js';
var writestream = fs.createWriteStream(aimpath);
ss.on('readable', function (data) {
	// var status = fs.statSync(aimpath);
	// var size = Math.ceil(status.size / 1000 );
	// // console.log(aimpath, status.size)
	// console.log(fs.statSync(aimpath));
	// if (size > 500) {
	// 	i++;
	// 	aimpath = 'aim/aim' + i + '.js';
	// 	writestream = fs.createWriteStream(aimpath);
	// }
	var buf;

  while ((buf = ss.read(1)) !== null) {
    console.log(buf);
  }
});

ss.on('end', function () {
	console.log('end');
});

fs.createReadStream('source.js').pipe(ss);
// pipe(writestream)
// fs.createReadStream('source.js')
// 	.pipe(split(JSON.parse, null))
// 	.on('data', function (line) {
// 		console.log(line)
// 	})
