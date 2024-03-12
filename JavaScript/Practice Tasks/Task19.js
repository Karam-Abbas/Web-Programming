// setInterval and  TimeoutInterval

// SetInterval will repeat infinite times until stopped by the clear interval function
// timeoutInterval will only work once after a set delay means it will not repeat only one time function

let intervalId = setInterval(function () {
  var dt = new Date();
  console.log(dt.getSeconds());
}, 2000);

// setInterval returns an interval id which is used by the clearInterval method to stop it when the timer reaches by the timeout function.

setTimeout(function () {
  clearInterval(intervalId);
  console.log("Black out");
}, 10000);
