// Assignment Code
// variable set ups.
var generateBtn = document.querySelector("#generate");
//This function to generate array from low to high, interval=1.
function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
}

//Construct arrays of character CODES.
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


// Write password to the #password input
function writePassword() {
    //Step 1: check password character amount.
    var characterAmount=Math.round(window.prompt("Please input a number between 8 to 128 for your Password Character Amount."));
    if(8<=characterAmount && characterAmount<=128){
        var lowercaseYes=window.confirm("Click OK to confirm including Lowercase Characters."); 
        var uppercaseYes=window.confirm("Click OK to confirm including Uppercase Characters.");
        var numericYes=window.confirm("Click OK to confirm including Numeric Characters.");
        var specialYes=window.confirm("Click OK to confirm including Special Characters.");
        if(!lowercaseYes && !uppercaseYes && !numericYes && !specialYes){
            window.alert("Must select at least one Character type."); 
        }
        else{

            //Step 2: Declear a function to have user inputs as parameteres for random password.
            function randomPassword(characterAmount,lowercaseYes,uppercaseYes,numericYes,specialYes){
                var charTypeCodes=[]
                if (lowercaseYes) charTypeCodes = charTypeCodes.concat(LOWERCASE_CHAR_CODES)
                if (uppercaseYes) charTypeCodes = charTypeCodes.concat(UPPERCASE_CHAR_CODES)
                if (numericYes) charTypeCodes = charTypeCodes.concat(NUMBER_CHAR_CODES)
                if (specialYes) charTypeCodes = charTypeCodes.concat(SYMBOL_CHAR_CODES)
                //Now this charTypeCodes stores all the ASCII Character Codes of user selected Character types.
             
                var passwordCharacters=[]
                for (let i = 0; i < characterAmount; i++) {
                    const characterCode = charTypeCodes[Math.floor(Math.random() * charTypeCodes.length)]
                    passwordCharacters.push(String.fromCharCode(characterCode))
                }
                return passwordCharacters.join('')
            }
            //Final Step: Assign generated password to html textarea.
            var userPassword=randomPassword(characterAmount,lowercaseYes,uppercaseYes,numericYes,specialYes);
            document.getElementById("password").innerText = userPassword;











        }
    }
    else{
        window.alert("Please type in an integer between 8 to 128.");
    };  
}

// click generate button to trigger generation.
generateBtn.addEventListener("click", writePassword);















