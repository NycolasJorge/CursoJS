function Gerar() {
    var nu = document.getElementById('txtnu')
    var tabu = document.getElementById('seltab')
    if(nu.value.length == 0){
        window.alert('Por favor, digite um número')
    }else{
        var n = Number(nu.value)
        let c = 1
        tabu.innerHTML = ''
        while(c <= 10){
            var intem = document.createElement('option')
            tabu.appendChild(intem)
            intem.text = `${n} x ${c} = ${n*c}`
            intem.value = `tab${c}`
            c++
        }
    }
}