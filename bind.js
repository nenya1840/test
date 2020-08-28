// let user = {
//   name: "John",
//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// setTimeout(() => user.sayHi(), 1000);

// user = {
//   sayHi() { console.log("Another user in setTimeout!"); }
// };

/** */

// let user = {
//   name: "John",
//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// let sayHi = user.sayHi.bind(user);

// // sayHi();

// setTimeout(sayHi, 1000);

// user = {
//   sayHi() { console.log("Another user in setTimeout!"); }
// };


/** */


// function f() {
//   console.log(this.name);
// }

// f = f.bind({name: "John"}).bind({name: "Pete"});

// f();



/** */

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

console.log(bound.test);