let num = [3, 4, 6, 9, 1]
num.push(7)
num.sort()
console.log(num)
console.log(`O arquivo possui ${num.length} espaços`)
console.log(`O valor 7 está na posição ${num.indexOf(7)}`)

    for(let pos in num){
        console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    }
