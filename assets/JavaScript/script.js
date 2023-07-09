let startbtn = document.querySelector("#startbtn");
let timer = document.querySelector("#timer");

startbtn.addEventListener("click", function(){
    alert("hello");
})

// When the start button is clicked, the quiz should start. Likely a function.
// The quiz should have n questions, each with 4 possible answers. Likely an array.
// When a correct answer is picked, a point is awarded (point++) and the next question is shown.
// When an incorrect answer is picked, the chosen answer is greyed out, and time is deducted from the timer
// The end of the quiz is achieved when all questions have been answered.
// The end of the quiz is also achieved if the timer reaches 0.
// Once the quiz ends, the total amount of points is shown compared to the possible amount of points. 
