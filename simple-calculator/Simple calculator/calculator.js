// make declaration (let) and assignment (0)
let total = 0

// These are eventListeners = listening to clicks below
// document = is the page rendering of HTML & CSS
// querySelector= returns the first element ('#tiger') withing HTML that matches the specified selector
// click = when you click on it run the set of instructions 
// addEventListener can handle any type of events and you can change instuction of example: you can change "click"> "mouse"
//addEventListerner is good for flexibilty, you can use w/ the mouseenter, click or double click etc. 
// when adventListerner sees or hear the event(click)it tells this set of instructions (makeZero) to run

document.querySelector('#tiger').addEventListener('click', makeZero)
document.querySelector('#lion').addEventListener('click', add3)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#monkey').addEventListener('click', minus2)

//The instructions ( function makeZero) that run after eventListener 


function makeZero() {
    total = 0
    document.querySelector('#result').innerText = total
}

function add3() {
    total = total + 3 // re-assigning total from 0 ( so the answer will be 3)
    document.querySelector('#result').innerText = total // document.queurySelector= looking for the tag ('#result')-- (span id="result")put inside (innerText) number 3
    //
}

function add9() {
    total = total + 9 // re-assigning total from 3 ( so the answer will be 12)

    document.querySelector('#result').innerText = total
}

function minus2() {
    total = total - 2 // re-assigning total from 12 ( so the answer will be 10)

    document.querySelector('#result').innerText = total
}