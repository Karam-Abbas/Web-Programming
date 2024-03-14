// for of loop in js

// let arr = [1,2,3,4];

// for(let i of arr)
// {
//     console.log(i);
// }

// for each loop in js

// function adder(a)
// {
//     a += 10;
//     console.log(a);
// }

// arr.forEach(adder);


// let sum = 0;

// let awin = (number) => sum += number; 

// arr.forEach(awin)

// console.log(sum);


// map helper function in js just like the foreach function but with every iteration the result will be stored in the an new arr

// function abs(a)
// {
//     return a*10;
// }

// let new_arr = arr.map(abs);
// console.log(new_arr);

// filter helper function in js stores only those values in the array whose the value is TRUE

// let arr = [24,18,60,75,40];

// function checker(age){
//     return age>40;       // check for the old age from the array
// }

// let new_arr = arr.filter(checker);
// console.log(new_arr);

//  every and some functions  basically and or operators every == and & the some == or

// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];


// let allbooks = products.every((product)=> product.category === "Books");

// let somebooks = products.some((product)=> product.category === "Books");

// console.log(allbooks);
// console.log(somebooks);


// find helper function in js will find where the condition is true and will exit as soon as the statement is true and stops there.

// const ages = [3, 10, 18, 20];

// function checkAge(age) {
//   return age > 18;
// }

// const res = ages.find(checkAge);
// console.log(res);

// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];

// let ans = products.find((pro)=> pro.category==="Books");
// console.log(ans);

