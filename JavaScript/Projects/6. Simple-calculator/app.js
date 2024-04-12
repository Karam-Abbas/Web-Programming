let result = document.querySelector(".result");
let submit = document.querySelector("#btn");

submit.addEventListener("click",(event)=>{
event.preventDefault();
let num1 = Number(document.querySelector(".num1").value);
let num2 = Number(document.querySelector(".num2").value);
let operator = document.querySelector("#selectOp").value;
let ans = 0;
if (operator == "plus")
{
  ans = num1+num2;
}
else if(operator == "min")
{
  ans = num1-num2;

}
else if(operator == "div")
{
  ans = num1 / num2;
}
else if(operator == "mult")
{
  ans = num1 * num2;
}
result.innerHTML = ans;
});