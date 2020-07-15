//Assignment Code
var generateBtn = document.querySelector("#generate"); {

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

        var length = prompt("How many characters would you like your password to contain?");
        while (length < 8 || length > 128) {
            alert("Password must be between 8-128 characters.");
            length = prompt("How many characters would you like your password to contain?");
        }
    }
}

//Strings to choose password characters from
lowerCase = "abcdefghijklmnopqrstuvwxyz";
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numbers = "0123456789";
symbols = "!#'()*+@[_,-./:;<$%\]^&=>?`{|}~";
var passArray = " ";



//Final password to generate
finalPass = "";
for (var i = 0; i < length; i++) {
    var randomPass = passArray[Math.floor(Math.random() * passArray.length)]
    finalPass = finalPass.concat(randomPass);
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


