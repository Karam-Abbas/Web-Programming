// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1;
//  var b = 2;
// var  c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

console.log((obj = { a, b, c }));

// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6
// -------------------------------

//ES6
var lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6

// -------------------------------
// function getPersionES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

// getPersionES5("Zachary", 23, 195);
// Expected output: { name: 'Zachary', age: 23, height: 195 }
// -------------------------------

ES6;
function getPersionES5(name, age, height) {
  return {
    name,
    age,
    height,
  };
}

a = getPersionES5("Zachary", 23, 195);
console.log(a);
