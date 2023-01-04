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
  } else if ((!askNumbers) && (!askUpperCase) && (!askLowerCase) && (!askSpecial)) {
    // If the user didn't choose any character types, display an alert and re-run the function
    alert("You must choose at least one type for your password.");
    return questions();
  }

  // Return the user's responses
  return responses;
}

function generatePassword() {
  
  // Gets the password options from the questions function
  var passwordOptiions = questions();

// Creates an array to store possible characters for the password.
  var possibleCharacters = [];

// Whether passwordOptions.askNumbers is true is determined by the if expression. If so, the code contained within the if block will run.
  // The for loop begins, and the loop variable i is initialized to 0
  // The loop checks if i is less than the length of the numbers array. If it is, the code inside the loop will execute.
  // The length property is used to determine the next available index and add the element at index I of the numbers array to the end of the possibleCharacters array.
  //When I is still less than the length of the numbers array, the loop returns to step 3 and checks again. If it is, the loop's function will run once again. Until I no longer equals the length of the numbers array, this procedure will continue. At that time, the loop will come to an end.
  if (passwordOptiions.askNumbers) {
    for (var i = 0; i < numbers.length; i++){
      possibleCharacters[possibleCharacters.length] = numbers[i];
    }
  }
//Add uppercase letters to the array if the passwordOptions includes askUpperCase
  if (passwordOptiions.askUpperCase) {
    for (var i = 0; i < upperCase.length; i++){
      possibleCharacters[possibleCharacters.length] = upperCase[i];
    }
  }
//Add lowercase letters to the array if the passwordOptions includes askLowerCase
  if (passwordOptiions.askLowerCase) {
    for (var i = 0; i < lowerCase.length; i++){
      possibleCharacters[possibleCharacters.length] = lowerCase[i];
    }
  }
//Add special letters to the array if the passwordOptions includes askSpecial
  if (passwordOptiions.askSpecial) {
    for (var i = 0; i < special.length; i++){
      possibleCharacters[possibleCharacters.length] = special[i];
    }
  }
//finalPassword is a variable that will be used to store the final password that is generated
var finalPassword = "";


for (var i = 0; i < passwordOptiions.length; i++) {
  finalPassword += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
}

return finalPassword;
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
