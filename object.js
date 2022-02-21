//Objects

//1. Literals and Properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ashley = { name: 'ashley', age: 7 };
print(ashley);

//with JavaScript magic (dynamically typed language)
//can add properties later
ashley.hasJob = true;
console.log(ashley.hasJob);

//can delete properties later
delete ashley.hasJob;
console.log(ashley.hasJob);

//2. Computed properties
//key should be always string
console.log(ashley.name); //dot syntax
console.log(ashley['name']); //computed properties
ashley['hasJob'] = true;
console.log(ashley.hasJob);

function printValue1(obj, key) {
  console.log(obj.key);
}
printValue1(ashley, 'name'); //undefined
printValue1(ashley, 'age'); //undefined

function printValue2(obj, key) {
  console.log(obj[key]);
}
printValue2(ashley, 'name'); //ashley
printValue2(ashley, 'age'); //7

//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'tom', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ashley', 29);
const person5 = new Person('Dana', 27);
console.log(person4);
console.log(person5);

function makePerson(name, age) {
  return {
    name, //property value shorthand
    age,
  };
}

//4. Constructor function
function Person(name, age) {
  //this = {}
  this.name = name;
  this.age = age;
  //return this;
}

//5. in operator: property existence check (key in obj)
console.log('name' in ashley); //true
console.log('age' in ashley); //true
console.log('random' in ashley); //false
console.log(ashley.random); //undefined

console.clear();

//6. for..in, for..of
// for(key in obj)
// obj가 갖고 있는 key를 모두 보여준다.
for (key in ashley) {
  console.log(key);
}

//for (value of iterable)
// 배열과 같은 경우에 사용
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
const user = { name: 'ashley', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
//위와 동일
const user5 = Object.assign({}, user);
console.log(user4);
console.log(user5);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
//뒤에 나오는 아이일 수록 앞과 동일한 property가 있다면 값을 덮어 씌운다.
