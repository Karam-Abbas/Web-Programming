// date type variable should be created first to use it with the get and set functions
var dt = new Date();
console.log(dt);

// By using the get function you can get all the details about the whole date data type in js

console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(dt.getDate());
console.log(dt.getDay());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds());

// You can set all the values of the date data type by using the set function
dt.setDate(23);

// we can also convert the date to string data type by using functions like below:
var a = dt.toDateString();
console.log(a);
var b = dt.toISOString();
console.log(b);
var c = dt.toLocaleDateString();
console.log(c);
