// This constant allows us to set questions for our quiz. In concept, we can add as many questions as we'd like without messing up the code too much.
const quizQuestions = [
    {
        question: "What is the color of the sky?",
        answers: [
            { text: "Magenta", correct: false},
            { text: "Green", correct: false},
            { text: "Blue", correct: true},
            { text: "Razzmatazz", correct: false},
 
        ],
    },
    {
        question: "Select the animal that lives in the ocean.",
        answers: [
            { text: "Giraffe", correct: false},
            { text: "Jellyfish", correct: true},
            { text: "Vulture", correct: false},
            { text: "Scrappy Doo", correct: false},
 
        ],
    },
    {
        question: "Out of these options, which album is made by Taylor Swift?",
        answers: [
            { text: "Ultraviolence", correct: false},
            { text: "RENAISSANCE", correct: false},
            { text: "Endless Summer Vacation", correct: false},
            { text: "Folklore", correct: true},
 
        ],
    },
    {
        question: "Speaking of Taylor Swift, what are your thoughts on her?",
        answers: [
            { text: "Love her. She's an icon.", correct: true},
            { text: "I don't really think about her", correct: false},
            { text: "I think she's overrated.", correct: false},
            { text: "I dislike her, and her music.", correct: false},
 
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
    // We need to create a function that will remove the preset answer buttons from the screen. This function is defined below.
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
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
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

// this function determines what happens when the user clicks a button. Note that 'e' is shorthand for event.
function selectAnswer(e){
    // We are defining 'selectedBtn' is whatever the user clicked on, which is e.target
    const selectedBtn = e.target;
    // We are defining the isCorrect variable to refer to the dataset in the quizQuestions array. This variable can be either true or false depending on what is listed in the array.
    const isCorrect = selectedBtn.dataset.correct === "true";
    // The following function will determine what will happen if the answer is true or false.
    if (isCorrect){
        // This will add the 'correct' class to the answer, if it's correct. This is important for css styling.
        selectedBtn.classList.add("correct");
        // if the selected answer is correct, the score will be incremented by 1.
        score++;
        // if the selected answer is incorrect, the following code will run.
    } else {
        // applying an incorrect class to the answer, good for css styling.
        selectedBtn.classList.add("incorrect");
    }
    // The following function will disable answer buttons and display the next button once an answer has been picked. It will also display the correct answer if an inccorect answer was picked.
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// This next block of code will define the showScore function, which will show the score at the end of the quiz. 
function showScore(){
    // We will reset the state of the page, which removes all buttons, and hides the next button.
    resetState();
    // We will manually change the question element HTML to show us our score vs. our possible score.
    questionElement.innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
    // The HTML of the nextButton will change to "play again" and will be unhidden.
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// This block of code will define the handleNextButton function
function handleNextButton(){
    //We will advance the current question index by 1 each time this function is called.
    currentQuestionIndex++;
    // This if loop will only run if the current question index is less than the length of our quiz questions array. It will show the repsective question if true.
    if(currentQuestionIndex < quizQuestions.length){
        showQuestion();
        // if the current question index = the length of the quiz questions, we will show the score instead.
    } else {
        showScore();
    }
}

// This code defines what happens if the user clicks on the next button.
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < quizQuestions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})


startQuiz();

// When the start button is clicked, the quiz should start. Likely a function.
// The quiz should have n questions, each with 4 possible answers. Likely an array.
// When a correct answer is picked, a point is awarded (score++) and the next question is shown.
// When an incorrect answer is picked, the chosen answer is greyed out, and time is deducted from the timer
// The end of the quiz is achieved when all questions have been answered.
// The end of the quiz is also achieved if the timer reaches 0.
// Once the quiz ends, the total amount of points is shown compared to the possible amount of points. 


// The initial page of the quiz should should have the header that welcomes the user to the quiz, h2 should give the rules, and the next button should say "start quiz". The start quiz function
// should start the function that runs the timer.

// At the end of the quiz the user should be prompted to 