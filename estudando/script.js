function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var year = document.getElementById('year')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var ano = data.getFullYear()
    var fotododia, corfundo

    if (hora >= 0 && hora < 6) {
        fotododia = 'fotomadrugada.png'
        corfundo = '#44478C'
    }else if (hora > 5 && hora < 13) {
        fotododia = 'fotomanha.png'
        corfundo = '#55A0E1'
    }else if (hora > 12 && hora < 18) {
        fotododia = 'fototarde.png'
        corfundo = '#E0781D'
    } else {
        fotododia = 'fotonoite.png'
        corfundo = '#0B3367'
    }

    msg.innerHTML = `Agora são ${hora}:${min}`
    foto.innerHTML = `<img src = ${fotododia} alt = foto do dia>`
    year.innerHTML = `${ano}`
    document.body.style.backgroundColor = corfundo


}