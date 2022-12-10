let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')
logado.innerHTML = `Olá, ${userLogado.firtsname}!`

let emailLogado = JSON.parse(localStorage.getItem('emailLogado'))
let email = document.querySelector('#email')
email.innerHTML = `Email: ${emailLogado.email}`

let numberLogado = JSON.parse(localStorage.getItem('numberLogado'))
let number = document.querySelector('#number')
number.innerHTML = `Celular: ${numberLogado.number}`

let countryLogado = JSON.parse(localStorage.getItem('countryLogado'))
let country = document.querySelector('#country')
country.innerHTML = `País: ${countryLogado.country}`





