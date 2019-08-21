/////////////////////////////////////////////////
//for loop with array in js

let veggiefood =
    ["apple", "orange", "kiwi", "beans", "potato", "banana"];
veggiefood.push("chicken", "tomato");

for (let i = 0; i < veggiefood.length; i++) {

    if (veggiefood[i] == "chicken") {
        alert("this is not veggie");
    }
    console.log(veggiefood[i]);
}
console.log('\n');

////////////////////////////////////////////////
//change the non-veggie item 
console.log('the array after change \n');
for(let i=0; i< veggiefood.length ; i++){

    if (veggiefood[i] =="chicken"){
        alert("your list includes chicken!");
        veggiefood[i]="Lemon";
        alert("chicken changed to lemon");
    }
    console.log(veggiefood[i]);
}


//////////////////////////////////////////////////
//delete item from array...

let colors=["red", "black", "green"];
delete colors[0];
console.log(colors);
