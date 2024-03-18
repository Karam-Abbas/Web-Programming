// Symbols

// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object
// 4. Store symbol as the property to that object.
// 5. Iterate over Symbol.



let sym = Symbol("foo");
console.log(typeof(sym));

let obj ={};
obj.value = sym; 
obj["value2"]=sym;
obj[Symbol("lol")]= "hello" ;
 console.log(obj);