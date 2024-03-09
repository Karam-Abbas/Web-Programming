// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

let car =
{
    type: "sedan",
    model:2015,
    color:"black"
}
console.log(car);

console.log(typeof car);

car.type="Toyota";

console.log(car);

car.wheel = 4 ;

console.log(car);