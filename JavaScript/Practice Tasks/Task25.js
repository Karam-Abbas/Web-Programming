// Spread operator


// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

let arr = [1, 2, 3];
let arr2 = [4, 5];

let new_arr = [...arr, ...arr2];
console.log(new_arr);

let obj = {
  Name: "Karam",
  Age: 19,
};

// if want to make clone and add something to it also then
let new_obj = { ...obj, Work: "programmer" };
console.log(new_obj);
