// A maior parte é igual a C

// while
let ativo = true
let numero = 0

while(ativo){ // igual a C

    if (numero === 10){
        ativo = false
    }
    else {
        numero += 2
    }

}

console.log(numero)

for (let i = 1; i <= 3; i++){ // igual a C, mas com let (tipagem dinâmica)
    console.log(i)
}

// Extra: tem como percorrer um array e um dicionário de forma mais fácil

let array = [5,10,15] // Percorrendo Array
for(let numero of array){
    console.log(numero)
}

let objeto = {pessoa:"Alisson", idade:19}
for(let chave in objeto){
    console.log(objeto[chave])
}