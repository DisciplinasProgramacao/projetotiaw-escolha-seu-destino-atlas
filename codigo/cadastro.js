class Validator {
    constructor() {
        this.validations = [
            'data-min-length',
        ]
    }
    //inciar a validação de todos os campos
    validate(form) {

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

       if(input.length < minValue){
        console.log(errorMessage + " sdasdasd");
       }
    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

submit.addEventListener('click', function (e) {
    e.preventDefault();

    validator.validate(form);

});