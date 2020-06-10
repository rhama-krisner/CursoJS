function calcular(){
  var num = document.getElementById('num')  
  var tab = document.getElementById('seltab')

  if(num.value.length == 0){
      window.alert('Por favor. Digite um número!')
  }else{
      var i = Number(num.value)
      var x = Number(num.value)
      tab.innerHTML = ''
      for(var i = 1; i <= 10; i++){
          var item = document.createElement('option')
          item.text =`${x} x ${i} = ${x*i}`
          tab.appendChild(item)
      }
  }
  
}
