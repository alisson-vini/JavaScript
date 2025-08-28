// Arrays

let lista = [10, 20, 40, 80] // number array
let nomes = ["Alisson", "Batata", "Arruda"] // string array
let misto = ["Arruda", 25, true] // array misto
let tudo = []

// acessando elementos
console.log(lista[0]) // acessa o primeiro elemento
console.log(lista[lista.length - 1]) // acessa o ultimo elemento

// metodos de adição de elementos
lista.push(160)
lista.unshift(0)

// Remoção de elementos
lista.pop() // remove o ultimo da lista
lista.shift() // remove o primeiro elemento da lista

// Adição em uma posição específica - remoção em uma posição específica
lista.splice(0,4) // remove 2 elementos da posição [1] em diante
lista.splice(1,0, "Arruda", "Programador") // adicina 2 elementos da posição [1] em diante
lista.splice(1,1,"IA", "LM")

// concatenação
tudo = tudo.concat(nomes, misto)

console.log(lista)
console.log(tudo)

// Matrizes (lista de listas)

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


console.log(matriz)