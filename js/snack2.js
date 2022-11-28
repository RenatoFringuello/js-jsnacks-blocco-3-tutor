// Crea un array vuoto e chiedi all'utente un numero da 
//inserire nell'array. Continua a chiedere i numeri all'utente
// e a inserirli nell'array fino a
//quando la somma degli elementi è minore di 50.

//snack tutors
console.log('snack 2\n-------------------------------------');
const nums = [];
let sum = 0;
do {
    let n = parseInt(prompt('inserisci un numero'));
    if(!Number.isNaN(n)){
        nums.push(n);
        sum += n;
    }
} while (sum < 50);