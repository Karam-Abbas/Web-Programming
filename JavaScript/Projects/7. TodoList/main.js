let list = document.querySelector(".todos");
let input = document.querySelector("input");
let form_eve = document.querySelector("form");

function whole(value) {
  let d1 = document.createElement("div");
  let d2 = document.createElement("span");
  let d3 = document.createElement("span");
  d3.innerHTML = "&times;";
  d2.innerHTML = value;
  d1.classList.add("todo"); 
  d3.classList.add("delete");
  d1.appendChild(d2);
  d1.appendChild(d3);
  
  d3.addEventListener("click", () => {
    list.removeChild(d1);
  });
  return d1;
}

form_eve.addEventListener("submit", (e) => {
  e.preventDefault();
  let i = whole(input.value);
  list.appendChild(i);
  input.value = "";
});
