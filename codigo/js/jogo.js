const question = document.querySelector(".pergunta");
const answers = document.querySelector(".answers");
const textReiniciar = document.querySelector(".reiniciar span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnReinicia = document.querySelector(".finish button");

var arrayBr = new Array ("F","F","F","F","F","V","F","V","F","F");
var arraySu = new Array ("V","V","F","F","V","F","F","V","F","F");
var arrayGui = new Array ("V","V","F","V","F","F","F","V","F","F");
var arrayVe = new Array ("V","V","F","F","F","F","F","V","F","F");
var arrayCo = new Array ("V","V","V","F","F","F","F","V","F","F");
var arrayEq = new Array ("F","F","F","F","F","V","F","V","F","V");
var arrayPe = new Array ("F","V","F","F","F","F","F","V","F","F");
var arrayBo = new Array ("F","V","F","F","F","F","F","F","V","F");
var arrayPa = new Array ("F","V","F","F","F","F","F","F","F","F");
var arrayChi = new Array ("F","F","F","F","F","F","F","V","F","F");
var arrayArg = new Array ("F","V","F","F","F","V","F","V","F","F");
var arrayUru = new Array ("F","V","F","F","F","V","V","V","F","F");

import questions from "../js/questions.js";

let index = 0;
var arrayResp = [];

btnReinicia.onclick = () => {
    content.getElementsByClassName.display = "flex";
    contentFinish.getElementsByClassName.display = "none";

    index=0;
    loadQuestion();
};

function nextQuestion(e) {
    if(e.target.getAttribute("data-correct") === "true") {
        arrayResp [index] = 'V';
    }else{
        arrayResp [index] = 'F';
    }
    if(index < questions.length -1 ){
        index++;
        loadQuestion();
    }else{
        finish()
    }
}

function verificaPais(arrayResp){
    for(var i=0; i<arrayResp; i++){
        if(arrayResp[i] === arrayBr[i]){
            return arrayBr;
        }else if(arrayResp[i] === arraySu[i]){
            return arraySu;
        }else if(arrayResp[i] === arrayGui[i]){
            return arrayGui;
        }else if(arrayResp[i] === arrayVe[i]){
            return arrayVe;
        }else if(arrayResp[i] === arrayCo[i]){
            return arrayCo;
        }else if(arrayResp[i] === arrayEq[i]){
            return arrayEq;
        }else if(arrayResp[i] === arrayPe[i]){
            return arrayPe;
        }else if(arrayResp[i] === arrayBo[i]){
            return arrayBo;
        }else if(arrayResp[i] === arrayPa[i]){
            return arrayPa;
        }else if(arrayResp[i] === arrayChi[i]){
            return arrayChi;
        }else if(arrayResp[i] === arrayArg[i]){
            return arrayArg;
        }else if(arrayResp[i] === arrayUru[i]){
            return arrayUru;
        }
    }
}

function finish() {
    textReiniciar.innerHTML = `Seu país é ${verificaPais}`;
    content.getElementsByClassName.display = 'none';
    contentFinish.style.display = "flex";
}

function loadQuestion(){
    const item = question[index];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `<button class ="answer" data-correct="${answer.correct}">
            ${answer.option}
        </button>
        `;
        
        answers.appendChild(div);
    });
    
    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click",nextQuestion);
    });

}
loadQuestion();