let guessField = document.querySelector('guessField');
//let solution = 6666 ;

//*var timer=setInterval("devine()", 900);

function myFunction(val) {
    if (val == 1242312421) {
        alert("Bravo, voici le début du code secret : 140 !");
        location.replace("http://eroute.alwaysdata.net/presentation.html");

    } else {
        alert("Dommage, tu t'es trompé. (bien tenté !). Alors recommence! tu as entré le code : " + val);

    }
}