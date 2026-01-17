// this.js

// What is `this`?
// `this` is determined by HOW a function is called

// Global `this`
console.log("Global this:", this);
// Browser → window
// Node.js → {}

// `this` in Regular Functions
function showThis() {
  console.log("Regular function this:", this);
}

showThis();
// non-strict: global object
// strict: undefined

// `this` in Object Methods
const user = {
  name: "Alex",
  greet() {
    console.log("Hello,", this.name);
  },
};

user.greet(); // this = user

// Losing `this`
const greetFn = user.greet;
greetFn(); // this lost

// Fixing `this` with bind()
const boundGreet = user.greet.bind(user);
boundGreet();

// call() and apply()
function introduce(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}

const person1 = { name: "Sam" };
const person2 = { name: "Jordan" };

introduce.call(person1, "Paris", "France");
introduce.apply(person2, ["Berlin", "Germany"]);

// `this` in Constructor Functions
function Person(name) {
  this.name = name;
}

const p1 = new Person("Alex");
console.log(p1);

// `this` in Classes
class Animal {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log("I am a", this.type);
  }
}

const dog = new Animal("Dog");
dog.speak();

// `this` in setTimeout (Problem)
const timer = {
  seconds: 0,
  start() {
    setTimeout(function () {
      console.log("Wrong this:", this);
    }, 500);
  },
};

timer.start();

// Fixing with Arrow Function
const timerFixed = {
  seconds: 0,
  start() {
    setTimeout(() => {
      this.seconds++;
      console.log("Seconds:", this.seconds);
    }, 500);
  },
};

timerFixed.start();

// Strict Mode
function strictExample() {
  "use strict";
  console.log(this);
}

strictExample(); // undefined
