function verificar(){
    var data = new Date()   
    var ano = data.getFullYear()
    var formAno = document.getElementById('ano')
    var res = document.getElementById('res')
    if(formAno.value.length == 0 || Number(formAno.value) > ano)    {
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)

        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/Bebe-H.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/Jovem-H.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/Adulto-H.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/Idoso-H.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/Bebe-M.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('scr', 'img/Jovem-M.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/Adulto-M.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/Idoso-M.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero}, com ${idade} anos.`
        res.appendChild(img)
        img.width = 300
        img.height = 300
        img.style.textAlign = 'center'
        
    }
}


    
