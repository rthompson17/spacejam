console.log('JS FIle has been loaded!');

// Select the h1 element in the index.html, so we can
// edit its properties
const h1El = document.querySelector('h1');
// Look at the object I selected!
// console.log(h1El); // this will show up in the chrome console
// console.dir(h1El)

// // set a classname
// h1El.className = 'cool';

// // set an id
// h1El.id = 'batman';

// // set the text of the h1 element
// h1El.innerText = 'Goodbye Cruel World';

// h1El.style.color = 'red';

let username = ''
// after a player logs in, we want to display their name on 
// the screen

// Some logic has happened in order to get their name
username = 'Ruta';
userName2 = "Ryann";

// Display it on the page!
const playerNameEl = document.querySelector('#player-name');
const playerTwo = document.querySelector('.player-two-name');

console.log(playerNameEl);
console.dir(playerNameEl); // to look at the properties
console.log(playerTwo);
console.dir(playerTwo);

// playerNameEl.innerText = `Player Name: ${username}`
// playerTwo.innerText = `Player Two Name: ${userName2}`


// This was all very repetitive! So let's make a function...

function setPlayerName(playerNameEl, playerNumber){

    return `Player ${playerNumber}: ${playerNameEl}`
}

playerNameEl.innerText = setPlayerName("James", "1")
playerTwo.innerText = setPlayerName("Kerry", "2")


const commentEls = document.querySelectorAll('.comment')
console.log(commentEls)

// "elem" could be whatever you want to name it

commentEls.forEach((elemLI) => {
    elemLI.style.color="blue";
    elemLI.style.fontSize="50px";
})

// or e.g. 
// commentEls.forEach((x) => {
    // x.style.color="blue";
    // x.style.fontSize="50px";