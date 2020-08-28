// let arr = [1, 2, 3];

// // it inherits from Array.prototype?
// console.log( arr.__proto__ === Array.prototype ); // true

// // then from Object.prototype?
// console.log( arr.__proto__.__proto__ === Object.prototype ); // true

// // and null on the top.
// console.log( arr.__proto__.__proto__.__proto__ ); // null


/** */


// class A {
//   constructor(value) {
//     this.value = value;
//   }
//   toString() {
//     return this.value++;
//   }
// }
// const a = new A(1);
// console.log(a==1&&a==2&&a==4);


/** */

// function f() {
//   console.log("Hello!");
// }

// f.defer(1000);


/** */

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); // shows 3 after 1 second




/** */
// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// console.log(rabbit, animal);



/** */


let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple