// ----------- GREAT WAY-----------

function newf()
{
    let para = document.querySelector(".para");
    let adv =  document.querySelector(".best");
    let newp = document.createElement('p');
    para.remove();
    newp.innerHTML = "<b>Web ke peeche kitna zaleel hoga re tu ab tu chor de?</b>"
    adv.insertAdjacentElement("afterend",newp);
}

let a = document.querySelector(".best");
// document.addEventListener("click",()=>alert("na kr roza lag rha hai"));
document.addEventListener("dblclick",newf);

