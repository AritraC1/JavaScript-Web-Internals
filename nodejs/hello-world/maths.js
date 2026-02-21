// Math module

// function add(a,b){
//     return a + b;
// }

// function sub(a,b){
//     return a - b;
// }

// Method 1 for export
// module.exports = {
//     addition: add,
//     subtraction: sub,
// }

// Method 2 for export
exports.add = (a, b) => a + b; // add is a property here - anonymous function - no name
exports.sub = (a, b) => a - b;
