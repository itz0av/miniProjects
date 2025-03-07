document.addEventListener("DOMContentLoaded",()=>{
const ques = document.getElementById("Question");
const quesBox = document.getElementById("question-box");
const optionBox = document.getElementById("options-name");
const scoreDiv = document.getElementById("score-div");
const score = document.getElementById("score");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("Restart-btn");

const quizQuestions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Text Making Language"
      ],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which programming language is used for web development?",
      options: [
        "Python",
        "C++",
        "JavaScript",
        "Java"
      ],
      correctAnswer: "JavaScript"
    },
    // {
    //   question: "Which company developed React.js?",
    //   options: [
    //     "Google",
    //     "Facebook",
    //     "Microsoft",
    //     "Apple"
    //   ],
    //   correctAnswer: "Facebook"
    // },
    // {
    //   question: "Which CSS framework is utility-first?",
    //   options: [
    //     "Bootstrap",
    //     "Foundation",
    //     "TailwindCSS",
    //     "Materialize"
    //   ],
    //   correctAnswer: "TailwindCSS"
    // },
    // {
    //   question: "What does SQL stand for?",
    //   options: [
    //     "Structured Query Language",
    //     "Simple Query Language",
    //     "Structured Question Language",
    //     "Sequential Query Language"
    //   ],
    //   correctAnswer: "Structured Query Language"
    // },
    // {
    //   question: "Which of the following is a NoSQL database?",
    //   options: [
    //     "MongoDB",
    //     "MySQL",
    //     "PostgreSQL",
    //     "Oracle"
    //   ],
    //   correctAnswer: "MongoDB"
    // },
    // {
    //   question: "What is the extension of a JavaScript file?",
    //   options: [
    //     ".js",
    //     ".java",
    //     ".jsx",
    //     ".json"
    //   ],
    //   correctAnswer: ".js"
    // },
    // {
    //   question: "Which HTTP method is used to create data?",
    //   options: [
    //     "GET",
    //     "POST",
    //     "PUT",
    //     "DELETE"
    //   ],
    //   correctAnswer: "POST"
    // },
    // {
    //   question: "What does API stand for?",
    //   options: [
    //     "Application Programming Interface",
    //     "Application Process Integration",
    //     "Automated Program Interaction",
    //     "Applied Programming Interface"
    //   ],
    //   correctAnswer: "Application Programming Interface"
    // },
    // {
    //   question: "Which of the following is used to style web pages?",
    //   options: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Node.js"
    //   ],
    //   correctAnswer: "CSS"
    // }
  ];
let indexOfQuestion = 0;
let rightQuestions = 0;

startBtn.addEventListener('click', showQuestions)
nextBtn.addEventListener('click', () => {
  indexOfQuestion++;
  if (indexOfQuestion < quizQuestions.length) {
    showQuestions();
  } else {
    showResult();
  }
})
restartBtn.addEventListener("click",()=>{
  indexOfQuestion = 0;
  rightQuestions = 0;
  scoreDiv.classList.add("hidden");
  quesBox.classList.remove("hidden");
  // restartBtn.classList.add("hidden");
  showQuestions();
  })
function showQuestions() {
  startBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");
  ques.textContent = quizQuestions[indexOfQuestion].question;
  //using a "for loop" 
    // let optionNo = quizQuestions[indexOfQuestion].options;
    // optionBox.innerHTML = ""; // clear previous options if needed
    // for (let i = 0; i < optionNo.length; i++) {
    //   // console.log(optionNo)
    //   const optionLi = document.createElement("li");
    //   optionLi.innerText = optionNo[i];
    //   optionBox.appendChild(optionLi);
    //   // console.log(optionNo[i]);
    // }
  //using with forEach
    optionBox.innerHTML ="";
    quizQuestions[indexOfQuestion].options.forEach((option)=>{
      const li = document.createElement("li");
      li.innerText = option;
      li.addEventListener("click", ()=> selectOption(option));
      optionBox.appendChild(li);
    })
    
  }
  
function selectOption(option){
  const seletedOption = quizQuestions[indexOfQuestion].correctAnswer;
  console.log(seletedOption);
  if(option === seletedOption){
    rightQuestions++;
    console.log("RightAns:", rightQuestions); 
  }else{
    console.log("wrongQuestion")
  }

  nextBtn.classList.remove("hidden");
}
function showResult(){
  scoreDiv.classList.remove("hidden");
  quesBox.classList.add("hidden");
  nextBtn.classList.add("hidden");
  restartBtn.classList.remove("hidden")
  score.innerContent =` ${rightQuestions} out of ${quizQuestions.length}`
}

})