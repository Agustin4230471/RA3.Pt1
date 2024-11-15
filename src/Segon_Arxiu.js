//Exercici 6
const number = 1.234;
const bigInt = 5678n;
const bigIntAsNumber = Number(bigInt);

console.log((number + bigIntAsNumber).toFixed(1));
console.log((number - bigIntAsNumber).toFixed(1));
console.log((number * bigIntAsNumber).toFixed(1));
console.log((number / bigIntAsNumber).toFixed(1));