var numeros = []

function Adicionar() {
    var nu =  document.getElementById('txtnu')
    var tab = document.getElementById('txtcon');
    var n = Number(nu.value)
    nu.value = ''
    nu.focus()
    numeros.push(n)
    if (n < 1 || n > 100 || n == 0) {
        alert('[ERROR] Insira um valor entre 1 e 100');
    } else {
        var item = document.createElement('option')
        tab.appendChild(item)
        item.innerHTML = `Valor ${n} adicionado`
    }

}

function Finalizar() {
    var msg = document.getElementById('msg')

    if(numeros.length === 0){
        alert('[ERROR] Nenhum valor inserido')
    }
    
    var maior = numeros[0]
    var menor = numeros [0]
    for(i = 0; i < numeros.length; i++){
        if(numeros[i] > maior){
            maior = numeros[i]
        }
        if(numeros[i] < menor){
            menor = numeros[i]
        }
    }
   
    var soma = 0
    for(var s = 0; s < numeros.length; s++){
        soma += numeros[s]
    }

    var media = soma / numeros.length

    msg.innerHTML = `Ao todo temos ${numeros.length} números cadastrados.<br>
                    O maior valor é ${maior}<br>
                    O menor valor é ${menor}<br>
                    A soma dos valores é ${soma}<br>
                    A resultado da média é ${media.toFixed(2)}`
}