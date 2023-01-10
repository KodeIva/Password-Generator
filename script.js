// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


let bigArr = []
let customPref
let randomPass = ''

// Function to prompt user for password options
function getPasswordOptions() {
 
 customPref = prompt('How long wolud you like your password to be? Choose a number between 10 and 64.')
 if(customPref >= 10 && customPref <= 64) {
   let lowers = confirm("Would you like to have lower case letters?")
   let uppers = confirm("Would you like upper case letters?")
   let numbers = confirm("Would you like numbers?")
   let specials = confirm("Would you like special symbols?")
  
    if(lowers === true) {
      bigArr = [...lowerCasedCharacters]
    }
     
    if(uppers === true) {
     bigArr = bigArr.concat(upperCasedCharacters)
    }
     
    if(numbers === true) {
     bigArr = bigArr.concat(numericCharacters)
    }

    if(specials === true) {
     bigArr = bigArr.concat(specialCharacters)
    }

 }else if(isNaN(customPref)) {
   alert("Please try again.Insert only numbers!!! ")
   
 } else{
  alert("Please try again. Insert number between 10 and 64!")
 }
 getRandom(bigArr)
}

// Function for getting a random element from an array
function getRandom(arr) {
  for (let i = 0; i < customPref;i++) {
   random = arr[Math.floor(Math.random() * arr.length)]
    randomPass += random
  }
 return randomPass
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions()
  //var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = randomPass;
}

// Add event listener to generate button
generateBtn.addEventListener('click',writePassword);
