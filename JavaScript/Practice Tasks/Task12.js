// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements

//concat
let a = "hello";
let b = "world";
let c = a.concat(b);
console.log(c);

//includes
console.log(a.includes("ello"));

//push

let arr = ["bbb","ccc","aaa"];

arr.push("ddd");
console.log(arr);
arr.unshift("000");
arr.unshift("111");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.sort();
console.log(arr);

let d = arr.slice(0,4);
console.log(d);

d.splice(0,3);
console.log(d);