//Maps

// 1. Create a new Map
// 2. Set these properties  ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size.

// let aba = new Map();

// let one = 'a';
// let two ='b';
// let three ='c';

// aba.set(one,1);
// aba.set(two,2);
// aba.set(three,3);

// console.log(aba);
// console.log(aba.get('a'));
// console.log(aba.size);
// aba.delete('b');
// console.log(aba);

// Write a function called countCharacters that takes a string as input and returns a Map that contains each character in the string as a key and the count of occurrences of that character as the value.

// Something like this 👇
// const text = "hello";

// const characterCountMap = countCharacters(text);
// console.log(characterCountMap);

// output
// Map(4) {
//     'h' => 1,
//     'e' => 1,
//     'l' => 2,
//     'o' => 1
//   }

let dok = new Map();
function countCharacters(str) {
  let a = str.split("");
  let count = 0;
  for (i in a) {
    for (j in str) {
      if (a[i] == str[j]) {
        count += 1;
      }
    }
    dok.set(a[i], count);
    count = 0;
  }
}

countCharacters("hello world");
console.log(dok);
