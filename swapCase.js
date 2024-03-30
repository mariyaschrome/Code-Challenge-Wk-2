// Declare a variable and assign it a string value
let text = 'The Quick Brown Fox';

// Create a function that accepts a string as input and swaps the case of each character.
function swapCase(text) {
// Convert the string into an array of characters
    let words = text.split('');

// Iterate over each character in the string using the for loop and swap its case
for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].toUpperCase()) {
        words[i] = words[i].toLowerCase();
    } else { 
    words[i] = words[i].toUpperCase();
    }
 }
 // Join the array into a string 
 return words.join('');

 }
 // Show the output
 let result = swapCase(text);
 console.log(result);

 

