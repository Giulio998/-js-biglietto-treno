let km = Number(prompt("Dichiarare la distanza da percorrere"));
let age = Number(prompt("Inserire l'età del passeggero"));
const basePrice = (km * 0.21).toFixed(2);
let finalPrice;
let minorPrice = basePrice - (basePrice * 0.2);
let seniorPrice = basePrice - (basePrice * 0.4);

console.log("km", km);
console.log("age", age);

if (age < 18) {
     finalPrice = minorPrice.toFixed(2);
     console.log("minorPrice", finalPrice);
} else if (age > 65) {
    finalPrice = seniorPrice.toFixed(2);
    console.log("seniorPrice", finalPrice);
} else {
    console.log("basePrice", basePrice);
}
