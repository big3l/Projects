//creating an object

let myObj = { fname: "John", lname: "Doe", age: 49, city: "Hamburg" };
console.log(myObj);

let myJson = JSON.stringify(myObj); //this has converting the object into "string"
console.log(myJson);

let jsonContent = '{"name":"John" , "Age":34 , "City": "Hamburg" , "Married": true}';
console.log(jsonContent)

let obj = JSON.parse(jsonContent); //converting string to object
console.log(obj);
console.log(obj.City);

for (let i in obj) {
    console.log(obj[i]);
}

///////////////////////////////////////////////////////////////////

let objStudent = { student: [{ name: "Daniel", age: 36 }, { name: "Justin", age: 35 }, { name: "Lewis", age: 71 }] };
console.log(objStudent.student[1].name); //Justin
console.log(objStudent.student[2].age); //71
console.log(objStudent.student[0]); //Object { name: "Daniel", age: 36 }

for (let i in objStudent.student){
    console.log(objStudent.student[i]); //prints all objects inside student
}

console.log(JSON.stringify(objStudent));
//or (both are the doing the same thing - converting object to string)
jsonStudent = JSON.stringify(objStudent);
console.log(jsonStudent);

console.log(JSON.parse(jsonStudent)); //converted back to object

let myObj1 = {
    "name":"John",
    "age":30,
    "cars":["Ford", "BMW", "Fiat"]
};
for (let i in myObj1.cars){
    console.log(myObj1.cars[i]); //prints each value in "cars"
};


