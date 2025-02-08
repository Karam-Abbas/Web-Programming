let a = [[1, [2, [3]]], 4, [5, [6, [7]]]];
let flatArray = [];

// function flattenArray(arr) {
//   for (x in arr) {
//     if (typeof x === "object") {
//       flattenArray(x);
//     } else {
//       flatArray.push(x);
//     }
//   }
// }

// tried the approach but it showed weird output like below
// Array before:  [ [ 1, [ 2, [Array] ] ], 4, [ 5, [ 6, [Array] ] ] ]
// Array after:  [ '0', '1', '2' ]

function flattenArray(arr) {
  // Iterating over the array using the map()
  arr.map((element) => {
    typeof element === "object" // if condition
      ? flattenArray(element) // if true
      : flatArray.push(element); //  else
  });
}

// This approach worked fine

flattenArray(a);
console.log("Array before: ", a);
console.log("Array after: ", flatArray);
