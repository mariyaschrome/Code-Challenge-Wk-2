// Declare a variable and assign it a string value
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array.
function primeNumber(num) {

// Use of if conditional to check if number is prime.
if (num <= 1) return false;
if (num <= 3) return true;
if (num % 2 === 0 || num % 3 === 0) return false;
if (num % 2 === 1) return true;
}

// Function to filter prime numbers from the array
function filterPrimes(numbersArray) {
    return numbersArray.filter(num => primeNumber(num));
}

// Output the result
let result = filterPrimes(numbersArray);
console.log(result);