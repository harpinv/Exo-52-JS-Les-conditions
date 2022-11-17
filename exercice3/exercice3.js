let x = 6
let y = 6

/* Modifier le code ci dessous pour réaliser l'exercice */

if(x === y) {
    document.getElementById('monDiv').innerHTML = "La variable x est strictement égale à la variable y";
} else {
    document.getElementById('monDiv').innerHTML = "La variable x est n'est pas strictement égale à la variable y";
}

x += 3;
console.log(x);