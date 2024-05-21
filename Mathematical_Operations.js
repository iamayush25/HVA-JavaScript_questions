// Create a callback function doubleNumber that takes a number and returns its double.

function mainFunction(number, callback) {
  callback(number);
}
function doubleNumber(num) {
  console.log(num * 2);
}

mainFunction(5, doubleNumber);

// Create another callback function squareNumber that takes a number and returns its square.

function squareNumber(num) {
  console.log(num * num);
}

squareNumber(5);

//   Create another callback function incrementNumber that takes a number and returns the number incremented by one.

const incrementNumber = (number1) => {
  return number1 + 1;
};
console.log(incrementNumber(5));


// Define a function performOperation that accepts two parameters: num (a number on which to perform the operation), and operation (a callback function that specifies the operation to be performed on num). Inside performOperation, call the operation function and pass num as an argument. The function should return the result.

function performOperation(num , operation){
  operation(num)
}
console.log(performOperation(5));

