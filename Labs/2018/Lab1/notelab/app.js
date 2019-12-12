var moment = require('moment');

var greet = function greet() {
    var wrapped = moment(new Date());
    console.log(wrapped);
}

greet();