const data = [
    {
        q: "What is the capital of India?",
        a: "New Delhi",
        opt: ["Jaipur", "New Delhi", "Ajmer", "Mumbai"]
    },
    {
        q: "What is the capital of Pakistan?",
        a: "Islamabad",
        opt: ["Multan", "Karachi", "Rawalpindi", "Islamabad"]
    },
    {
        q: "What is the capital of Afghanistan?",
        a: "Kabul",
        opt: ["Kabul", "Kandhar", "Zaranj", "Sangin"]
    },
    {
        q: "What is the capital of Japan?",
        a: "Tokyo",
        opt: ["Kyoto", "Nagasaki", "Tokyo", "Hiroshima"]
    },
    {
        q: "What is the capital of China?",
        a: "Beijing",
        opt: ["Beijing", "Chengdu", "Shanghai", "Chonginq"]
    },
]

const quiz = document.querySelector(".quiz")
const timer = document.querySelector(".timer")
const options = document.querySelector(".options")
const option = document.querySelectorAll(".option")
const score = document.querySelector(".score span")

const questions = document.querySelector(".questions")
const btn = document.querySelector(".nextbtn")

let count = 5;
let questionNumber = 0;
let ques=[]

let userScore = 0
random()
printQuestionsAndOptions();



let time = setInterval(() => {
    if (count === 1) {
       
        if (questionNumber >= data.length - 1) {

            scoreQuiz()
            return
        }
        count = 5;
        timer.textContent = 5;
        questionNumber++;
        random()
         printQuestionsAndOptions()
         

    }
    else {
        count--;
        timer.textContent = count;
    }
}, 1000);


function printQuestionsAndOptions() {

    // questionNumber=randomNumber()
    questions.innerText = ques[questionNumber].q;
    option.forEach((opt, index) => {
        opt.innerText = ques[questionNumber].opt[index];
        opt.style.backgroundColor = "lightBlue";
        opt.style.pointerEvents = "auto";
    });
}


option.forEach((opt) => {
    opt.addEventListener("click", () => {

        option.forEach((o) => (o.style.pointerEvents = "none"));

        if (opt.innerText === ques[questionNumber].a) {
            opt.style.backgroundColor = "green";
            userScore++;
            score.textContent = userScore;
        } else {

            opt.style.backgroundColor = "red";
            option.forEach((o) => {
                if (o.innerText === ques[questionNumber].a) {
                    o.style.backgroundColor = "green";
                }
            });
        }
    });
});

btn.addEventListener("click", () => {
    if (questionNumber >= data.length-1) {
        scoreQuiz();
        return;
    }
    else{
    count = 5;
    timer.textContent = 5;
    questionNumber++;
    random()
    printQuestionsAndOptions();
    }
});


function scoreQuiz() {
    clearInterval(time);
    timer.style.display = "none";
    options.style.display = "none";
    questions.style.display = "none";
    quiz.appendChild(score.parentElement);
    score.innerHTML = userScore
    btn.style.display = "none";
}
 
function random() {
    let randomQuestion= Math.floor(Math.random() * data.length);
    if(ques.includes(data[randomQuestion])){
    return random()
}
else{
    ques.push(data[randomQuestion])
}
}

