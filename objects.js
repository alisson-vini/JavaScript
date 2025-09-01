// criando um objeto
let cachorro = {
    nome: "Laica",
    raca: "pastor alemão",
    idade: 5,
    dono: "Alisson",

    latir: function(){
        return "Au au!"
    },

    informe: function(){
        return `Dono do cachorro: ${this.dono} e o nome do cachorro é: ${this.nome}`
    }

}

// acessando os elementos e metodos de um objeto

console.log(cachorro.nome) // acessado propriedades
console.log(cachorro.dono)

console.log(cachorro.latir()) // acessando métodos
console.log(cachorro.informe())