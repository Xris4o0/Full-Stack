// require build-in file system module
var fs = require('fs');

// create readable stream to read in the file
var stream = fs.createReadStream('data.txt');

// subscribe to 'data' emitter in readable stream
stream.on('data', function(data) {
    var buf = Buffer.from(data);
    console.log(buf.toString());
})