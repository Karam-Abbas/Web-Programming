// Sets

// 1. Create a Set name (letters)
// 2. Add ("a", "b", "c") as properties
// 3. Add ("a", "b", "c") as values
// 4. Iterate over Set & log the values.

let s = new Set();

s.add("a");
s.add("b");
s.add("c");

for (let values of s) {
  console.log(values);
}
