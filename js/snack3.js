// Crea due array che hanno un numero di elementi diversi. 
//Aggiungi elementi all'array che ha meno elementi fino a 
//quando ne avrà tanti quanti l'altro.

//snack tutors
console.log('snack 3\n-------------------------------------');

const nums2 = [2,321,23,243,4,45,5,5,43,34,4,3,43];
const nums = [2,321,23,243,4,4];

while(nums2.length !== nums.length){
    if(nums2.length < nums.length){
        nums2.push(Math.floor(Math.random() * 1000));
    }
    else{
        nums.push(Math.floor(Math.random() * 1000));
    }
}
console.log(nums, nums2);