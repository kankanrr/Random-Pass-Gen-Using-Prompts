// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    // Character Arrays
    var upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symS = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

    // Empty array vars for storage purposes

    var resArray = [];
    var userArray = [];

    // Prompt vars

    // I use parseInt here to make the userInt val a numeric val, this will be used to add incorrect user input alerts
    var userInt = parseInt(prompt("Please input a password length (at least 8 characters but no more than 128 characters)."));

    // Logging userInt to see if numeric value outputs
    console.log(userInt)

    // If conditioning

    // Check first to see if userInt IS a numeric value
    if (!userInt) {
        // alert user to input a numeric value
        alert('Please input a numeric value.')
        return generatePassword()
    } else if (userInt < 8 || userInt > 128) {
        // alert user to input a value from 8 to 128 then return and restart function
        alert('Please input a value between 8 & 128.')
        return generatePassword()
    } else {
        // logged to see if criteria is met
        console.log('criteria met')

        // confirm prompt vars
        var confirmLower = confirm("Include Lower Case?");
        var confirmUpper = confirm("Include Upper Case?");
        var confirmNums = confirm("Include Numbers?");
        var confirmSyms = confirm("Include Symbols?");
    }

    // Conditioning to check which prompt vars were checked true & concats arrays for later use
    if (confirmLower) {
        resArray = resArray.concat(lowChar)
    }
    if (confirmUpper) {
        resArray = resArray.concat(upChar)
    }
    if (confirmNums) {
        resArray = resArray.concat(numS)
    }
    if (confirmSyms) {
        resArray = resArray.concat(symS)
    }

    // logged resulting array to see if they were concatted correctly
    console.log(resArray)

    // start random gen
    for (var i = 0; i < userInt; i++) {
        // pushes our resulting array from conditioning into userArray var
        userArray.push(resArray[Math.floor(Math.random() * resArray.length)]);
    }
    // returns fully gen pass and converts it into string
    return userArray.join("");
}

// this function stores out generatePassword func into a var and targets pass id to display it
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    // passwordText will first run gen func then paste output val into passwordText area
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);