///////////////////////////////////////////////////////////////////////////////
//callback functions
//forEach
//filter
//arrow =>
//map
//sort
//reduce

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
console.log(companies);

//using for loop to print the whole array
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

//same result as above but with forEach.
companies.forEach(function (company) {
    console.log(company)
});

companies.forEach(function (company) {
    console.log(company.category) //.category prints all "categories" in the array
});

///////////////////////////////////////////////////////////////////////////////

//using filter to print array of all Retail companies
const retail = companies.filter(function (company) {
    if (company.category == "Retail") {
        return true;
    }
});
console.log(retail);

//same as above printing array of Technology companies
const technology = companies.filter(function (techCo) {
    return techCo.category == "Technology";
});
console.log(technology);

//filter finance companies using arrow function
const finance = companies.filter((fin) => fin.category == "Finance");
console.log(finance);

//filter finance companies between dates using arrow
const dates = companies.filter((date) => date.start >= 1980 && date.end < 2015);
console.log(dates);

///////////////////////////////////////////////////////////////////////////////

//map function to print the company names in array
const coNames = companies.map((names) => names.name);
console.log(coNames);

//printing company name and calculating end-start to get duration in operation
//`${these are template literals}`
const nameYear = companies.map(ny => `${ny.name} lasted ${ny.end - ny.start} years`);
console.log(nameYear)

//sorting companies from start year
const sortedCo = companies.sort((co1, co2) => co1.start > co2.start);
console.log(sortedCo);

//same as above but using short if ? and else : (The Ternary Operator)
const sortedCo1 = companies.sort((co1, co2) => (co1.start > co2.start ? 1 : -1));
console.log(sortedCo1);

//find the total of all companies years
const allYears = companies.reduce((total, years) => total + (years.end - years.start), 0);
console.log(`The total year of the companies is ${allYears}`);


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//printing ages over 21
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        console.log(ages[i]);
    }
};

//printing ages over 21 in an array using push function
let canDrive = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrive.push(ages[i]);
    }
};
console.log(canDrive);

//same result as above using filter function
//filter function always returns an array
let canDrink = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
});
console.log(canDrink);

//same result using arrow function =>  (arrow means return function)
let canRide = ages.filter((age) => age >= 21);
console.log(canRide);

//reducing code using arrow function, all below have the same result
let canSmoke1 = ages.filter((age) => { return age >= 18 });

let canSmoke2 = ages.filter(age => { return age >= 18 });

let canSmoke3 = ages.filter(age => age >= 18);

console.log(canSmoke1);
console.log(canSmoke2);
console.log(canSmoke3);

///////////////////////////////////////////////////////////////////////////////

//printing the square route of each number in ages
const agesMap = ages.map(age => Math.sqrt(age));
console.log(agesMap);

//as above but used .map twice to get the square routes of ages * 10
const agesMap1 = ages.map(age => Math.sqrt(age)).map(age => age * 10);
console.log(agesMap1);

///////////////////////////////////////////////////////////////////////////////

//sorting the numbers, this method sorts by the 1st digit of each number
const ageSort = ages.sort();
console.log(ageSort); //Prints 05,12,13,15,16,20,21,25,32,33,44,45,54,61,64

//sorting the numbers low - high
const sort = ages.sort((a, b) => a - b);
console.log(sort);

///////////////////////////////////////////////////////////////////////////////
//sum and reduce

//calculating the sum of all numbers in ages
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum = ageSum + ages[i];
    ageSum += ages[i]; //this is the same as above so doing it twice now
}
console.log(`The sum of ages is twice is ${ageSum}`);

//same as above in short hand using reduce.
let ageSum1 = ages.reduce((total, age) => total + age);
console.log(`The sum of ages is ${ageSum1}`);


///////////////////////////////////////////////////////////////////////////////