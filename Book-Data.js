// Define the Book Class. The class should take parameters for title, author, publisher, year, and genre. Inside the constructor method, set these parameters as properties of the book object.

// Add a method named describe() that logs a brief description of the book, combining the title, author, and year, e.g., "Five Point Someone - Chetan Bhagat (2004).


class Book {
    constructor(title , auther , publisher , year , genre){
        this.title = title;
        this.auther = auther;
        this.publisher = publisher;
        this.year = year;
        this.genre = genre;
    }
    describe = () => {
        let Discription = "The story revolves around a young pig named Wilbur who is saved from slaughter by a little girl named Fern. Wilbur forms a close friendship with Charlotte, a clever spider living in the barn, who devises a plan to save him. With the help of Charlotte's web-spinning abilities and some clever words, Wilbur becomes famous, and their bond grows stronger as they navigate life on the farm."
        console.log(`${Discription} title : ${this.title} auther : ${this.auther} Yera : ${this.year}`);
    }
}

let discr = new Book ("Charlotte's Web" , "E.B. White" , "Publication" ,"1952")
console.log(discr);
discr.describe()


// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// console.log(isNaN(true));
// console.log(isNaN(false));

// console.log(typeof(NaN));


