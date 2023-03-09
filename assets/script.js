// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "^", "_", "`", "{", "|", "}", "~"];
var caps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

function generatePassword(){
    var pw = "";
    var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var params = [];
    var length = Number(prompt("How many characters would you like your password to be?"));
    if (length < 8 || length > 128){
        alert("Password must be between 8 and 128 characters, please try again");
        return;
    }
    params.push(confirm("Would you like special charaters to be included?"));
    if(params[0]){
        chars = chars.concat(specialChar);
    };
    params.push(confirm("Would you like number to be included?"));
    if(params[1]){
        chars = chars.concat(numbers);
    };
    params.push(confirm("Would you like uppercase letters to be included?"));
    if(params[2]){
        chars = chars.concat(caps);
    };
    for(var i = 0; i < length; i++){
        pw += (chars[Math.floor(Math.random()*chars.length)])
    }
    return(pw)
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
