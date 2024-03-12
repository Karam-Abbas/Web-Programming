let object_name = {
  name: "karam",
  age: 19,
  greet: "Hello",
};

// Convert an object into JSON representation
let a = JSON.stringify(object_name);

console.log(a);

// Convert an object into JSON representation
let b = JSON.parse(a);

console.log(b);
