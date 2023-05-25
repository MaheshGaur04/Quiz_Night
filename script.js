const quiz =[
    {
        q: 'Which of the following is an example of an alkali metal?',
        options: ['Calcium', 'Iron', 'Sodium', 'Neon'],
        answer: 2,
    },
    {
        q: 'Which of the following is an example of a greenhouse gas?',
        options: ['H2o', 'Co2', 'Magnesium', 'Xenon'],
        answer: 1,
    },
    {
        q: 'Why virtu box is famous for?',
        options: ['linux', 'kiosk', 'telecom', 'windows'],
        answer: 1,
    },
    {
        q: 'HTML uses?',
        options: ['User defined tags', 'Pre-specified tags', 'Fixed tags defined by the language', 'Tags only for linking'],
        answer: 2
    },
    {
        q: 'The year in which HTML was first proposed _______.?',
        options: ['1990', '1980', '2000', '1995'],
        answer: 0
    },
    {
        q: 'Fundamental HTML Block is known as ___________.?',
        options: ['HTML Body', 'HTML Tag', 'HTML Attribute', 'HTML Element'],
        answer: 1
    },
    {
        q: ' CSS stands for?',
        options: ['Cascade style sheets', 'Color and style sheets', 'Cascading style sheets', 'None of the these'],
        answer: 2
    },
    {
        q: 'What is the full form of HTML?',
        options: ['HyperText Markup Language', 'Hyper Teach Markup Language', 'Hyper Tech Markup Language', 'None of these'],
        answer: 0
    },
    {
        q: 'Who is Known as the father of World Wide Web (WWW)?',
        options: ['Robert Cailliau', 'Tim Thompson', 'Charles Darwin', 'Tim Berners-Lee'],
        answer: 3
    },
    {
        q: 'The CSS property used to control the element font-size is?',
        options: ['text-style', 'text-size', 'font-size', 'None of the these'],
        answer: 2
    },
    {
        q: 'The HTML attribute used to define the inline styles is?',
        options: ['Style', 'Styles', 'Class', 'None of the these'],
        answer: 0
    },
    {
        q: 'What tag is used to display a picture in a HTML page?',
        options: ['picture', 'image', 'img', 'src'],
        answer: 2
    },
    {
        q: 'What does HP stands for?',
        options: ['Henry Packard', 'Hewiit Packard', 'Hewlett Packard', 'Helson Packson'],
        answer: 2,
    },
    {
        q: 'In what year was the "@" chosen for its use in e-mail addresses?',
        options: ['1976', '1980', '1972', '1984'],
        answer: 2,
    },
    {
        q: 'First ODI (Cricket) in India was played in Ahemadabad.',
        options: ['True', 'False'],
        answer: 0,
    },
    {
        q: 'Where is the headquarters of Intel located?',
        options: ['Redmond, Washington', 'Tucson, Arizona', 'Santa Clara, California'],
        answer: 2,
    },
    {
        q: 'Ostrich\'s eyes are smaller than its brain',
        options: ['True', 'False'],
        answer: 1,
    },
    {
        q: 'How many squares are there in the following figure?',
        options: ['35', '30', '50', '40'],
        answer: 3,
        img: 'img/square.png',
    },
    {
        q: 'Count the triangles in picture below.',
        options: ['7', '9', '22', '24'],
        answer: 3,
        img: 'img/triangle.png',
    },
    {
        q: 'Windows, macOS, and Linux are examples of ________.?',
        options: ['Web browsers', 'Mobile devices', 'Filmy heroines', 'Operating systems'],
        answer: 3,
    },
    {
        q: 'What does "GUI" stand for?',
        options: ['Global user index', 'Graphical user interface', 'Golu use iphone'],
        answer: 1,
    },
    {
        q: 'Which among the following states is largest producer of Coffee in India?',
        options: ['Tamilnadu', 'Andhra Pradesh', 'Karnataka', 'Kerala'],
        answer: 2,
    },
    {
        q: 'Which among the following is India’s first Expressway?',
        options: ['Mumbai-Pune Expressway', 'Ahmedabad-Vadodara Expressway', 'Delhi-Gurgaon Expressway', 'Jaipur-Kishangarh Expressway'],
        answer: 0,
    },
    {
        q: 'Who were the 3 founders of Apple? Steve Jobs, Steve Wozniak, and ________.?',
        options: ['Tim Cook', 'Ronald Wayne', 'Sundar Pichai', 'Linus Torvalds'],
        answer: 1,
    },
    {
        q: 'What country is home to the tallest mountain in the world, Mount Everest?',
        options: ['India', 'China', 'Nepal', 'Japan'],
        answer: 2,
    },
    {
        q: 'What is the name of the highest uninterrupted waterfall in the world?',
        options: ['Niagara Falls', 'Vicoria Falls', 'Yosemite Falls', 'Angel Falls'],
        answer: 3,
    },
    {
        q: 'What star sign would someone born on August 24th be?',
        options: ['Leo', 'Cancer', 'Virgo', 'Gemini'],
        answer: 2,
    },
    {
        q: 'What geometric shape is generally used for stop signs?',
        options: ['Circle', 'Square', 'Hexagon', 'Octagon'],
        answer: 3,
    },
    {
        q: 'What is the name of the largest ocean on earth?',
        options: ['Pacific Ocean', 'Indian Ocean', 'Atlantic Ocean', 'Arctic Ocean'],
        answer: 0,
    },
    {
        q: 'Which is the only edible food that never goes bad?',
        options: ['Cheese', 'Honey', 'Sausage', 'Milk'],
        answer: 1,
    },
    {
        q: 'Which country won the first-ever soccer World Cup in 1930?',
        options: ['Uruguay', 'Argentina', 'France', 'Brazil'],
        answer: 0,
    },
    {
        q: 'Dump, floater, and wipe are terms used in which team sport?',
        options: ['Hockey', 'Cricket', 'Volleyball', 'Basketball'],
        answer: 2,
    },
    {
        q: 'What is the hottest planet in the solar system??',
        options: ['Mercury', 'Mars', 'Jupiter', 'Venus'],
        answer: 0,
    },
    {
        q: 'Which former Doctor Who actress played the part of Nebula in ‘Avengers:Infinity War’?',
        options: ['Zoe Saldana', 'Karen Gillan', 'Emma Stone', 'Elizabeth Olsen'],
        answer: 1,
    },
    {
        q: 'Which among the following Union Territory of India has largest Area?',
        options: ['Delhi', 'Andaman & Nicobar Islands', 'Dadra & Nagar Haveli', 'Chandigarh'],
        answer: 0,
    },
    {
        q: 'Which countrys flag is this?',
        options: ['Greece', 'Cyprus', 'Italy', 'Florida'],
        answer: 1,
        img: 'img/cyprus.png',
    },
    {
        q: 'which team have highest title in IPL?',
        options: ['CSK', 'Punjab', 'RCB', 'Mumbai'],
        answer: 3,
    },
    {
        q: 'why delhi is famous for?',
        options: ['Historic Place', 'Beauty', 'Politics', 'All of These'],
        answer: 3,
    },
    {
        q: "Which character is used to indicate an end tag?",
        options: ["^","<","/","*"],
        answer:2,
    },
   
    {
        q: "How do you make a list that lists its items with squares?",
        options:["list: square;","list-type: square;","list-style-type: square;"],
        answer: 2,
    },
    {
        q: "How do you select an element with id 'demo'?",
        options:["demo",".demo","#demo","*demo"],
        answer: 2,
    },
    {
        q: "How do you select elements with class name 'test'?",
        options:["*test","test","#test",".test"],
        answer: 3,
    },
    {
        q: "How do you select all p elements inside a div element?",
        options:["div.p","div + p","div p"],
        answer: 2,
    },
    {
        q: "How do you group selectors?",
        options:["Separate each selector with a comma","Separate each selector with a plus sign","Separate each selector with a space"],
        answer: 0,
    },
    {
        q: "What is the default value of the position property?",
        options:["relative","static","absolute","fixed"],
        answer: 1,
    },
]
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const questionLimit = 15;
//Declare variables
let email = '';
let password = '';
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
//SET Available Question
function setAvailableQuestions() {
    const totalQuestions = quiz.length;
    for (let i = 0; i < totalQuestions; i++) {
        availableQuestions.push(quiz[i])
    }
}
//Reset Form
function resetForm() {
    document.getElementById("myForm").reset();
}
//Get New Question
function getNewQuestion() {
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + questionLimit;
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    const index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1, 1);
    if (currentQuestion.hasOwnProperty("img")) {
        const img = document.createElement("img");
        img.src = currentQuestion.img;
        questionText.appendChild(img);
    }
    const optionsLength = currentQuestion.options.length;
    for (let i = 0; i < optionsLength; i++) {
        availableOptions.push(i);
    }
    optionContainer.innerHTML = '';
    let animationDelay = 0.2;
    for (let i = 0; i < optionsLength; i++) {
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    }
    questionCounter++;
}
function getResult(element) {
    const id = parseInt(element.id);
    if (id === currentQuestion.answer) {
        element.classList.add("correct");
        updateAnswerIndicator("correct");
        correctAnswers++;
    }
    else {
        element.classList.add("wrong");
        updateAnswerIndicator("wrong");
        const optionLength = optionContainer.children.length;
        for (let i = 0; i < optionLength; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();
}
//Unclickable 
function unclickableOptions() {
    const optionLength = optionContainer.children.length;
    for (let i = 0; i < optionLength; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}
//Next
function next() {
    if (questionCounter === questionLimit) {
        quizOver();
    } else {
        getNewQuestion()
    }
}
//Answer Indicator
function answersIndicator() {
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = questionLimit;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}
function updateAnswerIndicator(markType) {
    answersIndicatorContainer.children[questionCounter - 1].classList.add(markType)
}
//Quiz Over
function quizOver() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
    resetForm();
}
//Quiz Result
function quizResult() {
    resultBox.querySelector(".email-id").innerHTML = email;
    resultBox.querySelector(".password-pass").innerHTML = password;
    resultBox.querySelector(".total-question").innerHTML = questionLimit;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / questionLimit) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + questionLimit;
}
function resetQuiz() {
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
    availableQuestions = [];
}
function tryAgain() {
    //console.log(email);
    //console.log(password);
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    resetQuiz();
    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
}
function goToHome() {
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
    resetForm();
}
function startQuiz1() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    if (email === "") {
        alert("Enter Your Email-id");
        return false;
    }
    if (password === "") {
        alert("Enter Your Password")
        return false;
    }
    let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email)) {
        alert("Enter Valid Email");
        return;
    }
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
}
window.onload = function () {
    homeBox.querySelector(".total-question").innerHTML = "" + questionLimit;
}