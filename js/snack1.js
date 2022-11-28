//snack tutors
console.log('snack 1\n-------------------------------------');

let n;
do {
    n = parseInt(prompt('inserisci un numero da 1 a 10'));
} while (Number.isNaN(n) || n < 1 || n > 10);
console.log(n);