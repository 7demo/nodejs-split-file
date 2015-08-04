var uglify = require('uglify-js');

var total = 36;

// for (var i = 0; i < total; i++) {
// 	uglify.minify('aim/aim'+ i +'.js');
// }
// uglify.minify([ "aim/aim0.js", "aim/aim1.js", "aim/aim2.js" ], {
//     outSourceMap: "out.js.map"
// });
uglify.minify('test.js');