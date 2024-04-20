function Verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anodeNascimento = document.getElementById('txtano')
    var idade = anoAtual - Number(anodeNascimento.value)
    var sexo = document.getElementsByName('txtsex')
    var res = document.getElementById('res')
    var foto = document.getElementById('foto')
    var sex
    var fotodasidades

    if(Number(anodeNascimento.value) > anoAtual){
    alert('[ERROR] Verifique os dados e tente novamente')
    return
    }
        if(sexo[0].checked){
         sex = 'Masculino'
            if(idade >=0 && idade < 10){
                fotodasidades = 'homembebe.png' 
            }else if(idade < 20){
                fotodasidades = 'homemjovem.png'
            }else if (idade < 60){
                fotodasidades = 'homemadulto.png'
            }else{
                fotodasidades = 'homemvelho.png'
            }
              
        }else{
            sex = 'Feminino'
            if(idade >=0 && idade < 10){
                fotodasidades = 'mulherbebe.png'
            }else if(idade < 20){
                fotodasidades = 'mulherjovem.png'
            }else if (idade < 60){
                fotodasidades = 'mulheradulta.png'
            }else{
                fotodasidades = 'mulhervelha.png'
            }  
        }
    
        foto.innerHTML = `<img src = ${fotodasidades} alt = foto das idades>`
        res.innerHTML = `Você é do sexo ${sex} e tem ${idade} anos`

}