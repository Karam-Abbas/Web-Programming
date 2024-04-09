let btns = document.querySelectorAll(".btn");

function colorChanger(btn)
{
  btn.addEventListener("click",()=>{
  let backGround = document.body;
  backGround.className="";
  console.log(backGround.classList);
  if(btn.value=="purple")
  {
    backGround.classList.add("purple");
  }
  else if(btn.value=="blue"){
    backGround.classList.add("blue");
  }
  else if(btn.value=="red"){
    backGround.classList.add("red");
  }
  else if(btn.value=="green"){
    backGround.classList.add("green");
  }
  else if(btn.value=="yellow"){
    backGround.classList.add("yellow");
  }
  else if(btn.value=="teal"){
    backGround.classList.add("teal");
  }
});
}

btns.forEach(colorChanger);