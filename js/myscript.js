
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

const firstAge = parseInt( prompt('Inserisci età della prima persona') );
const secondAge = parseInt( prompt('Inserisci età della prima persona') );

if ( firstAge > secondAge) {
    console.log('La prima persona è la più grande');
} else  if (firstAge < secondAge) {
    console.log('La seconda persona è la più grande');
} else if ( isNaN(firstAge) || isNaN(secondAge) ){
    console.log("C'è un errore nella scrittura dei dati");
} else {
    console.log('La persone hanno la stessa età');
}