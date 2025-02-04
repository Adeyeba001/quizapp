const questions = [
    {
        question: "who is the current president of the United State?",
        answers: [
            {text: "Joe Biden", correct: false},
            {text: "Donlad Trump", correct: true},
            {text: "Barack Obama", correct: false},
            {text: "Bola Tinubu", correct: false},
        ]
    },
    {
        question: "which sport is played with a ball and racket?",
        answers: [
            {text: "Tennis", correct: true},
            {text: "Basketball", correct: false},
            {text: "Football", correct: false},
            {text: "Baseball", correct: false},
        ]
    },
    {
        question: "How many sides does a triangle have?",
        answers: [
            {text: "2", correct: false},
            {text: "5", correct: false},
            {text: "4", correct: false},
            {text: "3", correct: true},
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: "what color is the sky?",
        answers: [
            {text: "Blue", correct: true},
            {text: "Green", correct: false},
            {text: "Yellow", correct: false},
            {text: "White", correct: false},
        ]
    },
    {
        question: "what sound does a cat make?",
        answers: [
            {text: "Moo", correct: false},
            {text: "Oink", correct: false},
            {text: "Meow", correct: true},
            {text: "Woof", correct: false},
        ]
    },
    {
        question: "what is the fastest land animal?",
        answers: [
            {text: "Cheetah", correct: true},
            {text: "Lion", correct: false},
            {text: "Giraffe", correct: false},
            {text: "Elephant", correct: false},
        ]
    },
    {
        question: "which color is often associated with love?",
        answers: [
            {text: "Blue", correct: false},
            {text: "Red", correct: true},
            {text: "Yellow", correct: false},
            {text: "Green", correct: false},
        ]
    },
    {
        question: "which holiday is celebrated on December 25th?",
        answers: [
            {text: "Halloween", correct: false},
            {text: "Thanksgiving", correct: false},
            {text: "Christmas", correct: true},
            {text: "Easter", correct: false},
        ]
    },
    {
        question: "what is the largest planet in our solar system?",
        answers: [
            {text: "Jupiter", correct: true},
            {text: "Earth", correct: false},
            {text: "Uranus", correct: false},
            {text: "Saturn", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();
    