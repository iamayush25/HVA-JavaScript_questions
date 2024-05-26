//Define the Employee Class. The class should take parameters for name, email, age, department, position, and salary. Inside the constructor method, set these parameters as properties of the employee object.

//Add a method named introduce() inside the class that logs a greeting and the employee's name and position, e.g., "Hello everyone, I am Ayush, Senior Software Developer."

//Add a method named displaySalary() inside the class that logs the employee's salary formatted as a string, e.g., "Salary: $5000".

//Create an object named newEmployee with properties representing a new employee's name, email, age, department, position, and salary. Log this object to the console.

//Create another object named manager with properties representing a manager. Log this object to the console.


class Employee {
  constructor(name, email, age, department, position, salary) {
    this.name = name ;
    this.email = email ;
    this.age = age ;
    this.department = department ;
    this.position = position ;
    this.salary = salary ;
  }
  introduce = function() {
    console.log(`Hello everyone my name is ${this.name} , ${this.position}`);
  }

  displaySalary =  function(){
    console.log(`Salary : ${this.salary}`);
  } 

}

class manager {
    constructor(name, email, age, department, position, salary) {
      this.name = name ;
      this.email = email ;
      this.age = age ;
      this.department = department ;
      this.position = position ;
      this.salary = salary ;
    }
    introduce = function() {
      console.log(`Hello everyone my name is ${this.name} , ${this.position}`);
    }
  
    displaySalary =  function(){
      console.log(`Salary : ${this.salary}`);
    } 
  
  }
const newEmployee = new Employee ('Ayush Sharma' , 'Ashu22@navgurukul.org'  , 24 , "navgurukul" , 'Front-end developer' , 5000)

const managerInfo = new manager ('Ashu' , "Ashu@gmsil.com" , 23 , 'netWest Group' , "Senior Manager" , 150000 )

console.log(newEmployee)
newEmployee.introduce();
newEmployee.displaySalary();
console.log(managerInfo)
managerInfo.introduce()
managerInfo.displaySalary()