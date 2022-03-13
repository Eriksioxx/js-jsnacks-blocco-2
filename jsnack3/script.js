console.log('JS OK!');

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


// Crea due array che hanno un numero di elementi diversi.
let numberGroup1 = [1, 2, 3];

let numberGroup2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Aggiungi elementi casuali all’array che ha meno elementi

// for (let i = 0; numberGroup1.length < numberGroup2.length; i++) {
//     numberGroup1.push(parseInt(Math.random() * 10) + 1);
// }

while (numberGroup1.length < numberGroup2.length) {
    numberGroup1.push(parseInt(Math.random() * 10) + 1);
}



console.log('Numeri generati: ' + numberGroup1);
console.log('Numeri generati: ' + numberGroup2);
