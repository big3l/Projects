///////////////////////////////////////////////////////
//Debug - using Object and Function

let n = 10;

count(n);

function count(number) {
    for (let i = 0; i < number; i++) {
        document.write(i + "<br>");
        if (i == 5) {
            break;
        }

    }
}

/////////////////////////////////////////////////////

function square(num) {
    for (let i = 0; i < num; i++) {

        for (let c = 0; c < num; c++) {
            document.write(" &#9733; ");
        }
        document.write('<br>');
    }
    document.write("<br> we are finish thanks for watching!!! <br>");
}

square(5);





// the below didnt work out as an example
// var person = {
//     firstName: "John",
//     lastName: "Snow",
//     age: 50,
//     eyeColor: "Brown",
// };
// printPersonProp(person);

// function printPersonProp(obj) {
//     // let text;
//     // text ="There is a user with the name " + obj.firstName + " " + obj.lastName + " who is " 
//     // + obj.age + " years old with " + obj.eyeColor + " eyes ";
//     //     document.write(text);

//     for (prop in obj) {
//         dociment.write(obj[prop]);
//     }   
// }




















/////////////////////////////////////////////////////