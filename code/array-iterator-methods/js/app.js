console.log('window loaded')

// const friends = ["Melissa", "Marc", "Andrew", "Nick"];

// friends.forEach(function(friend,idx) {
//   console.log(`I have a friend named ${friend}`);
// });

// friends.forEach((friend, idx) => {
// 	console.log(idx, ' index of friend')
// 	console.log(`I have a friend named: ${friend.toLowerCase()}`)
// })

// const nums = [1, 2, 3];

// // Return value of nums.map is a new array
// // storing that value in the variable called squared
// const squared = nums.map(function(num) {
//   return num * num; // the new value to be added to the new array we are creating
// });

// single line arrow functions ,there's an implicit return 
// const  = nums.map(num => num * num);

// const numsArrow = nums.map(num => {
// 	return num * num
// })


  // We want to create an array of HTML elements, that will display each person in 
  // a li




function createListElements(arrayOfItems){

	const liPeopleEls = arrayOfItems.map((person) => {
		// Create some html, 
		const liEl = document.createElement('li');
		// then edit the text in the html
		// maybe we want the town in a span tag
		liEl.innerHTML = `${person.name} <span class="town-${person.town}">${person.town}</span>`
		// return it to the new array
		return liEl
  })

  return liPeopleEls	
}



const people = [
	{name: 'Fred', town: 'Bedrock'},
	{name: 'Susan', town: 'Miami'},
	{name: 'John', town: 'Arcadia'},
	{name: 'jim', town: 'national park'},
	{name: 'Cas', town: 'Miami'},
	{name: 'Michelle', town: 'Arcadia'}
  ];

const people2 = document.querySelector('#people-2')
// const people1 = document.querySelector('#people')

const peopleList1 = createListElements(people)
// const peopleList2 = createListElements(people)

createUllist(peopleList1, people2)
// createUllist(peopleList2, people1) 
/// another way to call
// createUllist(createListElements(people), people2)
// createUllist(createListElements(people), people1) 

function createUllist(elementArray, parentElement){
	
	const el = document.createElement('ul');
	// console.log(el)

	console.log(elementArray, " < element Array", el, ' el element')
	elementArray.forEach(elem => {
		el.appendChild(elem)
	})

	parentElement.appendChild(el)

}