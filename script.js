// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberic = "0123456789"
var specialCharacters = "!@#$%^&*"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var newPassword = ""
  var possibleOptions = ""
  var passwordLength = prompt("Length of Password");
  passwordLength = parseInt(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) 
  {
  alert("Must be over 8 or less 128 characters")
  return ""
  }
  else if (passwordLength === NaN) 
  {
  return "you must enter a number"
  }

var wantsLowerCase = confirm("Do you want Lowercase")
var wantsUpperCase = confirm("Do you want Uppercase")
var wantsNumeric = confirm("Do you want Numeric")
var wantsSpecialCharacters = confirm("Do you want Special Characters")

if (wantsLowerCase === true) {
possibleOptions = possibleOptions + lowercaseLetters
}
if (wantsUpperCase === true) {
  possibleOptions = possibleOptions + uppercaseLetters
  }
if (wantsNumeric === true) {
    possibleOptions = possibleOptions + numberic
    }
if (wantsSpecialCharacters === true) {
      possibleOptions = possibleOptions + specialCharacters
    }
console.log(possibleOptions)


for (let i = 0; i < passwordLength; i++) {
newPassword += possibleOptions[Math.floor(Math.random()*possibleOptions.length)]
}


return newPassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
