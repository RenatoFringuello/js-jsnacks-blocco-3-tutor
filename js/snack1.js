//esercizio rick w/ while instead of for loop
const ulElement = document.getElementById('list');
const list = [
    'camion',
    'gilet',
    'bike',
    'car',
    'bread',
    'milk',
    'shoes'
];

while(ulElement.children.length < list.length){
    //add li item
    const liElement = document.createElement('li');
    liElement.classList.add('list-group-item');
    liElement.append(list[ulElement.children.length]);
    ulElement.append(liElement);
}

//snack tutors
console.log('snack 1\n-------------------------------------');

let n;
do {
    n = parseInt(prompt('inserisci un numero da 1 a 10'));
} while (Number.isNaN(n) || n < 1 || n > 10);
console.log(n);