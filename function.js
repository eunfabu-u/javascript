function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

//Default parameters (added in ES6)
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!'); //Hi! by undefined

function showMessage2(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage2('Hi!'); //Hi! by unknown

//Rest prarmeters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

let globalMessage = 'global'; //global variable
function printMessage() {
  let message = 'hello'; //local variable
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
}
printMessage();

// Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`); // sum: 3

// Early return, early exit
//bad
function upgreadUser(user) {
  if (user.ponit > 10) {
    //long upgrade logic...
  }
}
//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}

//Function Expression
const print = function () {
  //anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
//anonymoust function
const printYes = function () {
  console.log('yes!');
};
//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo); //no!
randomQuiz('love you', printYes, printNo); //yes!

//Arrow function
const simplePrint = function () {
  console.log('simplePrint!');
};
const simplePrint2 = () => console.log('simplePrint2!');

const add1 = function (a, b) {
  return a + b;
};
const add2 = (a, b) => a + b;

//IIFE
function hello() {
  console.log('IIFE');
}
hello();

(function hello1() {
  console.log('IIFE');
})();

//quiz
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      console.log(a + b);
      break;
    case 'substract':
      console.log(a - b);
      break;
    case 'divide':
      console.log(a / b);
      break;
    case 'multiply':
      console.log(a * b);
      break;
    case 'remainder':
      console.log(a % b);
      break;
    default:
      console.log(`sorry, your ${command} is not available.`);
  }
}
calculate('remainder', 6, 3);

//ellie's answer

function calculate1(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 2, 3));
