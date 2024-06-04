// Define a variable named numbers and assign it an array containing some numbers (e.g., 1, 2, 3, 4, 5).
// Use the forEach method to iterate over the numbers array and log each number to the console.
// Use the forEach method to iterate over the numbers array and log each number multiplied by 2 to the console.
// Use the map method to create a new array called squaredNumbers that contains the square of each number in the numbers array. Log the squaredNumbers array to the console.
// Rewrite the callback function passed to the map function as an arrow function.




let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((value)=> {
    console.log(value * 2);
})

const squaredNumber = numbers.map ((sqrNum) => {
    console.log(sqrNum * sqrNum);
})

