var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];
var timerEl = document.querySelector(".time");
var score = document.querySelector(".score");
var secondsLeft = 20;
var questionIndex = 0;
var correctAnswers = 0;

window.onload = function () {
  document.getElementById("someid").style.display = "none";
};

function nextQuestion() {
  var randoQ = questions[Math.floor(Math.random() * questions.length)];
  var randoQ = questions[questionIndex];
  var title = document.querySelector(".title");
  var choices = document.querySelector(".choices ul");
  var answer = document.querySelector(".answer");

  title.textContent = randoQ.title;
  choices.innerHTML = randoQ.choices
    .map((choice) => `<button>${choice}</button>`)
    .join("");

  if (questions.length === 0) {
    scoreSheet();
  }
}

function timeOut() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " How many can you get?";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      scoreSheet();
      sendMessage();
      myFunction();
    }
  }, 1000);
}

function checkAnswer(e) {
  var questionEl = questions[questionIndex];
  if (e.target.matches("button")) {
    if (e.target.textContent === questionEl.answer) {
      console.log("correct");
      correctAnswers++;
      sendMessage();
    } else {
      secondsLeft -= 5;

      console.log("incorrect");
    }
  }

  questionIndex++;
  if (questionIndex > questions.length) {
    //End quiz here with a return
  }
  nextQuestion();
}

function sendMessage() {
  score.textContent = correctAnswers;
  console.log(correctAnswers);
  localStorage.setItem("score", correctAnswers);
}

function scoreSheet() {
  playerDetails = document.createElement("form");
  playerContent = document.createTextNode("Enter your Highscore!");
  playerDetails.appendChild(playerContent);
  currentDiv = document.getElementById("answer");
  currentDiv.appendChild(playerDetails);
}

function myFunction() {
  var x = document.getElementById("someid");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function saveHighScore(e) {
  console.log("clicked the save");
  e.preventDefault();
  localStorage.setItem("username", username);
  localStorage.getItem("score", correctAnswers);
}
//Store score local

document.querySelector("#start").addEventListener("click", timeOut);
document.querySelector("#start").addEventListener("click", nextQuestion);
document.querySelector(".choices").addEventListener("click", checkAnswer);
