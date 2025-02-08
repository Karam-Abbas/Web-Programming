let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
// shift removes from the start
// push adds at the end
function shifter(k, arr) {
  for (let i = 0; i <= k; i++) {
    // remove from the start
    //            v
    arr.push(arr.shift());
    //  ^
    // add at the end
  }
}

console.log("Before Shift: ",arr)
shifter(k,arr);
console.log(`After Shift of ${k} : ${arr}`);
