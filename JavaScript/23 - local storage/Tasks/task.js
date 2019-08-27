let form = document.querySelector("#task-form");
let taskInput = document.querySelector("#task");
let taskList = document.querySelector("#task-List")

loadEventListener();
function loadEventListener() {
    form.addEventListener("submit", addTask);
    taskList.addEventListener("click", removeTask);
    document.addEventListener("DOMContentLoaded", getTasks);
}

function createH5(text) {
    let h5 = document.createElement("h5");
    let taskText = document.createTextNode(text);
    h5.appendChild(taskText);
    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.className = "delete btn btn-danger ml-5";
    h5.appendChild(delBtn);
    taskList.appendChild(h5);
}

function addTask(e) {
    e.preventDefault();
    if (taskInput.value != "") {
        createH5(taskInput.value)
        storeToLocalStorage(taskInput.value);
        taskInput.value = "";
    }
    else { alert("Please add Task") }
}

function removeTask(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        removeFromLocalStorage(e.target.parentElement);
    }
}

function storeToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") == null) {
        alert("The local storage was empty!");
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//add to localstorage without input(using console)
function store() {
    let myTask = localStorage.getItem("tasks");
    myTask = JSON.parse(myTask);
    myTask.push("This is a new task");
    myTask = JSON.stringify(myTask);
    localStorage.setItem("tasks", myTask);
}

function getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.forEach(function (storedTask) {
            createH5(storedTask)
        });
    }
}

function removeFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        task = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function (task, index) {
        if (taskItem.firstChild.textContent === task) {
            tasks.splice(index, 1);
        }

    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}