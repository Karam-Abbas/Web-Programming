// Named Functions
// function sayHello(){console.log(`hello baby!`);}
// sayHello()
// VM559:1 hello baby!

// function sayHello(n1){console.log(`hello baby!,${n1}`);}
// sayHello()
// VM619:1 hello baby!,undefined
// sayHello(2)
// VM619:1 hello baby!,2

// function sayHello(n1){return(`hello baby!${n1}`);}
// console.log(sayHello(2));
// VM745:1 hello baby!2

// // Anonymous Functions
// remove name
// const u = function(n1){
//     return `say hello! ${n1}`;
// }
// u("Karam");

//Arrow Function
// remove the function keyword 
// const u =(n1)=>{
//     return `say hello! ${n1}`;
// }

// remove the return even
// const u =(n1)=>`say hello! ${n1}`

// remove the braces even
// const u = n1 =>`say hello! ${n1}`

// const squareofnumbers = n1 => n1**2
// squareofnumbers(3)
// 9

//Object Creation
// let obj = {
//     name : "Abbas",
//     age : 21,
// }
// obj.name = "karam"
// console.log(obj.name);
// karam
// //allowed
// const obj = {name:"karam"}
// obj.age = 21
// 21
// obj
// {name: 'karam', age: 21}

// const obj = {name:"karam",age:21}
// undefined
// const describe = obj => console.log(`My name is ${obj.name} and my age is ${obj.age}.`)
// describe(obj)
// VM1448:1 My name is karam and my age is 21.

// function made inside the object is called as method.
// this is how we do it
// way 1
// const temp = {
//     name: 'karam', age: 21 , desc(){console.log(`Name: ${this.name}, Age: ${this.age}`)}
// }
// way 2
// const temp = {
//     name: 'karam', age: 21 , desc:function(){console.log(`Name: ${this.name}, Age: ${this.age}`)}
// }

// never make arrow function as a method inside the object
// arrow function doesn't know the "this" keyword, so it will not work
// const temp = {
//     name: 'karam', age: 21 , desc:()=>{console.log(`Name: ${this.name}, Age: ${this.age}`)}
// }

// normal function named or unnamed know this function
// lexical scoping
// read above yourself.

// const temp = {
//     name: 'karam', age: 21 , 
//     desc:function(){
//         t=()=>{console.log(`Name: ${this.name}, Age: ${this.age}`)};
//             t()
//         }
// }


// callback function
// when a function is called as an argument of another function.

// function hello(){console.log("Bye!")}
// function karam(name,callback1){console.log(name);callback1();}
// karam("karam",hello);
// VM2288:3 karam
// VM2288:1 Bye!