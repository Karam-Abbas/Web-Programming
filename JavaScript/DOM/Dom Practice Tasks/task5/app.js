// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

let a = document.querySelector('a');
console.log(a.getAttribute("href"));

let a2 = document.querySelector('.a-two');
a2.innerText = "Link";
a2.setAttribute("href","https://www.youtube.com/watch?v=H3XIJYEPdus");







