//To Do List - we create to do list array

let toDoList = ["Learn Javascript, Learn HTML, Write CSS"];

let userAnswer = prompt("What would you like to do?");
while (userAnswer !== "quit") {
    if (userAnswer == "list") {
        console.log(toDoList);
        document.write(toDoList);
    }
    else if (userAnswer == "new") {
        let newToDo = prompt(" add new task");
        toDoList.push(newToDo);
    }
    userAnswer = prompt("what would you like to do?");

}
console.log("Okay you close the app!!!");
alert("Okay you close the app!!!");




/////////////////////////////////////////////////////////
//my 2 attempts at above.............

//toDo = ['hoover', 'dust', 'tidy'];
// function view() {
//     document.write(toDo);
//     console.log(toDo);
// }
// function addNew() {
//     let answer = prompt("What would you like to add?");
//     while (answer !== " ") {
//         toDo.push;
//         break;
//     }
//     document.write(toDo);
//     console.log(toDo);
//     alert(answer + "has been added to list");
// }
// function quit() {
//     prompt("Are your sure?");
// }

//////////////////////////////////////////////////
// toDo = ['hoover', 'dust', 'tidy'];

// let answer = prompt("What would you like to do?");

// while (answer == "List"){
//     document.write(toDo);
//     console.log(toDo);
//     break;
// }