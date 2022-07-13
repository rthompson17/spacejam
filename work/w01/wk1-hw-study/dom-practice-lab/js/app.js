// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//Create a new HTML/CSS/JS Repl and name it "DOM Lab". OR you can do what we did in class
console.log('The JS file has been loaded for lab!')

// Task 1.0
// Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector("main");

// Task 1.1
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this:
// 'var(--main-bg)'

console.log(mainEl)
console.dir(mainEl)
mainEl.style.backgroundColor = 'var(--main-bg)'

// Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

// Task 1.3
// Add a class of flex-ctr to mainEl.
// Hint: Element.classList API

mainEl.classList.add("flex-ctr")

// Task 2.0
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

topMenuEl = document.querySelector("#top-menu")
console.log(topMenuEl)

// Task 2.1
// Set the height topMenuEl element to be 100%.

topMenuEl.style.height = "100%";

// Task 2.2
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor =  'var(--top-menu-bg)'

// Task 2.3
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add(".flex-around")

// Task 3.0
// Copy the following data structure to the top of script.js:

// Task 3.1
// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

menuLinks.forEach((link) => {
    //link.innerHTML(<a href=""<></a>)
   const a = document.createElement("a");
   a.setAttribute("href", link.href);
   a.textContent = link.text;
   console.log(a);
   topMenuEl.append(a);
})