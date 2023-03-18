const questions = [
    {
        question: "What type of birthday cake did Hagrid bring when he first told Harry he was a wizard?",
        answers: [
            { text: "Coffee and walnut", correct: false},
            { text: "Carrot cake", correct: false},
            { text: "Vanilla sponge cake", correct: false},
            { text: "Chocolate cake", correct: true},
        ]
    },
    {
        question: "What did Professor Flitwick give Harry after his interview appeared in the Quibbler?",
        answers: [
            { text: "A packet of Chocolate Frogs", correct: false},
            { text: "Fizzing Whizzbees", correct: false},
            { text: "A box of squeaking sugar mice", correct: true},
            { text: "Liquorice Wands", correct: false},
        ]
    },
    {
        question: "What was in the sandwiches Ron offered to swap with Harry for a pumpkin pastry shortly after they met?",
        answers: [
            { text: "Corned beef", correct: true},
            { text: "Tuna fish", correct: false},
            { text: "Peanut butter and jelly", correct: false},
            { text: "Ham and cheese", correct: false},
        ]
    },
    {
        question: "What was the first thing Harry showed other members of the DA during their first meeting in the room of requirement?",
        answers: [
            { text: "The Patronus Charm", correct: false},
            { text: "How to cast an Impediment Jinx", correct: false},
            { text: "The Disarming Charm ", correct: true},
            { text: "The Stunning Spell", correct: false},
        ]
    },
    {
        question: "When did Hermione discover the Hogwarts kitchens were staffed by house-elves?",
        answers: [
            { text: "The fourth-year start-of-term feast", correct: true},
            { text: "The Triwizard Yule Ball feast", correct: false},
            { text: "The third-year Halloween feast", correct: false},
            { text: "The fifth-year end-of-term feast", correct: false},
        ]
    },
    {
        question: "Which of these magical creatures has Harry Potter not travelled by?",
        answers: [
            { text: "Dragon", correct: false},
            { text: "Thestral", correct: false},
            { text: "Phoenix", correct: false},
            { text: "Chimaera", correct: true},
        ]
    },
    {
        question: "Which of these broomsticks was being advertised at the Quidditch World Cup?",
        answers: [
            { text: "Firebolt", correct: false},
            { text: "The Bluebottle", correct: true},
            { text: "Nimbus 2001", correct: false},
            { text: "Silver Arrow", correct: false},
        ]
    },
    {
        question: "Which professor teaches Ancient Runes in Hogwarts?",
        answers: [
            { text: "Aurora Sinistra", correct: false},
            { text: "Bathsheda Babbling", correct: true},
            { text: "Charity Burbage", correct: false},
            { text: "Cuthbert Binns", correct: false},
        ]
    },
    {
        question: "When Professor Trelawney delivered a real prediction at the end of Harry's exam, how long did she say The Dark Lord's servant had been chained for?",
        answers: [
            { text: "8 years", correct: false},
            { text: "10 years", correct: false},
            { text: "12 years", correct: true},
            { text: "15 years", correct: false},
        ]
    },
    {
        question: "What's the incantation for the Perpetual Tickling charm?",
        answers: [
            { text: "Furnunculus", correct: false},
            { text: "Rictusempra", correct: true},
            { text: "Densaugeo", correct: false},
            { text: "Liberacorpus", correct: false},
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
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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
