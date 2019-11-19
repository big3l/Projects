let operation = process.argv[2]
let numbers = process.argv.slice(3)
let sum = 0;

function sumNumbers(myArr) {
    for (let i = 0; i < myArr.length; i++) {
        sum += parseInt(myArr[i])
    } console.log(sum)
}

function avgNumbers(myArr) {
    return sumNumbers(myArr) / myArr.length;
}

switch (operation) {
    case 'sum': sumNumbers(numbers);
        break;
    case 'avg': console.log(avgNumbers(numbers))
        break;
}

// console.log(numbers)





// sum.forEach((item) => {numbers += Number(item)})

// let arr = process.argv.slice(2)
// console.log(arr)
// let sum = arr[0];
// let avg = arr[1];

// arr.forEach((item) => {sum += item})
// return (arr)
// let avg = process.argv.slice(3)
// avg.forEach((item) => {sum += parseInt(item)})
// console.log(avg)