//Document method for all of the IDs in html
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var end = document.getElementById("end");

//Set up object array for questions
let quizQuestions = [{
    question1 : 'This is the text for Q1',
    choiceA : 'correct',
    choiceB : 'wrong',
    choiceC : 'wrong',
    correctAnswer : 'A'
},
{
    question2 : 'This is the text for Q2',
    choiceA : 'correct',
    choiceB : 'wrong',
    choiceC : 'wrong',
    correctAnswer : 'A'
},
{
    question3 : 'This is the text for Q3',
    choiceA : 'correct',
    choiceB : 'wrong',
    choiceC : 'wrong',
    correctAnswer : 'A'
},
{
    question4: 'This is the text for Q4',
    choiceA : 'correct',
    choiceB : 'wrong',
    choiceC : 'wrong',
    correctAnswer : 'A'
}]
//









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
  document.querySelectorAll('.questions').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
    })
  })
 
  
  questionEl.addEventListener('click', )