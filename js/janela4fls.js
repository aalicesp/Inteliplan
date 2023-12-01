let btn = document.getElementById('btn')
let divfinal = document.getElementById('gastos')
let divporcentagem = document.getElementById('porcentagem')


// abrindo função para captura do valor no select
function selectFechadura (){

    let select = document.querySelector('#select')
    let optionValue = select.options[select.selectedIndex]

    let valor = optionValue.value;
    console.log (valor)

   //Bate Fecha V/V R$: 14,83 ou Fechadura 67,49

   if (valor == 0){
    alert('Por favor, preencha todos os campos')
}
    if (valor == 1){

        fechadura = 14.83
       
    }
    if (valor == 2){
        fechadura = 67.49
    }
    if(valor == 3) {
        fechadura = 0
    }

}
selectFechadura();

//abrindo select adesivo 

function selectAdesivo(){

    let largura = parseFloat(document.getElementById('largura').value)
    larguraf = largura/1000 

    let select = document.querySelector('#adesivo')

    let optionValuea = select.options[select.selectedIndex]

    let valora = optionValuea.value
    console.log(valora)

    if (valora == 0){
        alert('Por favor, preencha todos os campos')
    }
    if (valora == 1){
        adesivo = 16.00
    }
    if (valora == 2){
        adesivo = 20.00
    }
    if (valora == 3){
        adesivo = 18.50
    }
    if (valora == 4){
        adesivo = 29.50
    }
    if (valora == 5){
        adesivo = 19.00
    }
    if (valora == 6){
        adesivo = 25.00
    }
    if (valora == 7){
        adesivo = 0
    }

    areavidro = larguraf + 0.3
    areaadesivo = areavidro * adesivo
}
selectAdesivo()


function calcular (){
    let altura = parseFloat(document.getElementById('altura').value)
    let largura = parseFloat(document.getElementById('largura').value)
    //console.log(altura, largura)
    let larguraf = (largura/1000).toFixed(3) 
    let alturaf= (altura/1000).toFixed(3)
    let vidro8mm = 130.80
    let silicone = 13.87
    //let fechadura = 14.83 //Janela 4Fls pode ser Bate Fecha V/V R$: 14,83 ou Fechadura 67,49
    let metrodevidro = (alturaf * larguraf).toFixed(4)
    let totalvidro = metrodevidro * vidro8mm
    let total = totalvidro + fechadura + silicone + areaadesivo

    if (largura <= 1200){
        if (altura <=1000){
            total_janela = total + 115.83
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 122.08
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 135.21
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 148.34
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 161.48
        }
     
    }

    if (largura >= 1201 && largura <=1400){
        if (altura <=1000){
            total_janela = total + 127.22
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 133.47
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 146.27
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 159.41
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 172.54
        }
     
    }

    if (largura >= 1401 && largura <=1500){
        if (altura <=1000){
            total_janela = total + 132.92
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 139.16
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 151.81
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 164.94
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 178.07
        }
     
    }

    if (largura >= 1501 && largura <=1600){
        if (altura <=1000){
            total_janela = total + 138.61
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 144.85
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 157.34
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 170.47
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 183.60
        }
      
    }

    if (largura >= 1601 && largura <=1800){
        if (altura <=1000){
            total_janela = total + 150
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 156.24
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 168.73
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 181.53
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 194.67
        }
      
    }

    if (largura >= 1801 && largura <=2000){
        if (altura <=1000){
            total_janela = total + 161.39
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 167.63
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 180.11
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 192.60
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 205.73
        }
      
    }

    if (largura >= 2001 && largura <=2200){
        if (altura <=1000){
            total_janela = total + 172.77
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 179.02
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 191.50
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 203.99
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 216.80
        }
     
    }

    if (largura >= 2201 && largura <=2500){
        if (altura <=1000){
            total_janela = total + 189.86
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 196.10
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 208.58
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela = total + 221.07
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 233.55
        }
      
    }

    if (largura >= 2501 && largura <=2800){
        if (altura <=1000){
            total_janela = total + 206.94
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 213.18
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 225.67
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 238.15
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 250.63
        }
      
    }

    if (largura >= 2801 && largura <=3000){
        if (altura <=1000){
            total_janela = total + 218.33
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 224.57
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 237.05
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 249.54
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 262.02
        }
      
    }

    if (largura >= 3001 && largura <=3500){
        if (altura <=1000){
            total_janela = total + 246.80
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 253.04
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 265.52
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 278.01
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 290.49
        }
      
    }

    if (largura >= 3501 && largura <=4000){
        if (altura <=1000){
            total_janela = total + 275.27
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 281.51
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 293.99
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 306.48
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 318.96
        }
      
    }

    if (largura >= 4001 && largura <=4500){
        if (altura <=1000){
            total_janela = total + 303.74
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 309.98
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 322.46
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 334.95
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 347.43
        }
     
    }

    if (largura >= 4501 && largura <=5000){
        if (altura <=1000){
            total_janela = total + 332.21
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 338.45
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 350.93
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 363.42
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 375.90
        }
      
    }

    if (largura >= 5001 && largura <=6000){
        if (altura <=1000){
            total_janela = total + 389.15
        }
        else if(altura >=1001 && altura <= 1200){
            total_janela = total + 395.39
        }
        else if (altura >= 1201 && altura <= 1600){
            total_janela = total + 407.87
        }
        else if (altura >= 1601 && altura <= 2000){
            total_janela= total + 420.36
        }
        else if (altura >= 2001 && altura <= 2400){
            total_janela = total + 432.84
        }
       
    }

    if (largura > 6000){
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
    //console.log(metrodevidro, totalvidro, total )

    
    //console.log (fechadura)
    //console.log (total_janela)
    divfinal.innerHTML = `R$${(total_janela).toFixed(2)}`
   

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