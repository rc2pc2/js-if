
// // AND
// console.log( true && true ); // true
// console.log( true && false ); // false
// console.log( false && true ); // false
// console.log( false && false ); // false

// // OR
// console.log( true || true ); // true
// console.log( true || false ); // true
// console.log( false || true ); // true
// console.log( false || false ); // false

// // NOT
// console.log( true ) // true
// console.log( !true) // false
// console.log( !false ) // true


// let utenteLoggato = -124124561;

// // # L'utente loggato è true?
// if (utenteLoggato == true){  // ? se si entro qui dentro
//     console.log('Utente loggato ha valore ' + utenteLoggato + ', ed è true');
// } else { // § altrimenti entro qui dentro
//     console.log('Utente loggato ha valore ' + utenteLoggato + ', ed è false');
// }

//?  (utenteLoggato == true) è uguale a ( utenteLoggato )
//§  (utenteLoggato == false) è uguale a ( !utenteLoggato )

/**
 *
 * Chiediamo all'utente due parole in successione.
    Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.
 *
 */

// ? - dichiariamo una variabile CONST randomWord e la popoliamo con un prompt
// ? - dichiariamo una seconda variabile CONST randomOtherWord e la popoliamo con un prompt

// ? -  if  (verifico quale delle due parole sia più lunga)
    // § - se  la prima parola è la più lunga ...
        // # - stampiamo in console un messaggio appropriato

    // § - se invece la seconda parola è la più lunga ...
        // # - stampiamo in console un messaggio appropriato

    // § - altrimenti significa che la parole saranno lunghe ugualmente
        // # - stampiamo in console un messaggio appropriato


// const randomWord = prompt('Insert a random word');
// const randomOtherWord = prompt('Insert a random word');

// if (randomWord.length > randomOtherWord.length){
//     console.log('La prima parola è la più lunga');
// } else if ( randomWord.length < randomOtherWord.length) {
//     console.log('La seconda parola è la più lunga');
// } else {
//     console.log('Le due parole hanno la medesima lunghezza');
// }

// età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

// const firstAge = parseInt( prompt('Inserisci età della prima persona') );
// const secondAge = parseInt( prompt('Inserisci età della prima persona') );

// let result;

// if ( isNaN(firstAge) || isNaN(secondAge) ) {
//     result = "C'è un errore nella scrittura dei dati";
// } else  if (firstAge < secondAge) {
//     result = 'La seconda persona è la più grande';
// } else if (firstAge > secondAge ){
//     result = 'La prima persona è la più grande';
// } else {
//     result = 'La persone hanno la stessa età';
// }

// document.getElementById('output').innerHTML +=  result;

/**
 *
 * pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
 */

// ? - prompt all'utente salvato in una costante chiamata userChoice
// ? - prompt all'utente salvato in una costante numerica chiamato userNumber

// ? - genero randomicamente (come=?=) un numero intero tra 1 e 9
// ? - verifico e comunico chi ha vinto


const userChoice = prompt('pari o dispari?');
const userNumber = parseInt( prompt('Scegli un numero tra 1 e 9'));

// Math.floor(Math.random() * (max - min) + min);
const aIRandomNumber = Math.floor(Math.random() * (10 - 1) + 1);
console.log(aIRandomNumber);

const sum = userNumber + aIRandomNumber;
console.log('La somma tra i due numeri è: ' + sum);

let result = "";

// se la somma è pari
if (sum % 2 == 0){
    result = 'pari';
} else { // la somma è dispari
    result = 'dispari';
}

console.log('Il risulato della somma è ' + result);

// se il risultato che ho scelto essere o pari o dispari è uguale alla scelta che l'utente ha fatto all'inizio della partita
if (result == userChoice){
    console.log('HAI VINTO!!! DAJEEEEEEEEEEEEEEEEEEEEEEEEEEEE!');
} else {
    console.log('10143892ffxe deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef');
}