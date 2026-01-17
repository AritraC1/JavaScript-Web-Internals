// Functions & Parameters

// 1. Function Declaration

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alex"));

// Hoisting works with function declarations
console.log(add(2, 3));

function add(a, b) {
  return a + b;
}

// 2. Function Expression

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5));

// NOT hoisted like declarations
// multiply(4, 5); // would throw error if before definition

// 3. Arrow Functions

const subtract = (a, b) => {
  return a - b;
};

// Implicit return (single expression)
const square = (n) => n * n;

console.log(subtract(10, 3));
console.log(square(6));

// Arrow functions do NOT have their own `this`

// 4. Parameters vs Arguments

// Parameters: variables in function definition
function introduce(name, age) {
  // name, age are parameters
  return `My name is ${name} and I am ${age} years old.`;
}

// Arguments: actual values passed
console.log(introduce("Sam", 30));

// 5. Default Parameters

function logMessage(message = "Default message") {
  console.log(message);
}

logMessage("Hello world");
logMessage(); // uses default

// 6. Rest Parameters (...)

function sumAll(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(5, 10, 15, 20));

// 7. The arguments Object (Old School)

function showArguments() {
  console.log(arguments);
  // arguments is array-like, not a real array
}

showArguments(1, "a", true);

// 8. Passing Objects & Arrays to Functions

function updateUser(user) {
  user.age += 1; // mutates original object
}

const user = { name: "Jordan", age: 25 };
updateUser(user);

console.log("Updated user:", user);

// To avoid mutation
function updateUserSafe(user) {
  return { ...user, age: user.age + 1 };
}

const newUser = updateUserSafe(user);
console.log("Original user:", user);
console.log("New user:", newUser);

// 9. Functions Returning Functions

function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));

// 10. Callback Functions

function processNumber(num, callback) {
  return callback(num);
}

const result1 = processNumber(10, (n) => n * 2);
const result2 = processNumber(10, (n) => n + 5);

console.log(result1);
console.log(result2);

// 11. Anonymous vs Named Functions

setTimeout(function () {
  console.log("Anonymous function");
}, 500);

const namedFunction = function sayHi() {
  console.log("Named function");
};

namedFunction();

// 12. Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("IIFE runs immediately");
})();

// 13. Function Scope

function outer() {
  const outerVar = "I'm outside";

  function inner() {
    console.log(outerVar); // closure
  }

  inner();
}

outer();

// 14. Pure vs Impure Functions

// Pure: same input -> same output, no side effects
function pureAdd(a, b) {
  return a + b;
}

// Impure: modifies external state
let counter = 0;
function impureIncrement() {
  counter++;
}

console.log(pureAdd(2, 3));
impureIncrement();
console.log(counter);

// 15. Function Length & Parameters

function example(a, b, c) {}
console.log("Expected params:", example.length);
