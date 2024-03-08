// 1. Create variable name (firstFavNumb) & store your favorite number.
// 2. Create variable name (secondFavNumb) & store second fav Number.
// 3. Check (firstFavNumb is greater then secondFavNumb)
// 4. Check (firstFavNumb is less then secondFavNumb)
// 5. Check (firstFavNumb is greater then & equal to secondFavNumb)
// 6. Check (firstFavNumb is less then & equal to secondFavNumb)
// 7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator.
// 8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator.
// 9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
// 10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.



// strict value operator that checks the data type of the variable and the value as well in one go to do this we use
// === triple equal & !== not double equal to check this it is strict one
// == & != these operators are loose operators and only checks the values of the operators.

// loose operator can also compare string and num like this  10 == '10'  the ans will be true and 10 == '20' will give you false 

var firstFavNumb = 17;
var secondFavNumb = 7;

console.log(firstFavNumb > secondFavNumb);
console.log(firstFavNumb < secondFavNumb);
console.log(firstFavNumb >= secondFavNumb);
console.log(firstFavNumb <= secondFavNumb);
console.log(firstFavNumb === secondFavNumb);     // strict equality equal operator
console.log(firstFavNumb == secondFavNumb);      // loose equality operator
console.log(firstFavNumb !== secondFavNumb);     // strict non equality operator
console.log(firstFavNumb != secondFavNumb);      // loose non equality operator