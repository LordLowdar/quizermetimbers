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

function nextQuestion() {
  //var randoQ = questions[Math.floor(Math.random() * questions.length)];
  var randoQ = questions[questionIndex];
  var title = document.querySelector(".title");
  var choices = document.querySelector(".choices ul");
  var answer = document.querySelector(".answer");

  title.textContent = randoQ.title;
  choices.innerHTML = randoQ.choices
    .map((choice) => `<button>${choice}</button>`)
    .join("");
  answer.textContent = randoQ.answer;
  //compare the answer
}

// function saveHighScore () {
// var playerScore = {
//  score = answer.value
// };
// localStorage.setItem("score", )
// };

// function renderHighScore() {
//  var currentScore =
//  if
//}

//Answer text needs to be hidden and then see if its the right answer boolean??

//Add visibility of next question button here?
//Needs to only run once globally
//function timeOut() {
//  setInterval(function () {
//    alert("Thats all she wrote");
//  }, 5000);
//}

function timeOut() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " how many can you get?";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
  nextQuestion();
  sendMessage();
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
}

//Store score local

document.querySelector("#start").addEventListener("click", timeOut);
document.querySelector(".choices").addEventListener("click", checkAnswer);
