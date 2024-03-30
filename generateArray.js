// Create a function that accepts two numbers to generate an array between them.
function generateArray(start, end) {

    // Determine the length of the array and the number  of features to be passed through it using conditional if and else
let length;
if (start <= end) {
    length = end - start + 1;
} else {
    length = start - end + 1;
}

// Determine the increment direction whether increse or decrease
let increment = start <= end ? 1 : -1;

// Create  an empty array to store nnewly generated numbers
let array = [];

// Use the for loop to iterate through the array and add new elements
for (let i = 0; i < length; i++) {
 array[i] = start + i * increment;
}
return array;
}

// Declare variables and assign them values.
let start = -4;
let end = 7;
// Output the result
console.log(generateArray(start, end))