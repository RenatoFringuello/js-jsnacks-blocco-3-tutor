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