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
var arrayResp = new Array();

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  arrayResp = 0;
  loadQuestion();
};

function verificaArray(arrayResp,arrayComp){
  var result;
  for(var i=0; i<arrayResp.length; i++){
      if(arrayResp[i] !== arrayComp[i]){
        return false;
      }
  }
  return true;
}

function verificaPais(arrayResp){
    var result;
  
      if(verificaArray(arrayResp,arrayBr)){
        result = "Brasil";
      }else if(verificaArray(arrayResp,arraySu)){
        result = "Suriname";
      }else if(verificaArray(arrayResp,arrayGui)){
        result = "Guiana";
      }else if(verificaArray(arrayResp,arrayVe)){
        result = "Venezuela";
      }else if(verificaArray(arrayResp,arrayCo)){
        result = "Colômbia";
      }else if(verificaArray(arrayResp,arrayEq)){
        result = "Equador"; 
      }else if(verificaArray(arrayResp,arrayPe)){
        result = "Peru";
      }else if(verificaArray(arrayResp,arrayBo)){
        result = "Bolívia";
      }else if(verificaArray(arrayResp,arrayPa)){
        result = "Paraguai";
      }else if(verificaArray(arrayResp,arrayChi)){
        result = "Chile";  
      }else if(verificaArray(arrayResp,arrayArg)){
        result = "Argentina";  
      }else if(verificaArray(arrayResp,arrayUru)){
        result = "Uruguai"  
      }else{
        result = " não foi encontrado";
      }
      return result;

}



function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    arrayResp[currentIndex]= "V";
  }else{
    arrayResp[currentIndex] = "F";
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  var pais = verificaPais(arrayResp);
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