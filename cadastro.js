class Validator {
    constructor() {
        this.validations = [
            'data-required',
            'data-min-length',
            'data-max-length',
            'data-email-validate',
            'data-qual',
        ]
    }
    //inciar a validação de todos os campos
    validate(form) {

        //resgata todas as validações
        let currentValidations = document.querySelectorAll('form .error-validation');

        if (currentValidations.length > 0) {
            this.cleanValidations(currentValidations);
        }

        //pegar todos os inputs
        let inputs = form.getElementsByTagName('input');

        //htmlColletion --> array
        let inputsArray = [...inputs];

        //loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function (input) {

            //loop de todas as validações existentes
            for (let i = 0; this.validations.length > i; i++) {
                //verifica se a validação atual existe no input
                if (input.getAttribute(this.validations[i]) != null) {

                    //data-min-legth --> minlegth
                    let method = this.validations[i].replace('data-', '').replace('-', '');

                    //valor do input
                    let value = input.getAttribute(this.validations[i]);

                    //invocar o metodo
                    this[method](input, value);
                }
            }
        }, this);
    }

    //verifica se o input tem um numero minimo de caracteres
    minlength(input, minValue) {
        let inputLength = input.value.length;

        let errorMessage = ` O campo precisa ter pelo menos ${minValue} caracteres`;

        if (inputLength < minValue) {
            this.printMessage(input, errorMessage);
        }
    }

    //verifica se o input passou do limite de caracteres
    maxlength(input, maxValue) {


        let inputLength = input.value.length;

        let errorMessage = ` O campo precisa ter menos que ${maxValue} caracteres`;

        if (inputLength > maxValue) {
            this.printMessage(input, errorMessage);
        }
    }
    //metodo que valida emails
    emailValidate(input) {
        //email@email.com ou email@email.com.br
        let re = /\S+@\S+\.\S+/;
  
        let email = input.value;

        let errorMessage = 'Insira um email válido';

        if (!re.test(email)) {
            this.printMessage(input, errorMessage);
        }

    }

    // metodo para imprimir mensagens de erro na tela
    printMessage(input, msg) {

        //verificar a quantidade de erros
        let errorsQty = input.parentNode.querySelector('.error-validation');
        if (errorsQty == null) {

            let template = document.querySelector('.error-validation').cloneNode(true);

            template.textContent = msg;

            let inputParent = input.parentNode;

            template.classList.remove('template');

            inputParent.appendChild(template);
        }
    }

    //verifica se o input é requerido
    required(input) {

        let inputValue = input.value;
        if (inputValue === '') {
            let errorMessage = `Este campo é obrigatorio`;
            this.printMessage(input, errorMessage);
        }
    }

//verifica se as senhas são iguais
equal(input, inputName){
    let inputToCompare = Document.getElementByName(inputName)[0];

    let errorMessage = ` Este campo precisa ser igual ao ${inputName}`;

    if(input.value != inputToCompare.value){
        this.printMessage(input, errorMessage);
    }
}


    //limpa as validaçoes da tela
    cleanValidations(validations) {
        validations.forEach(el => el.remove());
    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

submit.addEventListener('click', function (e) {
    e.preventDefault();

    validator.validate(form);

});