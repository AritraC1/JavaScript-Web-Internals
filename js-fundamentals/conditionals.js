// Conditionals

// Basic if statement
// Runs only when the condition evaluates to true
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}

// if...else statement
// Provides an alternative path when the condition is false
let isRaining = false;

if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("No umbrella needed.");
}

// if...else if...else
// Used when you have multiple conditions to check in order
let score = 82;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// Comparison operators inside conditionals
// == checks value only, === checks value and type
let value = "10";

if (value == 10) {
  console.log("Loose comparison allows type coercion.");
}

if (value === 10) {
  console.log("This will not run because types differ.");
}

// Logical operators
// && means AND, || means OR, ! means NOT
let hasID = true;
let hasTicket = false;

if (hasID && hasTicket) {
  console.log("You may enter.");
} else {
  console.log("Entry denied.");
}

if (hasID || hasTicket) {
  console.log("You have at least one requirement.");
}

if (!hasTicket) {
  console.log("You do not have a ticket.");
}

// Nested conditionals
// Conditionals inside other conditionals
let userLoggedIn = true;
let isAdmin = false;

if (userLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, admin.");
  } else {
    console.log("Welcome, user.");
  }
} else {
  console.log("Please log in.");
}

// Ternary operator
// A shorter way to write simple if...else conditions
let temperature = 30;

let weatherMessage =
  temperature > 25 ? "It's hot outside." : "The weather is mild.";

console.log(weatherMessage);

// Using conditionals with functions
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even number";
  } else {
    return "Odd number";
  }
}

console.log(checkEvenOdd(7));

// switch statement
// Useful when comparing the same value against many cases
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Sunday":
    console.log("Rest day.");
    break;
  default:
    console.log("Regular day.");
}

// Conditional execution using truthy and falsy values
// JavaScript treats certain values as false automatically
let username = "";

if (username) {
  console.log("Username exists.");
} else {
  console.log("Username is empty or undefined.");
}

// Common falsy values in JavaScript
// false, 0, "", null, undefined, NaN
let points = 0;

if (points) {
  console.log("You have points.");
} else {
  console.log("No points available.");
}

// Guard clauses
// Early exit from a function when a condition fails
function withdraw(amount, balance) {
  if (amount > balance) {
    console.log("Insufficient balance.");
    return;
  }

  console.log("Withdrawal successful.");
}

withdraw(500, 300);

// Combining multiple conditions for real-world logic
let role = "editor";
let isVerified = true;

if ((role === "admin" || role === "editor") && isVerified) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

// Optional chaining with conditionals
// Prevents errors when accessing nested properties
let user = {
  profile: {
    email: "user@example.com",
  },
};

if (user?.profile?.email) {
  console.log("Email found:", user.profile.email);
}

// Nullish coalescing with conditionals
// Uses a fallback only when value is null or undefined
let input = null;
let output = input ?? "Default value";

console.log(output);
