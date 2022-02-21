'use strict';

//Array🎉

//1.Array Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2.Index Position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
//3. Looping
//print all fruits
//a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
console.clear();
// c. forEach (API) callback function을 받아온다
fruits.forEach((fruit) => console.log(fruit));

console.clear();
//4. Add, Delete, Copy
//push: add an item to the end
fruits.push('🥑', '🍇');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('🍍');
console.log(fruits);

//remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//splice: remove an item by index position
fruits.push('🍒', '🥝', '🍉');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍇', '🍍');
console.log(fruits);

//concat: combine two arrays
const fruits2 = ['🥥', '🍋'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
// 5. Searching
// find the index
console.log(fruits);
console.log(fruits.indexOf('🍇'));
console.log(fruits.indexOf('🥝'));
console.log(fruits.includes('🍇'));
console.log(fruits.includes('🥥'));
console.log(fruits.indexOf('🥥'));

console.clear();
//lastIndexOf
fruits.push('🥝');
console.log(fruits);
console.log(fruits.indexOf('🥝'));
console.log(fruits.lastIndexOf('🥝'));
