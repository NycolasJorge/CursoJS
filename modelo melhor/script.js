function carregar(){
    var msg = document.getElementById('msg');
    var foto = document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    var caminhoImagem, corFundo;

    if(hora >= 0 && hora < 12){
        caminhoImagem = 'fotomanha.png';
        corFundo = '#55A0E1';
    }else if(hora >= 12 && hora < 18){
        caminhoImagem = 'fototarde.png';
        corFundo = '#E0781D';
    }else{
        caminhoImagem = 'fotonoite.png';
        corFundo = '#0B3367';
    }

    msg.innerHTML = `Agora são ${hora} horas.`;
    foto.innerHTML = `<img src="${caminhoImagem}" alt="foto do dia">`;
    document.body.style.background = corFundo;
}