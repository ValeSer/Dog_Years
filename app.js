// this is my own age, you can write yours
const myAge = 39

//this value will change
let earlyYears = 2

earlyYears = earlyYears * 10.5

// we already accounted for the first two years, so we substract 2 to myAge
let laterYears = myAge - 2

//calculate the number of dog years accounted for by your later years
//Use the multiplication assignment operator to multiply and assign in one step
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//sum of the 2 years to get my age in dog years
myAgeInDogYears = earlyYears + laterYears

// My name will be returned in lower case
const myName = 'Valeria'.toLowerCase();

// log to the console my human age and my eventual dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`)
