//  Define a function called greet that takes a name as an argument and returns a greeting message. For       example, if the name is "Ayush", the function should return "Hello, Ayush!".

// Call the greet function you defined in the previous task with your name as the argument and log the result to the console.


function greet(name) {
  if (name) {
    return `Hello ${name}`;
  } else {
    return "Hello guest";
  }
}
console.log(greet("Ayush"));

// ------------------------------------------------------------------------------

// Modify the greet function to have a default argument of "Guest" for the name parameter. This means that if no name is provided, the function should return "Hello, Guest!".

// Rewrite the greet function as a function expression and store it in a variable called greetFunction.


const greetFunction = function (name) {
  if (name) {
    return `Hello ${name}`;
  } else {
    return "Hello guest";
  }
};
console.log(greetFunction());

// ------------------------------------------------------------------------------

// Rewrite the greet function as an arrow function.


const greet1 = (name) => {
  if (name) {
    return `Hello ${name}`;
  } else {
    return "Hello guest";
  }
};
console.log(greet1('Ayush'));

