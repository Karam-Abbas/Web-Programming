// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

let a = document.querySelector(".new-list");

let new_element = document.createElement("li");
new_element.innerHTML="<b>Karam</b>";
a.prepend(new_element);

let new_element2 = document.createElement("li");
new_element2.innerHTML="<i>Abbas</i>";
a.append(new_element2);

let new_node = document.createElement("p");
new_node.innerText="Hemlo g";
a.insertAdjacentElement("beforeend",new_node);
let b = document.querySelector(".helo")
a.removeChild(b);