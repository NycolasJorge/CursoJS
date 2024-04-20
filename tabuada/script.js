let p = document.getElementById('p')
var item = document.createElement('<p></p>')
   p.appendChild(item)
   item.innerText = OI
function Gerar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('txttab')
    let p = document.getElementById('p')
    tab.innerHTML = ''
    let n = Number(num.value)
    if (num.value.length == 0) {
        alert('[ERROR] Insira os dados carretamente')
    }   
    /*
    for(var c = 1; c <= 10; c++){
        var item = document.createElement('option')
        tab.appendChild(item)
        item.innerText = `${n} + ${c} = ${n + c}`
    */
}