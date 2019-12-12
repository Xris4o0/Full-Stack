var cal = require('./calculator');
var com = require('./comparer');

x = 5;
y = 10;

if(com.AreNumberEqual(x, y)){
    console.log(cal.Add(x,y)); 
}else{
    console.log(cal.Subtract(x,y));
}