//To Do List - we create to do list array

let toDoList = ["Learn Javascript", "Learn HTML", "Write CSS"];

let userAnswer = prompt("What would you like to do?");
while (userAnswer !== "quit") {
    if (userAnswer == "list") {
        printList(); //function

    }
    else if (userAnswer == "new") {
        addNew(); //function
    }
    else if (userAnswer == "del"){
        delItem();
    }
    userAnswer = prompt("what would you like to do?");


}
console.log("Okay you close the app!!!");
alert("Okay you close the app!!!");


////////////////////FUNCTIONS///////////////////////
function printList(){
    toDoList.forEach(function(item){  
        console.log(item);
    });
}
function addNew(){
    toDoList.forEach(function(newAdd){
        newToDo= prompt(" add new task");
        toDoList.push(newToDo);
        console.log(newToDo + " has been added.");
    });
}
function delItem(){
    let delIndex= prompt("What do you want to delete?");

    toDoList.splice(delIndex,1);
    
    console.log(delIndex + " has been removed" );
}



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