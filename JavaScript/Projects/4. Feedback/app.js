let feedBack_btn = document.querySelector("#send");
let b = document.querySelectorAll(".rating");
let feedBack = "";

function changer() {
  let a = document.querySelector(".ratings-container");
  let b = document.querySelector("#panel").children;
  b[0].innerText="Thanks for your Feedback";
  a.innerHTML = `
  <div class=h1>
  <p class="heart">❤</p></div>
    <br>
      <strong>Your Feedback:${feedBack}</strong>
      <br>
`;
}

function ele(element) {
  element.addEventListener("click", () => {
    feedBack = element.querySelector("small").textContent;
    Activate(element);
  });
}

function Activate(element)
{
  let parent = element.parentNode;
  Array.from(parent.children).forEach((child) => child.style.background = '#1d1c1c');
  element.style.background="#ccc";
}


b.forEach(ele);
feedBack_btn.addEventListener("click", changer);
