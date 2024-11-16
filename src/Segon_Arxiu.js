//Exercici 6
const number = 1234;
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

//Exercici 8
const enter = 10;
const string = "5";

const resultat = enter / string;
console.log(resultat);

//Exercici 9
const nomComplet = "Agustín Ruiz Sosa";
const parts = nomComplet.split(" ");
const primerCognom = parts[1];

console.log("Primer cognom:", primerCognom);
console.log("Número de caràcters:", primerCognom.length);