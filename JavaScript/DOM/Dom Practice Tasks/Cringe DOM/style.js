let a = document.querySelector(".text");

let new_div = document.createElement("div");

a.addEventListener("mouseleave", ()=>{
    new_div.innerHTML = "<h1>😡😡 Don't you dare to go away now 😡😡, i just called you king<h1>";
    a.innerHTML = "<h1>👿👿</h1>";
    a.appendChild(new_div);
});

a.addEventListener("mouseenter", ()=>{
    new_div.innerHTML = "<h1>🖤🖤 Welcome my KING 🖤🖤<h1>";
    a.innerHTML = "<h1>😇😇</h1>";
    a.appendChild(new_div);
});
