function Contando() {
    var ini = document.getElementById('txtin')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpasso')
    var res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando:  <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(p <= 0){
            alert('Passo invalido')
        }
        if(i < f){
            // Contagem crescente
            for(let c = i; c <= f; c+= p){
                res.innerHTML += ` ${c} 👉`
            } 
        }else{
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} 👉`
            }
        }
        res.innerHTML += '🏁' 
    }
}