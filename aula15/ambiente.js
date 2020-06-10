let num = [5, 8, 2, 9, 3,]

num.push()
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O valor do primeiro vetor é ${num[0]}`)
let pos = num.indexOf(3)
if(pos == -1){
    console.log(`Valor não encontrado`)
}else{
console.log(`O valor está na posição ${pos}`)
}
 