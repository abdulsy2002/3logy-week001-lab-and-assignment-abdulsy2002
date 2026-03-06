


    let password = "Password1";

let hasMinLength = password.length >= 8;
let hasNumber = false;
let hasUppercase = false;

for (let i = 0; i < password.length; i++) {

    if (password[i] >= "0" && password[i] <= "9") {
        hasNumber = true;
    }

    if (password[i] >= "A" && password[i] <= "Z") {
        hasUppercase = true;
    }

}

if (!hasMinLength) {
    console.log("Password must be at least 8 characters long");
}

if (!hasNumber) {
    console.log("Password must contain a number");
}

if (!hasUppercase) {
    console.log("Password must contain an uppercase letter");
}

if (hasMinLength && hasNumber && hasUppercase) {
    console.log("Password is valid");
} else {
    console.log("Password is invalid");
}