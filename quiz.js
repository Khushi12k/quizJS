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
const btn=document.querySelector(".nextbtn")

let count = 5;
let questionNumber = 0;

printQuestionsAndOptions();

let time = setInterval(() => {
    if (count === 1) {
        if (questionNumber === data.length) {
            clearInterval(time);
            timer.style.display = "none"
            options.style.display = "none"
            questions.style.display = "none"
        }
        count = 5;
        timer.textContent = 5;
        questionNumber++;
        printQuestionsAndOptions()

    } else {
        count--;
        timer.textContent = count;
    }
}, 1000);


function printQuestionsAndOptions() {
    questions.innerText = data[questionNumber].q
    option.forEach(
        (opt, index) => (opt.innerText = data[questionNumber].opt[index])
)
 option.forEach((opt) => {
 opt.style.backgroundColor = "lightBlue";
 opt.style.pointerEvents="auto"
        
     opt.addEventListener("click", () => {
       option.forEach((opt) => {
             opt.style.pointerEvents="none"})

            if (opt.innerText=== data[questionNumber].a) {
                opt.style.backgroundColor = "green"
                
            }
            else {
                opt.style.backgroundColor = "red"
            
                option.forEach((o)=>{
                     if (o.innerText === data[questionNumber].a) {
                     o.style.backgroundColor = "green"
                     
            }
                })
            }
        })

    })
   

  
}
 btn.addEventListener("click", ()=>{
        // counter=5;
        timer.textContent=5;
        questionNumber++;
        printQuestionsAndOptions()
     })






