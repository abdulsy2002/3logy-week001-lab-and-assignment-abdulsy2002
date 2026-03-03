// LAB-02: Operators and Expressions

// Declare two numbers
let num1 = 50;
let num2 = 40;

// =======================
// 1. Arithmetic Operations
// =======================

let sum = num1 + num2;
let product = num1 * num2;
let remainder = num1 % num2;

console.log("=== Arithmetic Operations ===");
console.log("Sum of numbers:", sum);
console.log("Product of numbers:", product);
console.log("Remainder (Modulo):", remainder);

// =======================
// 2. Comparison Operations
// =======================

let isEqual = num1 === num2;
let isGreater = num1 > num2;

console.log("\n=== Comparison Operations ===");
console.log("Are numbers equal?", isEqual);
console.log("Is num1 greater than num2?", isGreater);

// =======================
// 3. Logical Operations
// =======================

let andOperation = (num1 > 30) && (num2 > 30);
let orOperation = (num1 > 60) || (num2 > 30);

console.log("\n=== Logical Operations ===");
console.log("AND operation result:", andOperation);
console.log("OR operation result:", orOperation);
