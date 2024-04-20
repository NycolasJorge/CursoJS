function Contando() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    res.innerHTML = ''

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossivel contar'
    }else{
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (p == 0) {
            alert('Passo invalido')
        }
        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} ➔`
            }
        }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} ➔`
            }
        } 
        res.innerHTML += '☝️🤓'
    }
}