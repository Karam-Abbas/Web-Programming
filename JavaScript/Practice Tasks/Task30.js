// -------------------------------------
// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.

// Write the calculateProduct function using the reduce() method to achieve this task.

// Something like this 👇
// const numbers = [2, 3, 4, 5];

// const product = calculateProduct(numbers);
// console.log(product); // 120
// -------------------------------------


function calculateProduct(num)
{
    let a =1;
    for(let i = 0 ;i<num.length; i++)
    {
        a *= num[i];
    }

    return a;
}

function new_func(num)
{
    return num.reduce((p,c)=>p=p*c,1);;
}

const numbers = [2, 3, 4, 5];
const product = new_func(numbers);
console.log(product); // 120
