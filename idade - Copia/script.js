function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nas = document.getElementById('txtano').value
    var res = document.getElementById('res')
    var idade = ano - parseInt(nas)
    var sex = document.getElementsByName('txtsex')
    var foto = document.getElementById('foto')
    var fotoidade
    var sexo 
    
    if (nas > ano){
        alert('[ERROR] Ano de nascimento inválido. Verifique os dados e tente novamente!')
        return
    }
        if (sex[0].checked) {
        sexo = 'masculino'
            if (idade >= 0 && idade < 10) {
                fotoidade = 'homembebe.png'
            }else if (idade < 21) {
                fotoidade = 'homemjovem.png'
            }else if (idade < 60) {
                fotoidade = 'homemadulto.png'      
            }else{
                fotoidade = 'homemvelho.png'
            }
        }else{
        sexo = 'feminino'
            if (idade >= 0 && idade < 11) {
                fotoidade = 'mulherbebe.png'
                }else if (idade < 21) {
                    fotoidade = 'mulherjovem.png'
                }else if (idade < 60) {
                    fotoidade = 'mulheradulta.png'        
                }else{
                    fotoidade = 'mulhervelha.png'
                }
        } 

        res.innerHTML = `Você é do sexo ${sexo} e sua idade é de ${idade} anos`
        foto.innerHTML = `<img src = ${fotoidade} alt = foto da idade>`

    }
