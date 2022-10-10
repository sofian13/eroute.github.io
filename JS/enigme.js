let guessField = document.querySelector('guessField');
//let solution = 6666 ;
var lien = document.getElementById("liencacher");
//*var timer=setInterval("devine()", 900);

function myFunction(val) {
    if (val == 695993) {
        alert("Bravo, vous avez réussi à trouver le code secret. Voici la suite du mot de passe  : 321");
        location.replace("http://eroute.alwaysdata.net/presentation.html");
    } else {
        alert("Dommage, tu t'es trompé. (bien tenté!). Alors recommence! tu as entré le code : " + val);
    }
}