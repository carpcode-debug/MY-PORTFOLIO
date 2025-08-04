// Delete or comment out all previous code in practice-script.js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Original numbers array:', numbers);

const numbersReversed = numbers.reverse();
console.log('numbersReversed (after reverse()):', numbersReversed);
console.log('Original numbers array (after reverse()):', numbers);

// Notice that the original 'numbers' array has also been reversed!
// If you don't want to store it in a new variable, you can simply call it:
// numbers.reverse();
// console.log(numbers); // Will also show the reversed array