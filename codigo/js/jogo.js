const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

[
  {
    "Brasil":"FFFFFTFTFF"
  },
  { 
    "Suriname":"TTFFTFFTFF"
  },
  { 
    "Guiana":"TTFTFFFTFF"
  },
  { 
    "Venezuela":"TTFFFFFTFF"
  },
  {
    "Colombia":"TTTFFFFTFF"
  },
  {
    "Equador":"FFFFFTFTFT"    
  },
  {
    "Peru":"FTFFFFFTFF"
  },
  {
    "Bolivia":"FTFFFFFFTF"
  },
  {
    "Paraguai":"FTFFFFFFFF"
  },
  {
    "Chile":"FFFFFFFTFF"
  },
  {
    "Argentina":"FTFFFTFTFF"
  },
  {
    "Uruguai":"FTFFFTTTFF"
  }
]


let currentIndex = 0;
var arrayResp = new Array ();

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  arrayResp = 0;
  loadQuestion();
};

function verificaPais(arrayResp){
  var result;
  for(var i=0; i<arrayResp; i++){
      if(arrayResp[i] === Brasil[i]){
        result = "Brasil";
      }else if(arrayResp[i] === Suriname[i]){
        result = "Suriname";
      }else if(arrayResp[i] === Guiana[i]){
        result = "Guiana";
      }else if(arrayResp[i] === Venezuela[i]){
        result = "Venezuela";
      }else if(arrayResp[i] === Colombia[i]){
        result = "Colômbia";
      }else if(arrayResp[i] === Equador[i]){
        result = "Equador"; 
      }else if(arrayResp[i] === Peru[i]){
        result = "Peru";
      }else if(arrayResp[i] === Bolivia[i]){
        result = "Bolívia";
      }else if(arrayResp[i] === Paraguai[i]){
        result = "Paraguai";
      }else if(arrayResp[i] === Chile[i]){
        result = "Chile";  
      }else if(arrayResp[i] === Argentina[i]){
        result = "Argentina";  
      }else if(arrayResp[i] === Uruguai[i]){
        result = "Uruguai"  
      }else{
        result = " não foi encontrado";
      }
  }
}

var pais = verificaPais(arrayResp);

function nextQuestion(e,arrayResp) {
  if (e.target.getAttribute("data-correct") === "true") {
    arrayResp = true;
  }else{
    arrayResp = false;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `O país que você pensou é ${pais}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
