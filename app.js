const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@$%[]{}()#~";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";

    // Ensure at least one of each type
    // password += upperCase[Math.floor(Math.random() * upperCase.length)];
    // password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    // password += number[Math.floor(Math.random() * number.length)];
    // password += symbol[Math.floor(Math.random() * symbol.length)];
    const allChars = upperCase + lowerCase + number + symbol;


    // Fill the rest randomly
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Agar input hai to value, warna innerText

    if(passwordBox.tagName === "INPUT" || passwordBox.tagName === "TEXTAREA"){
        passwordBox.value = password;
    }else{
        passwordBox.innerText = password;
    }
    // if (passwordBox.tagName === "INPUT" || passwordBox.tagName === "TEXTAREA") {
    //     passwordBox.value = password;
    // } else {
    //     passwordBox.innerText = password;
    // }
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

// Click par password generate karo
document.getElementById("generateBtn").addEventListener("click", createPassword);
document.getElementById("copy").addEventListener("click", copyPassword);

