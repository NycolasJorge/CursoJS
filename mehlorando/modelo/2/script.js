function Gerar() {
    var nu = document.getElementById('txtnu')
    var ta = document.getElementById('seltab')
    ta.innerHTML = ''
    var n = Number(nu.value)
    if(nu.value.length == 0){
        alert('Insira o número')
    }
    for(var c = 1; c <= 10; c++){
        var item = document.createElement('option')
        ta.appendChild(item)
        item.innerText = `${n} + ${c} = ${n+c}`
    }
}