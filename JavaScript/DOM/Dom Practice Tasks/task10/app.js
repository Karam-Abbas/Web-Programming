// https://www.w3schools.com/jsref/obj_mouseevent.asp

// 1. click
// 2. contextmenu
// 3. dblclick
// 4. mousedown
// 5. mouseenter
// 6. mouseleave
// 7. mousemove
// 8. mouseout
// 9. mouseover
// 10. mouseup

let one = document.querySelector(".click");
addEventListener("click",()=> one.classList.toggle("steelblue"));
let two = document.querySelector(".contextmenu");
addEventListener("contextmenu",()=> two.classList.toggle("red"));
let three = document.querySelector(".dblclick");
addEventListener("dblclick",()=> three.classList.toggle("chocolate"));
let four = document.querySelector(".mousedown");
addEventListener("mousedown",()=> four.classList.toggle("orange"));
let five = document.querySelector(".mouseenter");
addEventListener("mouseenter",()=> five.classList.toggle("steelblue"));
let six = document.querySelector(".mouseleave");
addEventListener("mouseleave",()=> six.classList.toggle("steelblue"));
let seven = document.querySelector(".mousemove");
addEventListener("mousemove",()=> seven.classList.toggle("steelblue"));
let eight = document.querySelector(".mouseout");
addEventListener("mouseout",()=> eight.classList.toggle("steelblue"));
let nine = document.querySelector(".mouseover");
addEventListener("mouseover",()=> nine.classList.toggle("steelblue"));
let ten = document.querySelector(".mouseup");
addEventListener("mouseup",()=> ten.classList.toggle("steelblue"));

