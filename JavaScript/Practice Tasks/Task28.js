// Ternary Operator
let person =
{
    money:20
};

let ans = person.money >0 ? "Buy product" : "Bring some cash first";
console.log(ans);


//REFACTOR THIS CODE & USE TERNARY OPERATOR
// check the age to determine the eligibility to vote
// let age = 15;
// let result;

let age = 15;
let result = age>=18 ? "Eligible for vote" : "not eligible for vote";

console.log(result);


let num = 10;
let a = num==0 ? "This is a zero" : (num<0 ? "Its negative" : "Its Positive"); 
console.log(a);

