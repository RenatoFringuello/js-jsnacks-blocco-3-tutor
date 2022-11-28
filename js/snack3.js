// Crea due array che hanno un numero di elementi diversi. 
//Aggiungi elementi all'array che ha meno elementi fino a 
//quando ne avrà tanti quanti l'altro.

//snack tutors
console.log('snack 3\n-------------------------------------');

const nums = [2,321,23,243,4,45,5,5,43,34,4,3,43];
const numsMin = [2,321,23,243,4,4];

while(numsMin.length !== nums.length){
    numsMin.push(Math.floor(Math.random * 1000));
}
console.log(nums, numsMin);