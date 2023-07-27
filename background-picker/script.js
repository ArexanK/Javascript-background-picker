// These are eventListeners = listening to clicks below
// document = is the page rendering of HTML & CSS
// getElementById = get elements in the document that have a Id label
// onclick = when you click on it run the set of instructions (partyPurple, partyGreen, partyBlue functions below)

document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyRed




// write instructions to make the elements above work (functions)
//document.querySelector('body') = go back to document(htm&css) and find(querySelector) the body(HTML page)
// style.backgroundcolor= give it a background color. 
// same above but find(querySelector) in the body(HTML page ) and style.color= make font white
function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'rgba(241, 63, 247, 1)' //color purple background
    document.querySelector('body').style.color = 'white' // color font white
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'rgba(0, 253, 81, 1)' //color green background
    document.querySelector('body').style.color = 'white' // color font white
}

function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'rgba(0, 254, 255)' //color blue background
    document.querySelector('body').style.color = 'white' // color font white
}

function partyRed() {
    document.querySelector('body').style.backgroundColor = 'rgba(255, 0, 0)' //color background red
    document.querySelector('body').style.color = 'white' // color font white

}

// re-write this 10x 