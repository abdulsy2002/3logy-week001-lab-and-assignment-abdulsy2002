// =============================
// 1. SIMPLE FUNCTION: GREET USER
// =============================
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

// =============================
// 2. FUNCTION WITH RETURN: ADD TWO NUMBERS
// =============================
function addNumbers(a, b) {
    return a + b;
}

// =============================
// 3. FUNCTION WITH LOGIC: CHECK EVEN
// =============================
function isEven(number) {
    return number % 2 === 0;
}

// =============================
// 4. CALL ALL FUNCTIONS WITH TEST VALUES
// =============================

greetUser("Alice");  // Example output: Hello, Alice!

let sum = addNumbers(7, 8);
console.log(`Sum: ${sum}`);  // Example output: Sum: 15

console.log(`Is 8 even? ${isEven(8)}`);  // true
console.log(`Is 7 even? ${isEven(7)}`);  // false