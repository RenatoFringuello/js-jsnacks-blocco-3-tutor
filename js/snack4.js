// Prendere due array della stessa lunghezza e generarne un terzo, 
//prendendo alternativamente gli elementi da uno e dall'altro es. 
//[a,b,c], [1,2,3] → [a,1,b,2,c,3].

//snack tutors
console.log('snack 4\n-------------------------------------');

const num1 = [1,2,3,4,5];
const num2 = [11,12,13,14,15];
const nums = [];
let c = 0; 
let toggle = true;//alterna tra un array e un altro

// for (let i = 0; i < num1.length * 2; i++) {
//     if(i % 2 === 0){
//         nums.push(num1[c]);
//     }
//     else{
//         nums.push(num2[c]);
//         c++;
//     }
// }

//alt solution
while(c < num1.length){
    if(toggle){
        nums.push(num1[c]);
    }
    else{
        nums.push(num2[c]);
        c++;
    }
    toggle = !toggle;
}
//output
console.log(num1, num2, nums);

