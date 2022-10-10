function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}
var lien = document.getElementById("liencacher");

Quiz.prototype.guess = function(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.questions.length;
};

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
};
var QuizUI = {
    displayNext: function() {
        if (quiz.hasEnded()) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    displayQuestion: function() {
        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },
    displayChoices: function() {
        var choices = quiz.getCurrentQuestion().choices;

        for (var i = 0; i < choices.length; i++) {
            this.populateIdWithHTML("choice" + i, choices[i]);
            this.guessHandler("guess" + i, choices[i]);
        }
    },

    displayScore: function() {
        if (quiz.score <= 10) {
            var lien = document.getElementById("liencacher");
            var gameOverHTML = "<h1>Defaite</h1>";
            gameOverHTML += "<h2> Ton score est : " + quiz.score + "</h2>";
            this.populateIdWithHTML("quiz", gameOverHTML);
            var button = document.createElement("BUTTON");
            document.body.appendChild(button);
            button.innerHTML = "Revenir au menu principal";
            button.addEventListener("click", function() {
                location.replace("http://eroute.alwaysdata.net/presentation.html");
                button.style.position = "absolute";
                btn.style.position = "absolute";
                button.style.top = "0px";
                btn.style.top = "0px";
                button.style.left = "100px";
                btn.style.left = "0px";
            });

        }
        if (quiz.score == 10) {
            var gameOverHTML = "<h1>Victoire</h1>";
            gameOverHTML += "<h2> Ton score est : " + quiz.score + "</h2>";
            this.populateIdWithHTML("quiz", gameOverHTML);
            var button = document.createElement("BUTTON");
            document.body.appendChild(button);
            button.innerHTML = "Continuer";
            button.addEventListener("click", function() {
                alert("Félicitation ! Vous avez fini le quiz, mais l'épreuve n'est pas encore fini !");
                location.replace("http://eroute.alwaysdata.net/quizzreponse.html");
            });
            button.style.position = "absolute";
            btn.style.position = "absolute";
            button.style.top = "0px";
            btn.style.top = "0px";
            button.style.left = "100px";
            btn.style.left = "0px";



        }
    },

    populateIdWithHTML: function(id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    guessHandler: function(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            QuizUI.displayNext();
        }
    },

    displayProgress: function() {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    }
};

var questions = [
    new Question("Combien y a t-il de morts par accidents en 2020 ?", ["2780", "1918", "1768", "2679"], "2780"),
    new Question("Quel est le taux maximum d'alcool à ne pas dépasser ?", ["0.15 g/l", "0.2 g/l", "0.1 g/l", "0.3 g/l"], "0.2 g/l"),
    new Question("A 50km/h, combien avons-nous de chance de survivre", ["15%", "10%", "30%", "20%"], "20%"),
    new Question("A 50km/h, combien parcourt-on de mètres par seconde ?", ["7m", "15m", "20m", "19m"], "15m"),
    new Question("En cas de perte de points, au bout de combien de temps sans infraction récupère-t-on la totalité des points?", ["2 ans", "4 ans", "3 ans", "1 an"], "3 ans"),
    new Question("Combien de temps gagne-t-on sur un parcours de 100km si on roule à 120km/h au lieu de 100km/h(", ["10 minutes", "12 minutes", "7 minutes", "5 minutes"], "10 minutes"),
    new Question("Quel est le montant de l’amende si je grille un stop ?", ["75€", "135€", "115€", "100€"], "135€"),
    new Question("Quel est le nombre de points retirés si je téléphone au volant?", ["1 points", "4 points", "3 points", "2 points"], "2 points"),
    new Question("Combien de point son retiré à votre permis si vous êtes en conduite sous stupéfiants ?", ["5 points", "6 points", "4 points", "8 points"], "6 points"),
    new Question("Quelle est la distance d’arrêt à 90km/h  ?", ["81m", "140m", "110m", "115m"], "81m")

];


var quiz = new Quiz(questions);


QuizUI.displayNext();