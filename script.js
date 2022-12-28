function verificar() {
    var ano=document.getElementById('txtano')
    var res=document.getElementById('resultado')
    var data=new Date()
    var now=data.getFullYear()
    if (ano.value.length == 0 || ano.value> now) {
        window.alert('[ERRO] verifique seus dados e tente novamente.')
    } else {
        var idade= now - Number(ano.value)
        var img=document.createElement('img')
       
        var generoFM=document.getElementsByName('sexo')
        var genero=''
        var preposicao=''
        if (generoFM[0].checked) {
            var genero='Mulher'
            var preposicao='uma'
            if (idade>1 && idade<= 12) {
            img.setAttribute('src','mulher criança.jpg')
            } else {
                if (idade<=20) {
                    img.setAttribute('src', 'mulher jovem.jpg')
                } else {
                    if (idade<=50) {
                        img.setAttribute('src', 'mulher adulta.jpg')
                    } else {
                        img.setAttribute('src', 'mulher velha.jpg')
                    }
                }
            }
        } else {
            if (generoFM[1].checked) {
            var genero='Homem'
            var preposicao='um'
            if (idade>1 && idade<= 12) {
            img.setAttribute('src','homem criança.jpg')
            } else {
                if (idade<=20) {
                    img.setAttribute('src', 'homem jovem.jpg')
                } else {
                    if (idade<=50) {
                        img.setAttribute('src', 'homem adulto.jpg')
                    } else {
                        img.setAttribute('src', 'homem velho.jpg')
                    }
                }
            }
            }
        }
        res.innerHTML=`Verificamos ${preposicao} ${genero} de ${idade} anos de idade.`
        res.appendChild(img)
    }
}

