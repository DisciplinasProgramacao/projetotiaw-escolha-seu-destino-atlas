let firtsname = document.querySelector('#firstname')
let labelFirstname = document.querySelector('#labelFirstname')
let validFirstname = false

let user = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')


let number = document.querySelector('#number')
let labelNumber = document.querySelector('#labelNumber')
let validNumber = false

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')
let validPassword = false

let confirmPassword = document.querySelector('#confirmPassword')
let labelConfirmPassword = document.querySelector('#labelConfirmPassword')
let validConfirmPassword = false

let country = document.querySelector('#country')
let labelCountry = document.querySelector('#labelCountry')
let validCountry = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

firtsname.addEventListener('keyup', () => {
    if (firtsname.value.length <= 2) {
        labelFirstname.setAttribute('Style', 'color: red')
        labelFirstname.innerHTML = '<strong>Nome * Insira no minimo 3 caracteres</strong>'
        validFirstname = false

    } else {
        labelFirstname.setAttribute('Style', 'color: green')
        labelFirstname.innerHTML = '<strong>Nome</strong>'
        validFirstname = true
    }
})

user.addEventListener('keyup', () => {
    if (user.value.length <= 2) {
        labelUser.setAttribute('Style', 'color: red')
        labelUser.innerHTML = '<strong>Usuário * Insira no minimo 3 caracteres</strong>'
        validUser = false      

    } else {
        labelUser.setAttribute('Style', 'color: green')
        labelUser.innerHTML = '<strong>Usuario</strong>'
        validUser = true
    }
})

number.addEventListener('keyup', () => {
    if (number.value.length != 11 ) {
        labelNumber.setAttribute('Style', 'color: red')
        labelNumber.innerHTML = '<strong>Celular* Seu numero deve ter 11 digitos</strong>'
        validNumber = false
    }

    else {
        labelNumber.setAttribute('Style', 'color: green')
        labelNumber.innerHTML = '<strong>Celular</strong>'
        validNumber = true
    }
})

password.addEventListener('keyup', () => {
    if (password.value.length <= 5) {
        labelPassword.setAttribute('Style', 'color: red')
        labelPassword.innerHTML = '<strong>Senha * A senha deve ter no mínimo 6 caracteres</strong>'
        validPassword = false
    } else {
        labelPassword.setAttribute('Style', 'color: green')
        labelPassword.innerHTML = '<strong>Senha</strong>'
        validPassword = true
    }
})

confirmPassword.addEventListener('keyup', () => {
    if (confirmPassword.value != password.value) {
        labelConfirmPassword.setAttribute('Style', 'color: red')
        labelConfirmPassword.innerHTML = '<strong>Senha * As senhas devem ser iguais</strong>'
        validConfirmPassword = false
    } else {
        labelConfirmPassword.setAttribute('Style', 'color: green')
        labelConfirmPassword.innerHTML = '<strong>Confirme sua senha</strong>'
        validConfirmPassword = true
    }
})

country.addEventListener('keyup', () => {
    if (country.value.length <= 2) {
        labelCountry.setAttribute('Style', 'color: red')
        labelCountry.innerHTML = '<strong>País * Insira no minimo 3 caracteres</strong>'
        validCountry = false
    } else {
        labelCountry.setAttribute('Style', 'color: green')
        labelCountry.innerHTML = '<strong>País</strong>'
        validCountry = true
    }
})

function cadastrar() {
   if(validFirstname && validUser && validNumber && validPassword && validConfirmPassword && validCountry){
   let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

   listaUser.push(
    {
        nomeCadastrado: firtsname.value,
        userCadastrado: user.value,
        numeroCadastrado: number.value,
        senhaCadastrada: password.value,
        emailCadastrado: email.value,
        countryCadastrado: country.value
    }
   )
   localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSuccess.setAttribute('Style' , 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.innerHTML = ''
    msgError.setAttribute('Style' , 'display: none')
    
   
    setTimeout(()=>{
        window.location.href = 'http://127.0.0.1:5500/login.html'
    }, 2000)
   } else {
    msgError.setAttribute('Style' , 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('Style' , 'display: none')
   }

}

function entrar(){
   let login = document.querySelector('#login')
   let firtsnameLabel = document.querySelector('#firstnameLabel')

   let senha = document.querySelector('#senha')
   let passwordLabel = document.querySelector('#passwordLabel')

   let msgError = document.querySelector('#msgError')
   let listaUser = []

   let userValid = {
    firtsname: '',
    user: '',
    password: '',
    number: '',
    email: '',
    country: ''
   }

   listaUser = JSON.parse(localStorage.getItem('listaUser'))
   console.log(listaUser)

   listaUser.forEach((item) => {
    if(login.value == item.userCadastrado && senha.value == item.senhaCadastrada){
        userValid = {
            firtsname: item.nomeCadastrado,
            user: item.userCadastrado,
            password: item.senhaCadastrada,
            number: item.numeroCadastrado,
            email: item.emailCadastrado,
            country: item.countryCadastrado
        }
    } 
   })

   if(login.value == userValid.user && senha.value == userValid.password){
     window.location.href = 'http://127.0.0.1:5500/perfil.html'

     localStorage.setItem('userLogado', JSON.stringify(userValid))
     localStorage.setItem('emailLogado', JSON.stringify(userValid))
     localStorage.setItem('numberLogado', JSON.stringify(userValid))
     localStorage.setItem('countryLogado', JSON.stringify(userValid))
   }else{
    alert('senha ou usuário invalido')
    login.focus()

   }
   
}