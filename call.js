// function sayHi() {
//   console.log(this.name);
// }

// let user = { name: "John" };
// let admin = { name: "Admin" };

// sayHi.call(user);
// sayHi.call(admin);

/** */

function say(phrase1, phrase2) {
  console.log(this.name + ': ' + phrase1 + phrase2);
}

let user = { name: "John" };

say.apply( user, ["Hello", 'there'] );