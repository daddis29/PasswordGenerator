// Assignment Code
var generateBtn = document.querySelector("#generate");

//Alert Codes
alert("Please create a password!");

var length = prompt("How many characters would you like your password to be?");
while (length < 8 || length > 128) {
  length = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
}

var uppercases = confirm("Would like to include uppercase letters?");
var lowercase = confirm("Would like to include lowercase letters?");
var numbers = confirm("Would like to include numbers?");
var symbols = confirm("Would like to include special characters?");

//When the user selects their character count, run this code.

//If the user wants uppercase letters, run this code. 

//If the user wants lowercase letters, run this code.

//If the user wants numbers, run this code.

//If the user wants special characters, run this code.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
