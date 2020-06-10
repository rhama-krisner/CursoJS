function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >=4 && hora < 12){
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#CB7A78'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        document.body.style.background = '#822a04'
        img.src = 'img/tarde.png'
    }else{
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background ='#2b2b2b'
    }

}