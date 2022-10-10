let guessField = document.querySelector('guessField');
//let solution = 6666 ;
//*var timer=setInterval("devine()", 900);

function myFunction(val) {
    if (val == 8155) {
        alert("Bravo, vous avez réussi à trouver le code secret. Voici la suite du mot de passe  : 754");
        location.replace("http://eroute.alwaysdata.net/presentation.html");
    } else {
        alert("la chance n'est pas avec toi (bien tenté!). Alors recommence! tu as entré le code : " + val);
    }
}