// Define a function called higherOrderFunction that takes two parameters: num and callback. Inside higherOrderFunction, call the callback function and pass num as an argument.

function higherOrderFunction(num, callback) {
    callback(num)
}

// // Define a function called callbackFunction that takes a number as an argument and logs it to the console. Call higherOrderFunction with a number and pass callbackFunction as the callback.

function callbackFunction(number) {
    console.log(number);
}
higherOrderFunction(5, callbackFunction)
    

// Modify the call to higherOrderFunction, to pass a number and the same callback but as a function expression.

const higherOrderFunction1 = function(a , b , callback1) {
    callback1(a, b)
}

const callbackNew = function(number1 , number2){
    console.log(number1 + number2);
}
higherOrderFunction1(6, 7, callbackNew);

    