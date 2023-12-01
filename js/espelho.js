let btn = document.getElementById('btn')
let divfinal = document.getElementById('gastos')
let divporcentagem = document.getElementById('porcentagem')


function selectModelos (){

    let selectesp = document.querySelector('#espessura')
    let optionValueE = selectesp.options[selectesp.selectedIndex]

    let valorE = optionValueE.value
    //console.log (valorE)

    let selectmod = document.querySelector('#mod')
    let optionValueM = selectmod.options[selectmod.selectedIndex]

    let valorM = optionValueM.value
    //console.log (valorM)

    let selectmar = document.querySelector('#marca')
    let optionValueMa = selectmar.options[selectmar.selectedIndex]

    let valorMa = optionValueMa.value
    //console.log (valorMa)

//ESPESSURA = 1-2-3-4
//MODELOS = 5-6-7
//MARCA = 8-9-10
let result
   if (valorM == 0){
    alert('Por favor, preencha todos os campos')
}
if (valorMa == 0){
    alert('Por favor, preencha todos os campos')
}
if (valorE == 0){
    alert('Por favor, preencha todos os campos')
}
    if (valorM == 5){
        if (valorE == 1){
            if (valorMa == 8){
                result = 1.0
            }
            if (valorMa == 9){
                result = 2.0
            }
            if (valorMa == 10){
                result = 3.0
            }
        }
        if (valorE == 2){
            if (valorMa == 8){
                result = 117.92
            }
            if (valorMa == 9){
                result = 125.07
            }
            if (valorMa == 10){
                result = 111.12
            }
        }
        if (valorE == 3){
            if (valorMa == 8){
                result = 4.0
            }
            if (valorMa == 9){
                result = 6.0
            }
            if (valorMa == 10){
                result = 5.0
            }
        }
        if (valorE == 4){
            if (valorMa == 8){
                result = 8.0
            }
            if (valorMa == 9){
                result = 9.0
            }
            if (valorMa == 10){
                result = 11.0
            }
        }
       
    }
    if (valorM == 6){
        if (valorE == 1){
            if (valorMa == 8){
                result = 234
            }
            if (valorMa == 9){
                result = 43
            }
            if (valorMa == 10){
                result = 33
            }
        }
        if (valorE == 2){
            if (valorMa == 8){
                result = 132.09
            }
            if (valorMa == 9){
                result = 137.97
            }
            if (valorMa == 10){
                resul = 121.61
            }
        }
        if (valorE == 3){
            if (valorMa == 8){
                result = 342
            }
            if (valorMa == 9){
                result = 56
            }
            if (valorMa == 10){
                result = 76
            }
        }
        if (valorE == 4){
            if (valorMa == 8){
                result = 645
            }
            if (valorMa == 9){
                result = 456
            }
            if (valorMa == 10){
                result = 534
            }
        }
       
    }
    if (valorM == 7){
        if (valorE == 1){
            if (valorMa == 8){
                result = 563
            }
            if (valorMa == 9){
                result = 345
            }
            if (valorMa == 10){
                result = 345
            }
        }
        if (valorE == 2){
            if (valorMa == 8){
                result = 145.93
            }
            if (valorMa == 9){
                result = 154.76
            }
            if (valorMa == 10){
                result = 137.51
            }
        }
        if (valorE == 3){
            if (valorMa == 8){
                result = 345
            }
            if (valorMa == 9){
                result = 656
            }
            if (valorMa == 10){
                result =567
            }
        }
        if (valorE == 4){
            if (valorMa == 8){
                result = 834
            }
            if (valorMa == 9){
                result = 5643
            }
            if (valorMa == 10){
                result = 231
            }
        }
       
    }
   console.log(result)
}
btn.addEventListener('click', selectModelos)