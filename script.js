var enter;
var confirmCharacter;
var confirmUppercase;
var confirmNumber;
var confirmLowercase;
 
character = ["!","#","$","%","&","'", "(",")","*","+",",","-",".","/","\:","\;","<","=",">","?", "@","^","_","`","{","|","}","~"];

number = [1,2,3,4,5,6,7,8,9];

alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

alphu = alph.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


function generatePassword() {
    
    enter = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 55"));
 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 55) {
        
        enter = parseInt(prompt("You must choose between 8 and 55"));

    } else {
      
        confirmNumber = confirm("Do you want this contain numbers?");
        confirmCharacter = confirm("Do you want this password to contain special characters?");
        confirmUppercase = confirm("Do you want this password contain Uppercase letters?");
        confirmLowercase = confirm("Do you want this password contain Lowercase letters?");
    };

 
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("This must contain at least 1 critera!");

    }
   
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alph, alphu);
    }
    
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alph);
    }
    
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alph, alphu);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alph, alphu);
    }

   else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alphu);
    }
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alph);

    } 
    
    else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alphu);
    }
    
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } 
    
    else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alphu);

    } 
    
    else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphu);
    }
    
    else if (confirmCharacter) {
        choices = character;
    }

    else if (confirmLowercase) {
        choices = alph;
    }

    else if (confirmNumber) {
        choices = number;
    }
    
    else if (confirmUppercase) {
        choices = space.concat(alphu);
    };

    
    var password = [];

     
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
  
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}



