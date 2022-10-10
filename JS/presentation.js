let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let counter = 1;
toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})


/* Pour image qui dÃ©file*/
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 4000);



/* Machine Ã  Ã©crire*/

const title = document.querySelector('h1');





function typewriter(word, index) {

    if (index < word.length) {

        setTimeout(() => {

            title.innerHTML += `<span>${word[index]}</span>`

            typewriter(txt, index + 1)

        }, 300);

    }

}