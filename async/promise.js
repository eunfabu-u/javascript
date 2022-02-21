'use strict';

//Promise is a JavaScript object for asynchronous operation.
//State: pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
//Promise는 class이기에 new keyword를 이용해서 object를 생성할 수 있다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work ()
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no netwowrk'));
    //Error class는 JavaScript에서 제공하는 Object이다. error가 발생함을 나타내는 object.
  }, 2000);
});

//2. Consumer: then, catch, finally
promise //
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
//여기서 value(parameter)는 promise가 정상적으로 잘 수행되서 마지막으로 resolve callback
//function에서 전달된 'ellie'라는 값이 들어간다.

//then: pormise가 정상적으로 잘 수행되어서 마지막에 최종적으로 resolve라는 callback함수를 통해서
//전달한 값이 value의 parameter로 전달되서 들어오는 걸 볼 수 있다.

//promise에 then을 호출하게 되면 then은 결국 똑같은 promise를 리턴하기 때문에
//그 리턴된 promise에 catch를 다시 호출할 수 있다.=> chaining

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚 `)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => {
    return '🍞';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
