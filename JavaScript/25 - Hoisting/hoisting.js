/////////////////////////////////////////////////////////////////
//function Hoisting - calling the function before the written function

sayHello();

function sayHello(){
    console.log("Hello")
};

//Variables Hoisting
text = "Good Morning";
console.log(text);

//b is undefined as declared after calling it
var a = 1;
console.log(a + ", " +b); // 1, undefined
var b = 2;

// y is undefined as it has no value
var x = 7;
var y;
console.log(x + ", " + y); // 7, undefined



