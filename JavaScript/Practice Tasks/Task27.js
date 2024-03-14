// Array Destructuring.......

const colors = ["red", "green", "blue", "yellow", "orange"];

// Your task is to use array destructuring to extract the first three colors from the colors array and assign them to separate variables named color1, color2, and color3.

// After extracting the colors, log each variable's value to the console.

let [color1, color2, color3] = colors;

console.log(color1);
console.log(color2);
console.log(color3);

// Object Destructuring

let obj = {
  Name: "Karam",
  Age: 19,
  prof: "programmer",
};

// here only the attribute names can be passed which will tell to pick which value from the object and store it and order doesn't matter here.
// ex1
let { Age, Name, prof } = obj;
console.log(Name, " ", Age, prof);
//ex2
// let { Age } = obj;
// console.log(Age);

// to change the variable name that gets the value we can do it like this

let new_var = {x:10,y:20};
let {x:val1,y:val2} = new_var;
console.log(val1,val2);

// functional destructuring

// ----------------- Instructions
// You are given a function getStudentInfo that takes an object representing a student as an argument. The student object has the following properties:

const student = {
  name: "John Doe",
  age: 20,
  rollNumber: "A123",
  courses: ["Mathematics", "Science", "History"],
};

// Your task is to use function destructuring to extract the name, age, and courses properties from the student object and then return them as an object from the getStudentInfo function.

// const student = {
//   name: "John Doe",
//   age: 20,
//   rollNumber: "A123",
//   courses: ["Mathematics", "Science", "History"],
// };

// const { name, age, courses } = getStudentInfo(student);
// console.log(name); // John Doe
// console.log(age); // 20
// console.log(courses); // ["Mathematics", "Science", "History"]

// Write the getStudentInfo function using function destructuring to achieve this task.
// ------------------------------------------

function getStudentInfo({name,age,courses})
{
    return {name,age,courses}
}

const { name, age, courses } = getStudentInfo(student);
console.log(name); // John Doe
console.log(age); // 20
console.log(courses); // ["Mathematics", "Science", "History"]