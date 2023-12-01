let btn = document.getElementById('btn')
let divgast = document.getElementById('gastos')
let maodeobra = document.getElementById('mobra')
let divporce = document.getElementById('porcentagem')

let vaoInc1750 = 713.70
let vaoverd1750 = 1032.02
let vaofum1750 = 1046.56

let totalbox;
let kit;  

function selectModeloKit() {
    let largura = parseFloat(document.getElementById('largura').value)
    let select = document.querySelector('#modelkit')  
    let optionValuea = select.options[select.selectedIndex]

    let valorb = optionValuea.value
    console.log(valorb)

    if (valorb == 1 && largura <= 1750) {
        kit = 148.31
    } else if (valorb == 2  && largura <= 1750) {
        kit = 169.69
    } else if (valorb == 3 && largura <= 1750){
        kit = 178.62
    } else if (valorb == 4 && largura <= 1750) {
        kit = 267.85
    } else {
        kit = 0;  // Defina um valor padrão se nenhum caso for correspondido
    }
}

function selectCorVidro() {
    let largura = parseFloat(document.getElementById('largura').value)
    let select = document.querySelector('#corVidro')
    let optionValuea = select.options[select.selectedIndex]

    let valora = optionValuea.value
    console.log(valora)

    if (valora == 1 && largura <= 1750) {
        totalbox = vaoInc1750
    } else if (valora == 2 && largura <= 1750) {
        totalbox = vaofum1750
    } else if (valora == 3 && largura <= 1750) {
        totalbox = vaoverd1750
    } else {
        totalbox = 0;  // Defina um valor padrão se nenhum caso for correspondido
    }
}

function calcular() {
    let silicone = 13.87
   selectCorVidro(); 
   selectModeloKit(); // Certifique-se de chamar esta função antes de calcular o total
    totalorcamento = totalbox + silicone + kit

   console.log(divgast)
    divgast.innerHTML = `${(totalorcamento).toFixed(2)}`
}

function porcentagem (){
    let mobra = parseFloat(document.getElementById('mobra').value)

    let calculo = totalorcamento + mobra

   let porcento = (calculo * 15)/100

   let resultado = calculo + porcento

console.log (mobra, calculo, porcento)

   divporce.innerHTML = `R$${(resultado).toFixed(2)}`
}

btn.addEventListener('click', calcular)
btn.addEventListener('click',porcentagem)

function apagar (){
    let select = document.querySelector('#modelkit')
     let vidro = document.querySelector('#corVidro')   

     largura.value = ''
     select.value = 'Selecione'
     vidro.value = 'Selecione'
     maodeobra.value = ''
     divgast.innerHTML = null
     divporce.innerHTML = null
   

 }
