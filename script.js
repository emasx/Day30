'use strict';


// 70

//1. document.querySelector('.message') selects the element. 
//2. On this element we can read the textContent property.  .textContent

console.log(document.querySelector('.message').textContent);


// 71  What's the DOM and DOM Manipulation

// DOM = stands for Document Object Model, and it is a STRUCTURED REPRESENTATION OF HTML documents.
//     = allows us to use JavaScript to ACCESS HTML elements and styles to manipulate them.
//     = is a connection point between HTML documents and JavaScript code.
//     = is automatically created by the browser as soon as the HTML page loads and it is stored in a tree structure.
/* Manipulate = Change text
                HTML attributes
                CSS styles


DOCUMENT = is a special OBJECT that we have access to in JavaScript and this OBJECT serves as an entry point into the DOM.
*/



// 72 Selecting and Manipulating Elements

// Here we manipulate the TEXT CONTENT of one of the DOM nodes.
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// Input field = value.

// First we write it
document.querySelector('.guess').value = 23;

// Second we read it
console.log(document.querySelector('.guess').value);