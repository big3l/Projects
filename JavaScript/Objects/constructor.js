//////////////////////////////////////////////////////////
//Constructor, building all the properties with this, building 'new'
//objects to call as function

//Adding a single object, to add another person would mean repeating
//this process each time. This can be built in constructor and recalled


// let person = {
//     firstName: "Gilbert",
//     lastName: "Grape",
//     Age: 21,
//     Hair: "Brown",
//     Eyes: "Green",
//     PersonInfo: function () {
//         console.log(this.firstName + this.lastName + this.age);
//     }
// };

//////////////////////////////////////////////////////////
//Instead of using the above example for each additional person,
//create a constructor function and add below shorthand

function Person(first, last, age, hair) { //set the parimeters format being declaired below

    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.hair = hair;
    this.personInfo = function () { //function inside a function is no probs
        return (this.firstName + " " + this.lastName + " " + this.age);
        //can use return here as its within a function
    }
};
//Add new people by creating a "new" object 
let person = new Person("Gilbert", "Grape", 21, "Brown", "Green");
let person2 = new Person("Donnie", "Darko", 31, "Blonde", "Blue");

console.log(person.personInfo());
console.log(person2.personInfo());

//Add new people by creating a "new" object 
let person3 = new Object();
person3.name = "Bruce";
person3.lastName = "Banner";
person3.age = 39;
console.log(person3);

//Add new people by creating a "new" Array 
let person4 = new Array("Peter", "Parker", 18);
person4 = ["Peter", "Parker", "18"]; // same as let person3 new array
console.log(person4);

//////////////////////////////////////////////////////////
//exercise

function Employee(name, salary, title) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    this.info = function () {
        return ("*Employee Name: " + this.name + " " + "*Employee Salary: €" + this.salary
            + " " + "*Title: " + this.title + " *Gender: " + this.gender);
    }
}
let emp1 = new Employee("Tony Stark", 100000000, "Boss");
let emp2 = new Employee("Jessica Jones", 250000, "Muscle");
console.log(emp1.info());
console.log(emp2.info());

emp1.gender = "Male";
emp2.gender = "Female";
console.log(emp1.gender);
console.log(emp2.gender);


let emp3 = new Employee("Stan Lee", 345000, "Legend");
emp3.gender = "Male";
console.log(emp3.info());

//////////////////////////////////////////////////////////

let student = {
    Name: "Neil",
    Age: "60",
    City: "Southamptpn",
    Univercity: "Of Life",
    Language: "English",
    get lang() { // to get the value of a property
        return this.Language;
    },
    set lang(lang) { // to change the value of a property
        this.Language = lang;
    }
};
console.log(student.lang);
student.lang = "German";
console.log(student.lang);


function Student(Name, Age, City, Univercity, Language, USD, changeRate) {
    this.name = Name;
    this.age = Age;
    this.city = City;
    this.univercity = Univercity;
    this.language = Language;
    this.bankAccount = USD;
    this.changeMoney = function () {
        return this.bankAccount * changeRate;
    }
    this.studentInfo = function () {
        return this.name + " " + this.age + " lives in " + this.city
            + " studied at " + this.univercity + " speaks " + this.language
            + " the exchange rate is " + this.changeMoney() + "€";
    };
}

let student1 = new Student("Scott Lang", 38, "New York", "Somewhere", "American", 1000, 0.8);
let student2 = new Student("Danny Rand", 25, "Manhatten", "Posh one", "American", 1000, 1.3);
console.log(student1.studentInfo());
console.log(student2.studentInfo());


//////////////////////////////////////////////////////////
//using class and constructor instead of function
//class is the same as object 

class Students { // class name must always start with capital
    constructor(Name, Age, City, Univercity, Language, USD, changeRate) {
        this.name = Name;
        this.age = Age;
        this.city = City;
        this.univercity = Univercity;
        this.language = Language;
        this.bankAccount = USD;
        this.changeMoney = function () {
            return this.bankAccount * changeRate;
        }
        this.studentInfo = function () {
            return this.name + " " + this.age + " lives in " + this.city
                + " studied at " + this.univercity + " speaks " + this.language
                + " the exchange rate is " + this.changeMoney() + "€";
        };
    }
    hello() {
        return "Hello " + this.name;
    }
}

student3 = new Students("Luke Cage", 41, "New York", "Streets", "American", 1000, 5.8);
let student4 = new Students("Matt Murdock", 27, "Hells Kitchen", "Lawyer Uni", "American", 1000, 6.8);
console.log(student3.studentInfo());
console.log(student4.studentInfo());

console.log(student3.hello());

document.getElementById("info").innerHTML = student4.studentInfo();
