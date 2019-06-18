//printing the numbers between 1 and 20 multi 9

let i = 0;
while (i <= 20) {
    console.log(i + " * 9 =" + i * 9);
    i++;
}

//////////////////////////////////////////////////
//Reverse of above....

let j = 20;
while (j >= 0) {
    console.log(j + " * 9 =" + j * 9);
    j--;
}

//////////////////////////////////////////////////
// //using "sum" and "counter" with alert and console to show working
let sum = 0; counter = 0;
while (counter <= 10) {
    sum = sum + counter;
    console.log(" the counter is " + counter + " the sum is " + sum);
    //alert("Counter = " + counter + " Sum = " + sum);
    counter++;
}

/////////////////////////////////////////////////
//do while loop

let h = 0;
let str = "";
do {
    str = "the counter = " + h;
    console.log(str);
    h++;
}
while (h <= 10);


/////////////////////////////////////////////////
//do while loop

let t = 0;
let Sum = 0;
do {
    Sum = Sum + t;
    console.log("Sum = " + Sum);
    t++;
}
while (t <= 10);

//////////////////////////////////////////////////
// Square of stars with "while".....

x = 0;
while (x <= 10) {
    y = 0;
    while (y <= 10) {
        document.write(' &nbsp * ');
        y++;
    }
    document.write("<br>");
    x++;
}
