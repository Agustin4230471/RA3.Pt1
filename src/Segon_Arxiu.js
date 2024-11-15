//Exercici 6
const number = 1.234;
const bigInt = 5678n;
const bigIntAsNumber = Number(bigInt);

console.log((number + bigIntAsNumber).toFixed(1));
console.log((number - bigIntAsNumber).toFixed(1));
console.log((number * bigIntAsNumber).toFixed(1));
console.log((number / bigIntAsNumber).toFixed(1));

//Exercici 7
const a = 4
const b = 4
const c = (a * a) + (b * a)
const hipotenusa = Math.sqrt(c)
console.log(hipotenusa)