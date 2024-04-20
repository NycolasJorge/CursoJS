function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        Image.src = 'fotomanha.png'
        document.body.style.background = ''
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        Image.src = 'fototarde.png'
    }else{
        //BOA NOITE!
        Image.src = 'fotonoite.png'
    }
}
