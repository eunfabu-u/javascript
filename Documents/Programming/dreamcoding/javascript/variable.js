// 1. use strict
// added in ES5
// use this for Vanila Javascript.
'use strict';

// 2. Variable
// let (added in ES6)'
let globalName = 'glabal name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name); //
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age); //4

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class funcftion

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); //value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); //value: 17.1 type: number

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (hairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over ((-2*53)~2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; // template literlas(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`); // value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`); // value: false, type: boolean

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); //value: null, type: object

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`); // value: undeifned, type: undefined

// symbol, create unique identifiers for objects
const symbol1 = symbol('id');
const symbol2 = symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol1 = symbol.for('id');
const gSymbol2 = symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${symbol1}`); // value: id, type: symbol

//object, real-life object, date structure
const ellie = { name: 'elle', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
