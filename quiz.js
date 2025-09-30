const data=[
    {
        q:"What is the capital of India?",
        a: "New Delhi",
        opt:["Jaipur", "New Delhi", "Ajmer", "Mumbai"]
    },
     {
        q:"What is the capital of Pakistan?",
        a:"Islamabad",
        opt:["Multan", "Karachi", "Rawalpindi", "Islamabad"]
    },
     {
        q:"what is the capital of india?",
        a:"new delhi",
        opt:["jaipur","mumbai","new delhi","pune"]
    },
     {
        q:"what is the capital of india?",
        a:"new delhi",
        opt:["jaipur","mumbai","new delhi","pune"]
    },
     {
        q:"what is the capital of india?",
        a:"new delhi",
        opt:["jaipur","mumbai","new delhi","pune"]
    },
]

const quiz=document.querySelector(".quiz")
const timer=document.querySelector(".timer")
const options=document.querySelector(".options")
const option=document.querySelectorAll(".option")
const score=document.querySelector(".score span")
const questions=document.querySelector(".questions")

let count=5;
let questionNumber=0;

printQuestionsAndOptions();

let time=setInterval(() =>{
if(count===1){
    if(questionNumber===data.length){
        clearInterval(time);
        timer.style.display="none"
        options.style.display="none"
         questions.style.display="none"
    }
    count=5;
    timer.textContent=5;
    questionNumber++;
    printQuestionsAndOptions()

} else{
    count--;
    timer.textContent=count;
}
},1000);


function printQuestionsAndOptions(){
questions.innerText=data[questionNumber].q
option.forEach(
    (opt, index)=>(opt.innerText=data[questionNumber].opt[index])
     
)

option.forEach(opt => {
    opt.style.backgroundColor = "lightBlue"; 

opt.addEventListener("click",()=>{
    if(opt.innerText===data[questionNumber].a){
        opt.style.backgroundColor="red"
    }
    else{
        opt.style.backgroundColor="grey"
    }
})
    
})

}

