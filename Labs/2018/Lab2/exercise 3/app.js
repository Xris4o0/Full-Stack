var events = require('events');
var eventEmitter = new events.EventEmitter()

var fn1 = function(){
    console.log('Someone has broken into the house!');
}

var fn2 = function(){
    console.log('Call 911!');
}

eventEmitter
    .on('call1', fn1)
    .on('call2', fn2);

eventEmitter.emit('call1');
eventEmitter.emit('call2');