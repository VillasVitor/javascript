let num = [2, 8, 9, 1, 3]
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é ${num[0]}`)
let pos = num.indexOf(9)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 1 está na posição ${pos}`)

}