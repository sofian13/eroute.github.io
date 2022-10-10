let guessField = document.querySelector('guessField');
//let solution = 6666 ;

//*var timer=setInterval("devine()", 900);

function myFunction(val) {
    if (val == 140321754) {
        alert("Bravo, vous avez réussi à trouver le code secret. Veillez remplir le formulaire pour participer à notre concours !");
        location.replace("http://eroute.alwaysdata.net/formulaire.html");

    } else {
        alert("Dommage, tu t'es trompé. (bien tenté !). Alors recommence! tu as entré le code : " + val);

    }
}