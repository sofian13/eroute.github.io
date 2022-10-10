let time = 60;

const cercle = document.getElementById('cercle');

setInterval(timer, 1000);

function timer() {
    cercle.innerHTML = `${time}`;
    --time;
    if (time === -1) { // -2 car latence
        alert("temps écoulé");
        location.replace("http://eroute.alwaysdata.net/");
    }
}