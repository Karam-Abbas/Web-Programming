// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
let a = document.getElementsByTagName("h4");
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
let b = document.getElementsByClassName("green");
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
let c = document.getElementById("blue");

console.log(a);
console.log(b);
console.log(c);

// 4. Select div which has the class & Id of "yellow" by using querySelector()

console.log(document.querySelector(".yellow"));
console.log(document.querySelector("#yellow"));

// 5. Select all the elements which has the class of "teal" by using querySelectorAll

console.log(document.querySelectorAll(".teal"));
