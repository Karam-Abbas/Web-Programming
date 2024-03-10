// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc(fn)
{
    let a = 10;
    fn(a);
}
function fn(x)
{
    console.log(x);
}

showCallFunc(fn);