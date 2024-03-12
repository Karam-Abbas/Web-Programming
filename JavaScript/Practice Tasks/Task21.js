// -------------------------------------
// REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.

// setTimeout(function () {
//   console.log("Hello");
//   setTimeout(function () {
//     console.log("Hey");
//     setTimeout(function () {
//       console.log("Namaste");
//       setTimeout(function () {
//         console.log("Hi");
//         setTimeout(function () {
//           console.log("Bonjour");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// as per this case there was no function name only function keyword was used so we don't have to write anything only ()=>{}  this worked but when there is a function name then
// greet = () => {}  notation is used and if you want to make it const let or var  then    const greet = () => {}
// and if no function name but still want to make it let const or var then  var = () =>{} is used.

setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("Hey");
    setTimeout(() => {
      console.log("Namaste");
      setTimeout(() => {
        console.log("Hi");
        setTimeout(() => {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
