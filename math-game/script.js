// Define ID elements
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const result = document.getElementById("result");
const levelDiv = document.getElementById("level");
const timerDiv = document.getElementById("timer");

const correctBar = document.getElementById("correctBar");
const incorrectBar = document.getElementById("incorrectBar");

// Other variables
var values = [];

var correctAnswer;

var correct = 0;
var incorrect = 0;

var level = 0;

var timeLeft = 30;

var correctPercentage = 0;

var gotAnswer = false;

function NextQuestion() {
    gotAnswer = false;

    values[0] = GetRandomInt(1, 10);
    values[1] = GetRandomInt(1, 10);
    values[2] = GetRandomInt(1, 10);

    answer.value = "";
    result.innerHTML = "Result: ";
    
    if (level < 10) {
        question.innerHTML = values[0] + " &#183; " + values[1] + " = ?";
    } else if (level < 20) {
        question.innerHTML = values[0] + " &#183; " + "?" + " = " + values[0] * values[1];
    } else if (level < 30) {
        question.innerHTML = values[0] + " + " + values[1] + " &#183; " + values[2] + " = ?";
    } else if (level < 40) {
        question.innerHTML = values[0] + " + " + values[1] + " &#183; ? = " + (values[0] + values[1] * values[2]);
    }

    timeLeft = 30;
}

function CheckAnswer() {
    gotAnswer = true;

    level++;
    levelDiv.innerHTML = "Level: " + level;

    if (level < 10) {
        correctAnswer = values[0] * values[1];
    } else if (level < 20) {
        correctAnswer = values[0] * values[1] / values[0];
    } else if (level < 30) {
        correctAnswer = values[0] + values[1] * values[2];
    } else if (level < 40) {
        correctAnswer = values[2];
    }

    if (answer.value == correctAnswer) {
        correct++;

        result.innerHTML = "Result: <span class='correct'>correct</span>";
    } else {
        incorrect++;

        result.innerHTML = "Result: <span class='incorrect'>incorrect</span><br>Correct answer was: " + correctAnswer;
    }

    UpdateResultPercentage();
}

function UpdateResultPercentage() {
    correctPercentage = 100 / (correct + incorrect) * correct;

    correctBar.style.width = correctPercentage + "%";
    correctBar.innerHTML = Math.round(correctPercentage) + "%";

    incorrectBar.style.width = 100 - correctPercentage + "%";
    incorrectBar.innerHTML = Math.round(100 - correctPercentage) + "%";
}

function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault();

        if (!gotAnswer) {
            CheckAnswer();
        } else {
            NextQuestion();
        }
    }
}

function Timer() {
    if (timeLeft > 0 && !gotAnswer) {
        timeLeft -= 1;
        timerDiv.innerHTML = "<br>" + timeLeft;
    } else if (!gotAnswer) {
        timerDiv.innerHTML = "<br>" + timeLeft;
        CheckAnswer();
    }
}

setInterval(Timer, 1000);
