
let btn = document.getElementById('btn')
let divfinal = document.getElementById('gastos')
let divporcentagem = document.getElementById('porcentagem')




// abrindo função para captura do valor no select
function selectFechadura (){

    let select = document.querySelector('#select')
    let optionValuef = select.options[select.selectedIndex]

    let valorf = optionValuef.value
    console.log (valorf)

   //Bate Fecha V/V R$: 14,83 ou Fechadura 67,49

   if (valorf == 0){
    alert('Por favor, preencha todos os campos')
}
    if (valorf == 1){

        fechadura = 14.83
       
    }
    if( valorf == 2) {
        fechadura = 67.49
    }
    if (valorf == 3){
        fechadura = 0
    }
}
selectFechadura()


function selectAdesivo(){
    
     let largura = parseFloat(document.getElementById('largura').value)

     larguraf = largura/1000 
    

    let select = document.querySelector('#adesivo')
    let optionValuea = select.options[select.selectedIndex]

    let valora = optionValuea.value

    console.log (valora)
    if (valora == 0){
        alert('Por favor, preencha todos os campos')
    }

    if (valora ==1 ){
     adesivo = 16.00
     }
 if (valora == 2 ){
      adesivo = 20.00
     }
 if( valora == 3){
      adesivo = 18.50
     }
 if (valora == 4){
      adesivo = 29.50
     }
 if (valora == 5){
      adesivo = 19.00
     }
if (valora == 6) {
      adesivo = 25.00
     }
     if (valora == 7){
        adesivo = 0
     }

      areadovidro = larguraf + 0.3
      areaadesivo = areadovidro * adesivo
//console.log(areaadesivo)
}
selectAdesivo();


function calcular (){
    
    let altura = parseFloat(document.getElementById('altura').value)
    let largura = parseFloat(document.getElementById('largura').value)
    //console.log(altura, largura)
    let larguraf = (largura/1000).toFixed(3) 
    let alturaf= (altura/1000).toFixed(3)
    let vidro8mm = 130.80
    let silicone = 13.87
    console.log (larguraf, alturaf)
   // let fechadura = 9.75 // Janela 2Fls pode ser Bate Fecha V/A: R$: 9,75 ou fechadura R$:49,07
    let metrodevidro = (alturaf * larguraf).toFixed(4)
    let totalvidro = metrodevidro * vidro8mm
    let total = totalvidro + fechadura + silicone + areaadesivo

    if (largura <= 1000){
        if (altura <=1000){
            total_janela = total + 86.05
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 90.37
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 99
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 107.63
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 116.27
        }
      
    }

    if (largura >= 1001 && largura <=1200){
        if (altura <=1000){
            total_janela = total + 97.44
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 101.43
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 110.06
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 118.70
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 127.33
        }
    }

    if (largura >= 1201 && largura <=1400){
        if (altura <=1000){
            total_janela = total + 108.83
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 112.82
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 121.13
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 129.76
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 138.40
        }
    
    }

    if (largura >= 1401 && largura <=1500){
        if (altura <=1000){
            total_janela = total + 114.52
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 118.51
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 126.66
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 135.29
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 143.93
        }
    
    }

    if (largura >= 1501 && largura <=1600){
        if (altura <=1000){
            total_janela = total + 120.21
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 124.21
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 132.19
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 140.83
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 149.46
        }
    
    }

    if (largura >= 1601 && largura <=1800){
        if (altura <=1000){
            total_janela = total + 131.60
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 135.59
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 143.58
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 151.89
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 160.52
        }
      
    }

    if (largura >= 1801 && largura <=2000){
        if (altura <=1000){
            total_janela = total + 142.99
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 146.98
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 154.97
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 162.95
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 171.59
        }
    
    }

    if (largura >= 2001 && largura <=2200){
        if (altura <=1000){
            total_janela = total + 154.38
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 158.37
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 166.36
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela = total + 174.34
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 182.65
        }
      
    }

    if (largura >= 2201 && largura <=2500){
        if (altura <=1000){
            total_janela = total + 171.46
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 175.45
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 183.44
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 191.42
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 199.41
        }

    }

    if (largura >= 2501 && largura <=2800){
        if (altura <=1000){
            total_janela = total + 188.54
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 192.53
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 200.52
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 208.51
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 216.49
        }
     
    }

    if (largura >= 2801 && largura <=3000){
        if (altura <=1.000){
            total_janela = total + 199.93
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 203.92
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 211.91
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 219.89
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 227.88
        }
   
    }

    if (largura >= 3001 && largura <=3500){
        if (altura <=1000){
            total_janela = total + 228.40
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 232.39
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 240.38
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 248.36
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 256.35
        }
      
    }

    if (largura >= 3501 && largura <=4000){
        if (altura <=1000){
            total_janela = total + 256.87
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 260.86
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 268.85
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 276.83
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 284.82
        }
   
    }

    if (largura > 4000){
        alert('Por favor, informe corretamente os valores')
    }
    if (largura <= 0 ){
        alert('Por favor, informe corretamente os valores')
    }
    if (altura > 2400){
        alert('Por favor, informe corretamente os valores')
    }
    if (altura <= 0 ){
        alert('Por favor, informe corretamente os valores')
    }


    
   // console.log(metrodevidro, totalvidro, total )

    divfinal.innerHTML = `R$${(total_janela).toFixed(2)}`
    //console.log (fechadura, total_janela)

  //  console.log(`O valor da janela é de ${total}`)
}
function porcentagem (){
    let mobra = parseFloat(document.getElementById('mobra').value)

    let calculo = total_janela + mobra

   let porcento = (calculo * 15)/100

   let resultado = calculo + porcento

console.log (mobra, calculo, porcento)

   divporcentagem.innerHTML = `R$${(resultado).toFixed(2)}`
}

btn.addEventListener('click', calcular)
btn.addEventListener('click',porcentagem)

function apagar (){
    let select = document.querySelector('#kit')
    let fecha = document.querySelector('#select')
    let adesivo = document.querySelector('#adesivo')
   

    largura.value = ''
    altura.value = ''
    select.value = 'Selecione'
    adesivo.value = 'Selecione'
    fecha.value = 'Selecione'
    mobra.value = ''
    divfinal.innerHTML = null
    divporcentagem.innerHTML = null
   

}
