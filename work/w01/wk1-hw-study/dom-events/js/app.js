console.log('JS is linked to the html!') // confirm the js is linked, by opening the devtools, 
// and looking for this log


// Listen for a click event on our button (element)!

//1.  Select the button element because we want to listen for a click on it!

const btnEl = document.querySelector('button');
// console.log(btnEl)

//2. Attach an event listen to the element (Now we want to attach the listen to our btnEl element)

btnEl.addEventListener('click', function(e){
	// console.log(e)// This object has to do with the click event
	// what element was clicked on?
	// what element has the listener?
	// what location of the page did we click?

   // I want to take whats in the input 
   // 1. select the input of the dom 
   const inputEl = document.querySelector('input');
   console.log(inputEl.value); // whats typed in the box when we click on the button
 
	// Create an li element (cuz thats what is in our list)
	// Take the value of the input and assign as the text of the li element we created
	const liEl = document.createElement('li');
	// console.log(liEl)

	// setting the li elements text to the input elements value
	// putting what is written in the input in between the li element tag that we created 
	liEl.innerText = inputEl.value;
	// Check this 
	console.log(liEl)

	// PUT the liEL on THE PAGE!

	// We want to put the liEl at the end of the ul list 
	// Select the ul (cuz thats where we want to put the liEl)
	const ulEl = document.querySelector('ul');
	// Then we can add teh liEl to the end
	ulEl.appendChild(liEl)



})


// When I click the Add Comment button
// I want to take whats in the input 
// 1. select the input of the dom
// 2. select the value

// and add it to the list





function handleClick(evt){
	console.log(evt)
}


// I want to click on the list items, 
// and when i do cross out the item

// This process is called event delegation!
const ulEl = document.querySelector('ul');

ulEl.addEventListener('click', function(e){
	console.log(e.target) // e.target is the html element we are clicking on!
	// e.target.remove() to completely remove the element from the page!
	e.target.style.textDecoration = 'line-through';
})


// const body = document.querySelector('body')

// body.addEventListener('click', function(e){
// 	console.log(e.target)
// })