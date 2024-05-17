// 1 - Define a function called calculateArea that takes two parameters, width and height, and returns the area of a rectangle (width * height).

// 2 - Call the calculateArea function with width = 5 and height = 10, and log the result to the console.


function calculateArea(width , height) {
    return 'area of a rectangle' , width * height
}
console.log(calculateArea(5 , 10));


// Modify the calculateArea function to have a default value of 1 for both width and height. This means that if no arguments are provided, the function should return 1.

function calculateArea1(width , height) {
    if (width & height) {
        return 'area of a rectangle' , width * height
    }
    else {
        let width = 1;
        let height = 1;
        return 'area of a rectangle' , width * height
    }
}
console.log(calculateArea1());


// Rewrite the calculateArea function as a function expression and store it in a variable called calculateAreaFunction.

const calculateAreaFunction = function calculateArea2(width , height) {
    if (width & height) {
        return 'area of a rectangle' , width * height
    }
    else {
        let width = 1;
        let height = 1;
        return 'area of a rectangle' , width * height
    }
}
console.log(calculateAreaFunction(2, 3));


// Rewrite the calculateArea function as an arrow function.

const calculateAreaArrow = (width , height) => {
    return 'area of a rectangle' , width * height 
}
console.log(calculateAreaArrow(5,5));