console.log('JS OK!');

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// Il software deve chiedere per 5 volte all’utente di inserire un numero.
let requestNumber = [];
for (let i = 0; i < 5; i++) {

    requestNumber.push(parseInt(prompt('Inserisci numero...')));
}
console.log('Numeri inseriti sono: ' + requestNumber);


// Il programma stampa la somma di tutti i numeri inseriti.
let somma = 0;
for (let i = 0; i < requestNumber.length; i++) {

    somma += requestNumber[i];
}

console.log('La somma di tutti i numeri inseriti è : ' + somma);

// Esegui questo programma con il while.

/*
let requestNumber = [];

let j = 0;
while (j < 5) {
    requestNumber.push(parseInt(prompt('Inserisci numero...')));
    j++;
}
console.log('Numeri inseriti sono: ' + requestNumber);

let somma = 0;
let i = 0;
while (i < requestNumber.length) {

    somma += requestNumber[i];
    i++;
}
console.log('La somma di tutti i numeri inseriti è : ' + somma);
*/
