var fs = require('fs');

var data = fs.readFileSync('doc.text');

console.log(data.toString());
console.log('同步读取结束！');

fs.readFile('doc.text',function(err,data) {
	if (err) {
		console.error(err);
	}
	console.log(data.toString());	
});

console.log('异步读取结束！');