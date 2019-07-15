///////////////////////////////////////////////////
//functions

//#### arguments and parameters are the same thing ####


//functions with no argurments (brackets are empty)
function greeting() {
    console.log("Good morning");
}
greeting(); //call the function


//function with argument (message)
function sayHi(message) {
    console.log(message);
}
sayHi("Good Morning");//this wont work without defining (message)

let message = "Good Afternoon";//define the argument (message)
sayHi(message);


///////////////////////////////////////////////////
//functions with more than 1 argument

function getMax(num1, num2) { //2 arguments defined
    console.log(arguments); //Arguments { 0: 5, 1: 10, … }
    console.log("The value of the 1st argument is: " + arguments[0]); //The value of the 1st argument is: 5
    if (num1 > num2) {
        console.log(num1);
    }
    else {
        console.log(num2);
    }
}
getMax(5, 10); //will print 10 - all/both arguments must be defined for it to work

///////////////////////////////////////////////////
//functions with more than 1 arguments undefined
//"arguments" is a javascript auto variable arranged in array[]

function getMax1() {
    if (arguments[0] > arguments[1]) {
        console.log(arguments[0]);
    }
    else {
        console.log(arguments[1]);
    }
}
getMax1(5, 10); //will print 10

///////////////////////////////////////////////////
//this function will print the largest number

function getMax2() {
    let max = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log("i= " + i + ", arguments[i]= " + arguments[i] + ", max = " + max);
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    console.log("The max number = " + max);
}
getMax2(1,99,30,2,80); //99 is the largest number

///////////////////////////////////////////////////
//same as above but using "return" 

function getMax3() {
    let max = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log("i= " + i + ", arguments[i]= " + arguments[i] + ", max = " + max);
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    console.log("The max number = " + max);
    return max;
}
document.getElementById("maxNumber").innerHTML = getMax3(1,99,30,2,80);

///////////////////////////////////////////////////
//same as above but not using "return" 

function getMax4() {
    let max = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log("i= " + i + ", arguments[i]= " + arguments[i] + ", max = " + max);
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    console.log("The max number = " + max);
    document.getElementById("maxNumber").innerHTML = max;
}
