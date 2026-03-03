// =============================
// 1. SIMPLE IF/ELSE
// =============================

let number = 15;

if (number >= 0) {
    console.log(`The number ${number} is positive`);
} else {
    console.log(`The number ${number} is negative`);
}


// =============================
// 2. MULTIPLE CONDITIONS (else if)
// =============================

let score = 85;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`Score ${score}: Grade ${grade}`);


// =============================
// 3. NESTED CONDITIONS
// =============================

let age = 20;
let isRegistered = true;

if (age >= 18) {
    if (isRegistered) {
        console.log("You are eligible to vote and registered!");
    } else {
        console.log("You are eligible to vote but not registered.");
    }
} else {
    console.log("You are not eligible to vote.");
}