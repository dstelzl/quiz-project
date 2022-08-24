//Document method for all of the IDs in html
var bodyEl = document.querySelectorAll("body");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionsEl = document.getElementById("questions");
var end = document.getElementById("end");
var startButton = document.getElementById("start-button");
var currentQuestionEl = document.getElementById("title");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var submitInitialsButton = document.getElementById("submit-initials");
var finalScreen = document.getElementById("final-screen");
var clock = document.getElementById("clock");
var initials = document.getElementById("initials");
var questionIndex;
var userScore;
//Set Attributes to center
start.setAttribute("style", "margin:auto; width:50%; text-align:center;");
quiz.setAttribute("style", "margin:auto; width:50%; text-align:center;");
questionsEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
end.setAttribute("style", "margin:auto; width:50%; text-align:center;");
startButton.setAttribute("style", "margin:auto; width:50%; text-align:center;");
currentQuestionEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
choice1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
choice2 .setAttribute("style", "margin:auto; width:50%; text-align:center;");
choice3.setAttribute("style", "margin:auto; width:50%; text-align:center;");
choice4.setAttribute("style", "margin:auto; width:50%; text-align:center;");
submitInitialsButton.setAttribute("style", "margin:auto; width:50%; text-align:center;");
finalScreen.setAttribute("style", "margin:auto; width:50%; text-align:center;");
clock.setAttribute("style", "margin:auto; width:50%; text-align:center;");
//Set up objects/arrays for questions
var questions = [
  {
    quizQuestion: "What is the name of Phoebe's twin sister?",
    choices: ["Ursula", "Kate", "Monica", "Lisa"],
    correctAnswer: "Ursula",
  },
  {
    quizQuestion: "How many sisters does Joey have?",
    choices: ["5", "11", "3", "7"],
    correctAnswer: "7",
  },
  {
    quizQuestion: "Where did Ross and Rachel have their first date?",
    choices: ["The Zoo", "The Planetarium", "Central Park", "Empire State Building"],
    correctAnswer: "The Planetarium",
  },
  {
    quizQuestion: "Who is the youngest FRIEND?",
    choices: ["Ross", "Chandler", "Rachel", "Joey"],
    correctAnswer: "Rachel",
  },
];
//Set up function to move from the start id display to the quiz id display
function startQuiz() {
  start.style.display = "none";
  quiz.style.display = "block";
  questionIndex = 0;
  userScore = 0;
  displayQuestions();
}
//Set up function to sort questions by index
function displayQuestions() {
  currentQuestionEl.textContent = questions[questionIndex].quizQuestion;
  choice1.textContent = questions[questionIndex].choices[0];
  choice2.textContent = questions[questionIndex].choices[1];
  choice3.textContent = questions[questionIndex].choices[2];
  choice4.textContent = questions[questionIndex].choices[3];
}
//Set up function to check if the answer selected is the correct answer
function checkAnswer(event) {
  console.log(event);
  if (event.target.className === "choice") {
    if (event.target.textContent === questions[questionIndex].correctAnswer) {
      console.log("correct");
      userScore += 10;
    } else {
      console.log("incorrect");
    }
    questionIndex++;
    if (questionIndex === questions.length) {
      endGame();
    } else {
      displayQuestions();
    }
  }
}
//Set up function to change display from questions to user score
function endGame() {
  quiz.style.display = "none";
  end.style.display = "block";
  document.getElementById("user-score").textContent =
    "Your Score Was " + userScore;
    
}



function score() {
  quiz.style.display = "none";
  end.style.display = "block";
  finalScreen.display='block';
  //finalScreen.textContent = userScore; 
}

var timer = setTime();
var secondsLeft = 20
function setTime() {
  var quizCountdown = setInterval(function () {
    secondsLeft--;
    clock.textContent = secondsLeft
    
    if (secondsLeft === 0) 
      clearInterval(quizCountdown);
    }
    ,1000); 

  }


  var input = document. getElementById("input_id"). value; 

//creating dynamic user event to check for correct answer upon user clicking a choice
questionsEl.addEventListener("click", checkAnswer);
//set start button to activate quiz when user clicks button
startButton.addEventListener("click", startQuiz);

submitInitialsButton.addEventListener('click', input);


