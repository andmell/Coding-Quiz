
const quizQuestions = [
    {
        question: "Test Question 1",
        answer: {
            a: "test1",
            b: "test2",
            c: "test3 answer",
            d: "test4"
        },
        correctAnswer: "c"
    },
    {
        question: "Test Question 2",
        answers: {
            a: "test1 answer",
            b: "test2",
            c: "test3",
            d: "test4"
        },
        correctAnswer: "a"
    },
    {
        question: "test Question 3",
        answers: {
            a: "test1",
            b: "test2",
            c: "test3",
            d: "test4 answer"   
        },
        correctAnswer: "d"
    }
]

function buildQuiz(){
    //variable to store html output
    const output = [];

    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
        }
    )
};

function showResults(){};

// display quiz right away


//Click this button to start quiz
startbtn.addEventListener("click", function(){
//This runs the buildQuiz function
    buildQuiz();
})

// When the start button is clicked, the quiz should start. Likely a function.
// The quiz should have n questions, each with 4 possible answers. Likely an array.
// When a correct answer is picked, a point is awarded (point++) and the next question is shown.
// When an incorrect answer is picked, the chosen answer is greyed out, and time is deducted from the timer
// The end of the quiz is achieved when all questions have been answered.
// The end of the quiz is also achieved if the timer reaches 0.
// Once the quiz ends, the total amount of points is shown compared to the possible amount of points. 
