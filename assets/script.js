//Document method for all of the IDs in html
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionsEl = document.getElementById("questions");
var end = document.getElementById("end");
var startButton = document.getElementById("start-button")
var currentQuestionEl = document.getElementById("title")

var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3= document.getElementById("choice3")
var choice4 = document.getElementById("choice4")

var questionIndex ;
var userScore
//Set up objects/arrays for questions
var questions = [{
    quizQuestion : 'This is the text for Q1',
    choices : [ 'correctAnswer', 'answer2', 'answer3', 'answer4'],
    correctAnswer : 'correctAnswer'
},

 {
    quizQuestion: 'This is the text for Q2',
    choices : [ 'answer1', 'answer2', 'answer3', 'correctAnswer'], 
    correctAnswer : 'correctAnswer'
},

  {
    quizQuestion : 'This is the text for Q3',
    choices : [ 'answer1', 'correctAnswer', 'answer3', 'answer4'],
    correctAnswer : 'correctAnswer'
},

  {
    quizQuestion: 'This is the text for Q4',
    choices : [ 'answer1', 'answer2', 'correctAnswer', 'answer4'] ,
    correctAnswer : 'correctAnswer'
}]
//


function startQuiz(){
  start.style.display = 'none';
  quiz.style.display = 'block';
  questionIndex = 0;
  userScore = 0;
  //start timer
  displayQuestions();
}
function displayQuestions() {
currentQuestionEl.textContent = questions[questionIndex].quizQuestion;
choice1.textContent = questions[questionIndex].choices[0];
choice2.textContent = questions[questionIndex].choices[1];
choice3.textContent = questions[questionIndex].choices[2];
choice4.textContent = questions[questionIndex].choices[3]
}

function checkAnswer(event){
  console.log(event);
  if (event.target.className === "choice") {
    if (event.target.textContent === questions[questionIndex].correctAnswer){
      console.log('correct');
      userScore += 10;
    }else {
      console.log('incorrect');
    }
    questionIndex++
    if (questionIndex === questions.length) {
      endGame()
    }else{
      displayQuestions()
    }
    
  }
}
function endGame (){
  quiz.style.display = 'none'; 
  end.style.display = 'block';
  document.getElementById ("user-score").textContent="Your Score Was " + userScore;
}



//Timer Function
var secondsLeft = 45;
function setTime() {
    var quizCountdown = setInterval(function() {
     console.log(secondsLeft);
     secondsLeft--
     if (secondsLeft === 0) {
        console.log('Time is up!');
        clearInterval(quizCountdown);
     }
    }
    , 1000);
  }
  //setTime();   //uncomment when running
  questionsEl.addEventListener('click', checkAnswer)
 
  startButton.addEventListener('click', startQuiz)
  //questionEl.addEventListener('click', )