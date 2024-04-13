let result = document.querySelector(".result");
let submit = document.querySelector("#btn");

submit.addEventListener("click",(event)=>{
event.preventDefault();
let num1 = Number(document.querySelector(".num1").value);
let num2 = Number(document.querySelector(".num2").value);
let operator = document.querySelector("#selectOp").value;

if (operator == "plus")
{
  result.innerHTML = num1+num2;
}
else if(operator == "min")
{
  result.innerHTML = num1- num2;
}
else if(operator == "div")
{
  result.innerText = num1 / num2;
}
else if(operator == "mult")
{
  result.innerHTML = num1 * num2;
}
});