

var questions = [1,2,3,4];


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