//Assignment Code
var generateBtn = document.querySelector("#generate"); {

    //Generate Password with 8-128 characters prompt
    function generatePassword() {

        var pwlength = prompt("How many characters would you like your password to contain?");

        while (pwlength < 8 || pwlength > 128) {
            alert("Password must be between 8-128 characters.");
            pwlength = prompt("How many characters would you like your password to contain?");
        }
    }
}

//Strings to choose password characters from
lowercase = "abcdefghijklmnopqrstuvwxyz";
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numbers = "0123456789";
symbols = "!#'()*+@[_,-./:;<$%\]^&=>?`{|}~";
var passArray = "";

//Uppercase confirm
var uppercase = confirm("Would like to include uppercase letters?");
if (uppercase == true) {
    passArray = passArray.concat(uppercase);
}

//Lowercase confirm
var lowercase = confirm("Would like to include lowercase letters?");
if (lowercase == true) {
    passArray = passArray.concat(lowercase);
}

//Numbers confirm
var numbers = confirm("Would like to include numbers?");
if (numbers == true) {
    passArray = passArray.concat(numbers);
}

//Symbols confirm
var symbols = confirm("Would like to include special characters?");
if (symbols == true) {
    passArray = passArray.concat(symbols);
}

//Final password to generate
finalPass = " ";
for (var i = 0; i < length; {
    var randomPass = passArray[Math.floor(Math.random() * passArray.length)]
            finalPass = finalPass.concat(randomPass);
}
    return finalPass;



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("btn").onclick = function () {

}
