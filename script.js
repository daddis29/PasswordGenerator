//Assignment Code
var generateBtn = document.querySelector("#generate")
//Strings to choose password characters from
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!#'()*+@[_,-./:;<$%\]^&=>?`{|}~";
var passArray = " ";

//Generate Password with 8-128 characters prompt
function generatePassword() {

    //Uppercase confirm
    var upperCaseConfirm = confirm("Would like to include uppercase letters?");
    if (upperCaseConfirm == true) {
        passArray = passArray.concat(upperCase);
    }

    //Lowercase confirm
    var lowerCaseConfirm = confirm("Would like to include lowercase letters?");
    if (lowerCaseConfirm == true) {
        passArray = passArray.concat(lowerCase);
    }

    //Numbers confirm
    var numbersConfirm = confirm("Would like to include numbers?");
    if (numbersConfirm == true) {
        passArray = passArray.concat(numbers);
    }

    //Symbols confirm
    var symbolsConfirm = confirm("Would like to include special characters?");
    if (symbolsConfirm == true) {
        passArray = passArray.concat(symbols);
    }

    var pwlength = prompt("How many characters would you like your password to contain?");
    while (pwlength < 8 || pwlength > 128) {
        alert("Password must be between 8-128 characters.");
        pwlength = prompt("How many characters would you like your password to contain?");
    }

    passArray = passArray.split("")

    var generatedPassword = []

    for (var i = 0; i < pwlength; i++) {
        var randomPass = passArray[Math.floor(Math.random() * passArray.length)]
        console.log(randomPass)
        generatedPassword.push(randomPass)
    }

    generatedPassword = generatedPassword.join('')
    return generatedPassword
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    console.log(password)
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


