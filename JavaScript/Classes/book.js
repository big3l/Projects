//////////////////////////////////////////////////////////////////////
//objects refresher

let book = {
    name: "Javascript the good part",
    author: "John",
    year: 2016,

    bookInfo: function () {
        return "the book name is " + this.name + ", the author is " + this.author + ", the year is " + this.year;
    }

};
console.log(book.bookInfo());
console.log(book);


//this will print all the properties in "book"
for (let i in book) {
    console.log(book[i]);
}

// this is the same formula as above.
// for (let i=0 ; i< book.length; i++){ 
//     console.log(book[i]);
// }

//////////////////////////////////////////////////////////////////////

let message = "Hello World";
let greet = message;

greet = "Hi there!"; //changed greet from message to "Hi there"

console.log(message); //Hello World
console.log(greet); //Hi there!

//////////////////////////////////////////////////////////////////////

let person = {
    name: "John",
    age: 28,
    gender: "male"
};
let user = person; //user is now the same as person
console.log(user.name);

user.name = "Happy"; //changed the name from John to Happy
console.log(user.name);
console.log(person.name); //will also change person name to Happy

person.age = 30; //changed the age from 28 to 30
console.log(person.age);
console.log(user.age); //will also change user age to 30

//////////////////////////////////////////////////////////////////////

let personName = "John Smith";
console.log(personName);
console.log(personName.toUpperCase());
console.log(typeof personName)

let personName2 = new String("John Smith"); //using "new" creates and object
console.log(personName2);
console.log(typeof personName2);

//////////////////////////////////////////////////////////////////////

// let book1 = {};
let book1 = new Object();
book1.bookName = "Learn Javascript";
book1.authorName = "Egleburt Humpadink";
book1.year = 1887;
book1.info = function () {
    return this.bookName + " is written by " + this.authorName + " published in " + this.year
};
console.log(book1.info());

//////////////////////////////////////////////////////////////////////

function Book(name, author, year) {
    this.bookName = name;
    this.authorName = author;
    this.yearPublished = year;
    this.info = function () {
        return this.bookName + " is written by " + this.authorName + " published in " + this.yearPublished;
    };
}
let cssBook = new Book("learn CSS in 4 days", "Einstein", 2147);
console.log(cssBook.info()); //this will print the function

for (let i in cssBook) {
    console.log(i); //this will print the properties
    console.log(cssBook[i]);//this will print the values of the properties        
}

//////////////////////////////////////////////////////////////////////

