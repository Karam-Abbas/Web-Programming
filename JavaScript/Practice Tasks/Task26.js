// Spread operator parameter

// 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!

function sum(...params) {
  s = 0;
  for (i in params) {
    s += params[i];
  }
  console.log(s);
}

sum(10, 10, 10, 10, 10, 10, 10);
