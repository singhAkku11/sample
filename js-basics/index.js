//Comment
console.log('Hello World');
let name = 'Akanksha';
console.log(name);
let variableType = null;

let person = {
    name: 'Akanksha',
    age: 25
};

console.log(person.age);
person.city = 'Vns';
console.log(person['name']);

let selectedColors = ['red','blue'];
selectedColors[3]='green';
selectedColors[2]=1;
console.log(selectedColors);

function greet(name){
    console.log('Hello '+name);
}

greet('Mona');

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log('a',a);
console.log('b',b);

//For-in loop to iterate over properties of an object

const person2 = {
    name: 'Mosh',
    age: 30
};

for (let key in person2)
    console.log(key,person2[key]);


//For-of loop to iterate over elements in an array

const colors = ['red','green','blue'];

for (let color of colors)
    console.log(color);