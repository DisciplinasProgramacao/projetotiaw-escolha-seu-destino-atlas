const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";
// import paises from "./paises.js";

var arrayBr = ["F","F","F","F","F","V","F","V","F","F"];
var arraySu = ["V","V","F","F","V","F","F","V","F","F"];
var arrayGui = ["V","V","F","V","F","F","F","V","F","F"];
var arrayVe = ["V","V","F","F","F","F","F","V","F","F"];
var arrayCo = ["V","V","V","F","F","F","F","V","F","F"];
var arrayEq = ["F","F","F","F","F","V","F","V","F","V"];
var arrayPe = ["F","V","F","F","F","F","F","V","F","F"];
var arrayBo = ["F","V","F","F","F","F","F","F","V","F"];
var arrayPa = ["F","V","F","F","F","F","F","F","F","F"];
var arrayChi = ["F","F","F","F","F","F","F","V","F","F"];
var arrayArg = ["F","V","F","F","F","V","F","V","F","F"];
var arrayUru = ["F","V","F","F","F","V","V","V","F","F"];

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
      if(arrayResp[i] === arrayBr[i]){
        result = "Brasil";
      }else if(arrayResp[i] === arraySu[i]){
        result = "Suriname";
      }else if(arrayResp[i] === arrayGui[i]){
        result = "Guiana";
      }else if(arrayResp[i] === arrayVe[i]){
        result = "Venezuela";
      }else if(arrayResp[i] === arrayCo[i]){
        result = "Colômbia";
      }else if(arrayResp[i] === arrayEq[i]){
        result = "Equador"; 
      }else if(arrayResp[i] === arrayPe[i]){
        result = "Peru";
      }else if(arrayResp[i] === arrayBo[i]){
        result = "Bolívia";
      }else if(arrayResp[i] === arrayPa[i]){
        result = "Paraguai";
      }else if(arrayResp[i] === arrayChi[i]){
        result = "Chile";  
      }else if(arrayResp[i] === arrayArg[i]){
        result = "Argentina";  
      }else if(arrayResp[i] === arrayUru[i]){
        result = "Uruguai"  
      }else{
        result = " não foi encontrado";
      }
  }
}

var pais = verificaPais(arrayResp);

function nextQuestion(e,arrayResp) {
  if (e.target.getAttribute("data-correct") === "true") {
    arrayResp = "V";
  }else{
    arrayResp = "F";
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
