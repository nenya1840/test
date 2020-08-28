// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi();


/**2 */

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     console.log(name);
//   };
// }

// let name = "John";

// let work = makeWorker();

// work();


/**3 */

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); // ?
// console.log(counter2());


/**4 */

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi();

/**5 */

let x = 1;

function func() {
  console.log(x);
  var x = 2;
}

func();


/**6 */
// 利用for循环，每秒打一个数字
// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 1000)
// }

