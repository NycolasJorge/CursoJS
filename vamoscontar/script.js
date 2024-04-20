function Verificar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpas')
    let msg = document.getElementById('msg')
    msg.innerHTML = ''

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERROR] Insira os dados corretamemte')
    }else{
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        let c

        if (p == 0) {
            alert('[ERROR] Insira os dados corretamente')
        }
        if (i < f) {
            for(c = i; c < f; c += p){
                msg.innerHTML += `${c} ➔` 
            } 
        }else if (i > f) {
            for(c = i; c > f; c -= p){
                msg.innerHTML += `${c} ➔`
            }
        }
        msg.innerHTML += '☝️🤓'
    }
}