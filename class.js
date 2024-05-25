// Create a new object named friend with similar properties to the student object, but with values representing a friend's name, email, age, and address. Log the friend object to the console.

const student = {
    friends : {
        name : 'Ayush',
        email : 'ayush22@navgurukul.org',
        age : 24,
        address : 'Ujjain , Madhya pradesh'

    }
}

console.log(student.friends);

// Create a new object named topper with similar properties to the student object, but with values representing a topper’s name, email, age, and address. Log the friend object to the console.

const student1 = {
    friends : {
        name : 'Ayush',
        email : 'ayush22@navgurukul.org',
        age : 24,
        address : 'Ujjain , Madhya pradesh',
        topper : {
            name : 'Ashu',
            email : 'Ashu@gmail.com',
            age : 23 ,
            address : 'Dewas , madhya pradesh'
        }

    }
}

console.log(student1.friends);


//Define a class called Student that takes parameters for name, email, age, country, city, and pin_code. Inside the class, set these parameters as properties of the new object. Make sure to add the greet method inside the class.

class student2 {
    constructor(name , email, age, city, country ){
        this.name = name;
        this.email = email;
        this.age = age;
        this.city = city;
        this.country = country;
    }
    greet = function(){
        
    }
    
}

//Add a method called getFullAddress to the Student class that returns the full address of the student in this format (India, Bangalore - 560038).


class student3 {
    constructor(name , email, age, city, country,pinCode ){
        this.name = name;
        this.email = email;
        this.age = age;
        this.city = city;
        this.country = country;
        this.pinCode = pinCode;
    }
    greet = function(){
        return `hello , i am ${this.name} `
    } 

    getFullAddress = function() {
        return `${this.country} ${this.city} ${this.pinCode}`
    }
}
const mySelf = new student3 ("Ayush Sharma" , "AyushSharma@gmail.com" , 24 , "Ujjain", "India" , 456001)
const friend = new student3 ("Ashu Sharma" , "AshuSharma@gmail.com" , 23 , "dewas", "India" , 455001)
const topper = new student3 ("Ashu" , "Ashu@gmail.com" , 22 , "Ujjain", "India" , 456001)
console.log('mySelf :=> ' ,mySelf);
console.log('friend :=>', friend );
console.log('topper :=> ' , topper);


