var m = 5;
var n = 7;

var temp = m;
m = n;
n = temp;
console.log("M = ", m, "N = ", n);

var p = 5;
var q = 7;
 [p, q] = [q, p];

 console.log("P = ", p, "Q = ", q);

 var x = 5;
 var y = 7;
 x = x + y; 
 y = x - y; 
 x = x - y;
 console.log("X = ", x, "Y = ", y);