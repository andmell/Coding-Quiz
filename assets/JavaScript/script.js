// This constant allows us to set questions for our quiz. In concept, we can add as many questions as we'd like without messing up the code too much.
const quizQuestions = [
    {
        question: "Test Question 1. Answer 3",
        answers: [
            { text: "test answer 1", correct: false},
            { text: "test answer 2", correct: false},
            { text: "test answer 3", correct: true},
            { text: "test answer 4", correct: false},
 
        ],
    },
    {
        question: "Test Question 2. Answer 2",
        answers: [
            { text: "test answer 1", correct: false},
            { text: "test answer 2", correct: true},
            { text: "test answer 3", correct: false},
            { text: "test answer 4", correct: false},
 
        ],
    },
    {
        question: "Test Question 3. Answer 4",
        answers: [
            { text: "test answer 1", correct: false},
            { text: "test answer 2", correct: false},
            { text: "test answer 3", correct: false},
            { text: "test answer 4", correct: true},
 
        ],
    },
    {
        question: "Test Question 4. Answer 1",
        answers: [
            { text: "test answer 1", correct: true},
            { text: "test answer 2", correct: false},
            { text: "test answer 3", correct: false},
            { text: "test answer 4", correct: false},
 
        ],
    }

];
//This constant will be useful in changing the placeholder question text into the actual question
const questionElement = document.getElementById("question");
// This constant will be used in assigning text to the buttons for the user.
const answerButtons = document.getElementById("answer-buttons");
// this constant will allow us to assign functionality to the next button, which should be visible after a question is picked.
const nextButton = document.getElementById("next-btn");

// The currentQuestionIndex will be used to assign a number to our questions array, allowing us to cycle through them in a particular fashion.
let currentQuestionIndex = 0;
// It's important to define a score variable now, so that we can increment it inside of a subsequent function
let score = 0;

function startQuiz(){
// To start the quiz, we will set the current question index to 0, which will assign the first object in our array to the question and answer variables respectively
    currentQuestionIndex = 0;
    // The score will be set, or reset to 0 and will increment for each question answered correctly
    score = 0;
    // The text for the next button will simply read "Next". This will change depending on the context of the quiz.
    nextButton.innerHTML = "Next";
    // We will have to write a showQuestion function, which will assign the actual question to the h2 in the html, and the possible answers to the buttons in the html
    showQuestion();
}

function showQuestion(){
    // We need to create a function that will remove the preset answer buttons from the screen. This function is define below.
    resetState();
    // first, we are assigning the current question to represent an object from the quizQuestions array, based off of the current question index.
    let currentQuestion = quizQuestions[currentQuestionIndex];
    // We are creating a variable to let the user know what question they are on based off of the question index. We added +1 since the index starts at 0, and it wouldn't make sense for someone to start on "question 0"
    let questionNo = currentQuestionIndex + 1;
    // The following line writes our question. It changes the HTML to represent the question number, followed by a period, followed by the text in the "question" field from our quizQuestions array.
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    // The following function assigns text to each of four buttons that can be selected.
    currentQuestion.answers.forEach(answer => {
        // Here we are creating a button element to assign our answer text to.
        const button = document.createElement("button");
        // We will change the text of the button to resemble the text of the answer found in each object of the quizQuestions array
        button.innerHTML = answer.text;
        // We are assigning the same class to this Button element, as the previous button elements found in the HTML. This is so that the same CSS stylings will be applied to our button class, and will be affected by the same Js rules
        button.classList.add("btn");
        // Finally we will append the new button element to our HTML so that they appear in our site
        answerButtons.appendChild(button);
    });
}

function resetState(){
    // The next button needs to be hidden until the user picks a question.
    nextButton.style.display = "none";
    // The firstChild of the answerButtons are all of the subsequent buttons listed in the HTML
    while(answerButtons.firstChild){
        //By using a while method, we can remove the buttons listed in the HTML, so that only our buttons created in Js are shown in their place. 
        //It reads as "while the answer buttons div has children... we will remove the first listed children" AKA removing the buttons in the HTML.
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();

// When the start button is clicked, the quiz should start. Likely a function.
// The quiz should have n questions, each with 4 possible answers. Likely an array.
// When a correct answer is picked, a point is awarded (point++) and the next question is shown.
// When an incorrect answer is picked, the chosen answer is greyed out, and time is deducted from the timer
// The end of the quiz is achieved when all questions have been answered.
// The end of the quiz is also achieved if the timer reaches 0.
// Once the quiz ends, the total amount of points is shown compared to the possible amount of points. 
