// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.


var favActorFirstName = "Hritik";
var favActorLastName = " Roshan";

var fullName = favActorFirstName.concat(favActorLastName);
console.log(fullName);

var upperCase = fullName.toUpperCase();
var msg = `My favorite Actor is ${upperCase}. His physique is amazing.`
console.log(msg);

let new_msg = "His best show is Silicon Valley";
console.log(new_msg);

msg += new_msg;
console.log(msg);
