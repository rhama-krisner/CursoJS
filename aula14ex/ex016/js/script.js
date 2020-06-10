function contar(){
    var inicio = document.getElementById('inicioNumero');
    var fim = document.getElementById('fimNumero')
    var passo = document.getElementById('passoNumero')
    var res = document.getElementById('res')


    if(inicio.value.length == 0 || fim.value.length == 0  || passo.value.length == 0){
      res.innerHTML = 'Impossível contar!'
    }else{
      res.innerHTML = 'Contando:<br>'

      var i = Number(inicio.value)
      var f = Number(fim.value)
      var p = Number(passo.value)
      if(p <= 0 ){
        window.alert('Número inválido para PASSO! Será considerado 1!')
        p = 1
      }

      //contagem crescente
      if(i<f){
        for(var c = i; c <= f; c += p){
          res.innerHTML += ` ${c} \u{1f449}`
        }
      }else{ 
        //contagem decrescente
        for(var c = i; f <= c; c-= p){
          res.innerHTML += `${c} \u{1f449}`
        }
        res.innerHTML += `\u{1f3c1}`
      }
      
    }
}