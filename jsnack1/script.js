console.log('JS OK!');

// Crea un array di numeri interi e fai la somma
// di tutti gli elementi che sono in posizione dispari.

let numeri = [];
// genero numeri casuali da 0 a 99
for (let i = 0; i < 10; i++) {
    numeri.push(parseInt(Math.random() * 100) + 1);
}

console.log('Numeri generati: ' + numeri);

// faccio la somma di tutti gli elementi che sono in posizione dispari
let sommaDispari = 0;

for (let i = 0; i < numeri.length; i++) {

    if (i % 2 !== 0) {
        sommaDispari += numeri[i];
    }
}

console.log('La somma delle posizioni dispari è : ' + sommaDispari);