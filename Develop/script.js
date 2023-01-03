// Assignment code here
//lines 3-6 state all the variables that will be used for the user to choose their password options with
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

function questions() {
  // Prompt the user to choose the length of their password
  var length = prompt("Choose password length that is between 8 and 128 characters");

  // Use prompt dialogs to ask the user if they want their password to include certain characters
  var askNumbers = prompt("Do you want the password to include numbers? (Enter Y for Yes or N for No)");
  var askUpperCase = prompt("Do you want the password to include uppercase letters? (Enter Y for Yes or N for No)");
  var askLowerCase = prompt("Do you want the password to include lowercase letters? (Enter Y for Yes or N for No)");
  var askSpecial = prompt("Do you want the password to include special characters? (Enter Y for Yes or N for No)");

  // Convert the user's responses to boolean values
  //The toUpperCase() method is called on the askNumbers variable, which converts the string to uppercase
  //The equality operator === is used to compare the uppercase version of the string to the string y
  //The result of this comparison (true or false) is assigned to the askNumbers variable
  // https://www.w3schools.com/java/java_booleans.asp
  askNumbers = (askNumbers.toUpperCase() === "Y");
  askUpperCase = (askUpperCase.toUpperCase() === "Y");
  askLowerCase = (askLowerCase.toUpperCase() === "Y");
  askSpecial = (askSpecial.toUpperCase() === "Y");

  // Creates an object to store the user's responses
  var responses = {
    length: length,
    askNumbers: askNumbers,
    askUpperCase: askUpperCase,
    askLowerCase: askLowerCase,
    askSpecial: askSpecial
  }

  // Validate the user's input
  if ((length < 8) || (length > 128)) {
    // If the password length is not between 8 and 128, display an alert and re-run the function
    alert("Choose a number between 8 and 128");
    return questions();
  } else if ((!askNumbers) && (!askUowerCase) && (!askLowerCase) && (!askSpecial)) {
    // If the user didn't choose any character types, display an alert and re-run the function
    alert("You must choose at least one type for your password.");
    return questions();
  }

  // Return the user's responses
  return responses;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
